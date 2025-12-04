import { Button } from '@org/design-system/components/ui/button'
import { LogOut, Theme } from '@org/design-system/components/ui/icons'

import { useTheme } from '@org/design-system/providers'
import { auth } from '@/lib/auth'

export function SiteHeader() {
  return (
    <header className="container flex justify-end items-center my-4">
      <nav className="flex gap-3 items-center">
        <ThemeButton />
        <UserMenu />
      </nav>
    </header>
  )
}

function ThemeButton() {
  const { toggleTheme } = useTheme()
  return (
    <Button onClick={toggleTheme} variant="ghost">
      <Theme className="size-4.5" />
    </Button>
  )
}

function UserMenu() {
  const { isPending, data } = auth.useSession()

  // This variable was added because I don't have money to keep a backend just to
  // show a template.
  // Note: remove this condition when you are using this template
  const disableBecauseImPoor = import.meta.env.PROD
  if (disableBecauseImPoor) return null

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

  return (
    <Button onClick={() => auth.signOut()}>
      <LogOut />
      Logout
    </Button>
  )
}
