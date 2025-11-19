import fs from 'node:fs/promises'
import path from 'node:path'

const WORKSPACES = ['/apps', '/packages']
const ROOT = process.cwd()

// Set to false if you don't want to delete node_modules from the root
const CLEAN_ROOT_NODE_MODULES = true

async function isDirectory(p: string): Promise<boolean> {
  try {
    return (await fs.stat(p)).isDirectory()
  } catch {
    return false
  }
}

async function hasPackageJson(projectPath: string): Promise<boolean> {
  const pkgPath = path.join(projectPath, 'package.json')
  try {
    await fs.access(pkgPath)
    return true
  } catch {
    return false
  }
}

async function hasNodeModules(projectPath: string): Promise<boolean> {
  const nodeModulesPath = path.join(projectPath, 'node_modules')
  try {
    await fs.access(nodeModulesPath)
    return true
  } catch {
    return false
  }
}

async function deleteNodeModules(projectPath: string, label: string = '') {
  const nodeModulesPath = path.join(projectPath, 'node_modules')

  if (!(await hasNodeModules(projectPath))) {
    return
  }

  try {
    await fs.rm(nodeModulesPath, { recursive: true, force: true })
    const relativePath = path.relative(ROOT, nodeModulesPath)
    console.log(`Deleted: ${relativePath}${label}`)
  } catch (err) {
    const relativePath = path.relative(ROOT, nodeModulesPath)
    console.error(`Failed to delete ${relativePath}:`, (err as Error).message)
  }
}

async function main() {
  const tasks: Promise<void>[] = []

  // 1. Clean root node_modules (if enabled)
  if (CLEAN_ROOT_NODE_MODULES) {
    if (await hasPackageJson(ROOT)) {
      tasks.push(deleteNodeModules(ROOT, ' (monorepo root)'))
    }
  }

  // 2. Clean projects inside workspaces
  for (const ws of WORKSPACES) {
    const workspacePath = path.join(ROOT, ws)
    let entries: string[] = []

    try {
      entries = await fs.readdir(workspacePath)
    } catch {
      console.warn(`Workspace not found or inaccessible: ${workspacePath}`)
      continue
    }

    for (const entry of entries) {
      if (entry.startsWith('.')) continue // ignore .turbo, .git, etc.
      const fullPath = path.join(workspacePath, entry)

      if (!(await isDirectory(fullPath))) continue
      if (!(await hasPackageJson(fullPath))) continue

      tasks.push(deleteNodeModules(fullPath))
    }
  }

  if (tasks.length === 0) {
    console.log('No node_modules found to remove.')
    return
  }

  console.log(`Removing node_modules from ${tasks.length} location(s)...`)
  await Promise.all(tasks)
  console.log('Cleanup completed successfully!')
}

main().catch((err) => {
  console.error('Unexpected error:', err)
  process.exit(1)
})
