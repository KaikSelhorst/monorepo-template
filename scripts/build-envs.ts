import fs from 'node:fs/promises'
import path from 'node:path'

const WORKSPACES = ['/apps', '/packages']
const EXAMPLE_ENV = '.env.example'
const BASE_ENV = '.env'
const ROOT = process.cwd()

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

async function fileExists(dir: string, filename: string): Promise<boolean> {
  const filePath = path.join(dir, filename)
  try {
    await fs.access(filePath)
    return true
  } catch {
    return false
  }
}

async function copyEnvIfNeeded(projectPath: string) {
  const hasExample = await fileExists(projectPath, EXAMPLE_ENV)
  if (!hasExample) return

  const hasEnv = await fileExists(projectPath, BASE_ENV)
  if (hasEnv) return

  const from = path.join(projectPath, EXAMPLE_ENV)
  const to = path.join(projectPath, BASE_ENV)

  try {
    await fs.copyFile(from, to)
    console.log(
      `Copied: ${path.relative(ROOT, from)} → ${path.relative(ROOT, to)}`,
    )
  } catch (err) {
    console.error(`Failed to copy ${from}:`, (err as Error).message)
  }
}

async function main() {
  const tasks: Promise<void>[] = []

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
      // Skip hidden folders/files
      if (entry.startsWith('.')) continue

      const fullPath = path.join(workspacePath, entry)

      if (!(await isDirectory(fullPath))) continue
      if (!(await hasPackageJson(fullPath))) continue

      tasks.push(copyEnvIfNeeded(fullPath))
    }
  }

  if (tasks.length === 0) {
    console.log('No projects found to check.')
    return
  }

  console.log(`Checking ${tasks.length} project(s)...`)
  await Promise.all(tasks)
  console.log('All done!')
}

main().catch((err) => {
  console.error('Unexpected error:', err)
  process.exit(1)
})
