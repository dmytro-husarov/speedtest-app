import { useCallback, useState } from 'react'


export function useLocalStorage(key, initialValue) {
  const [storedValue, setStoredValue] = useState(() => {
    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : initialValue
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = useCallback(value => {
    try {
      const valueToStore = value instanceof Function
        ? value(storedValue)
        : value
      if (valueToStore > storedValue) {
        setStoredValue(valueToStore)
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
      }
    } catch (error) {
      console.log(error)
    }
  }, [storedValue, key])

  return [storedValue, setValue]
}
