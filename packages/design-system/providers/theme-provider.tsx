import { useLocalStorageState } from '@org/design-system/hooks'
import * as React from 'react'

type ThemeEnum = 'dark' | 'light'

interface ThemeContext {
  theme: ThemeEnum
  toggleTheme: () => void
  setTheme: (theme: ThemeEnum) => void
}

const context = React.createContext<ThemeContext | null>(null)

interface ThemeProviderProps {
  defaultTheme: ThemeEnum
  children: React.ReactNode
}

export function ThemeProvider(props: ThemeProviderProps) {
  const { defaultTheme, children } = props
  const [theme, setTheme] = useLocalStorageState('theme', defaultTheme)

  const toggleTheme = React.useCallback(() => {
    setTheme((theme) => (theme === 'dark' ? 'light' : 'dark'))
  }, [setTheme])

  React.useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark')
    } else document.documentElement.classList.remove('dark')
  }, [theme])

  return (
    <context.Provider value={{ theme, setTheme, toggleTheme }}>
      {children}
    </context.Provider>
  )
}

export function useTheme() {
  const ctx = React.useContext(context)

  if (ctx === null) throw new Error('Invalid Theme Hook Call')
  return ctx
}
