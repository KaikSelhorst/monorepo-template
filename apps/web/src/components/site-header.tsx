import { Button } from '@org/design-system/components/ui/button'
import { Theme } from '@org/design-system/components/ui/icons'
import { useTheme } from '@org/design-system/providers'
import { auth } from '@/lib/auth'

export function SiteHeader() {
  console.log('Header')
  return (
    <header className="container flex justify-end items-center my-4">
      <nav className="flex gap-3">
        <ThemeButton />
        <UserMenu />
      </nav>
    </header>
  )
}

function ThemeButton() {
  const { toggleTheme } = useTheme()
  return (
    <Button onClick={toggleTheme} variant="foreground">
      <Theme className="size-4.5" />
    </Button>
  )
}

function UserMenu() {
  const { isPending, data } = auth.useSession()

  if (isPending) return null

  if (!data) {
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

  return <Button onClick={() => auth.signOut()}>Sign Out</Button>
}
