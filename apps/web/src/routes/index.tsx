import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  return (
    <div className="flex justify-center items-center h-screen">
      <hgroup>
        <h1 className="text-2xl">
          Building your own Zomboid builds with ease.
        </h1>
      </hgroup>
    </div>
  )
}
