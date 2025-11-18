import { Button } from '@org/design-system/components/ui/button'
import { createFileRoute } from '@tanstack/react-router'
import { Activity } from 'react'
import { auth } from '@/lib/auth'

export const Route = createFileRoute('/')({
  component: App,
})

function App() {
  const { data, isPending } = auth.useSession()

  return (
    <>
      <header className="container flex justify-between items-center my-4">
        <h1>Zomboid Builds</h1>
        <nav className="flex gap-3">
          <Button
            onClick={() => {
              document.documentElement.classList.toggle('dark')
            }}
          >
            Theme
          </Button>
          <UserMenu isLogged={!!data} isPending={isPending} />
        </nav>
      </header>
      <section className="container">
        <Activity mode={data ? 'visible' : 'hidden'}>
          <h2>Your Data</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>
        </Activity>
      </section>
    </>
  )
}

interface UserMenuProps {
  isLogged: boolean
  isPending: boolean
}

function UserMenu(props: UserMenuProps) {
  const { isLogged, isPending } = props

  if (isPending) return null
  if (isLogged) return <Button onClick={() => auth.signOut()}>Sign Out</Button>

  return (
    <Button
      onClick={() =>
        auth.signIn.social({
          provider: 'discord',
          callbackURL: location.origin,
        })
      }
    >
      Login With Discord
    </Button>
  )
}
