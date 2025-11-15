import { createFileRoute } from '@tanstack/react-router'
import { auth } from '@/lib/auth'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { data } = auth.useSession()

  return (
    <div className="flex p-4 gap-4">
      {data ? (
        <button
          type="button"
          className="p-4 bg-lime-400 text-black rounded-sm h-fit"
          onClick={() => auth.signOut()}
        >
          Sign Out
        </button>
      ) : (
        <button
          type="button"
          className="p-4 bg-lime-400 text-black rounded-sm h-fit"
          onClick={() =>
            auth.signIn.social({
              provider: 'discord',
              callbackURL: location.origin,
            })
          }
        >
          Login With Discord
        </button>
      )}

      <pre className="bg-zinc-900 p-4 rounded-sm">
        {JSON.stringify(data, null, 2)}
      </pre>
    </div>
  )
}
