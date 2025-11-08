import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <hgroup>
        <h1 className="text-2xl">Template</h1>
      </hgroup>
    </div>
  )
}
