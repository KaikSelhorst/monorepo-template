import * as React from 'react'

export function useLocalStorageState<T>(
  localStoragekey: string,
  defaultValue: T,
) {
  const prevLocalStorageValue = useLocalStorageValue<T>(
    localStoragekey,
    defaultValue,
  )
  const [state, setState] = React.useState(prevLocalStorageValue)

  const normalizeLocalStorageData = (data: unknown) => {
    if (typeof data === 'string') {
      return data
    }
    return JSON.stringify(data)
  }

  React.useEffect(() => {
    localStorage.setItem(localStoragekey, normalizeLocalStorageData(state))
  }, [state, localStoragekey])

  return [state, setState] as const
}

function useLocalStorageValue<T>(localStorageKey: string, defaultValue: T): T {
  const value = localStorage.getItem(localStorageKey)
  if (value === null) return defaultValue

  if (typeof defaultValue === 'string') {
    return value as T
  }

  try {
    return JSON.parse(value) as T
  } catch {
    return defaultValue
  }
}
