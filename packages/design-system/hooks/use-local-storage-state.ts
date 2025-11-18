import * as React from 'react'

export function useLocalStorageState<T>(localStoragekey: string, value: T) {
  const prevLocalStorageValue = useLocalStorageValue<T>(localStoragekey)
  const [state, setState] = React.useState(prevLocalStorageValue || value)

  React.useEffect(() => {
    localStorage.setItem(localStoragekey, JSON.stringify(state))
  }, [state, localStoragekey])

  return [state, setState] as const
}

function useLocalStorageValue<T>(localStorageKey: string): T | null {
  const value = localStorage.getItem(localStorageKey)
  if (value === null) return value
  return JSON.parse(value) as T | null
}
