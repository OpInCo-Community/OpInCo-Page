import React, { Dispatch, SetStateAction, useState } from "react"

// type setValue<T> = Dispatch<T>

function useLocalStorage<T>(
  key: string,
  initialValue: T
): [T, (val: T) => void] {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      if (typeof window !== "undefined") {
        const item = window.localStorage.getItem(key)
        return item ? JSON.parse(item) : initialValue
      }
    } catch (error) {
      console.log(error)
      return initialValue
    }
  })

  const setValue = (value: any) => {
    try {
      const valueToStore =
        value instanceof Function ? value(storedValue) : value
      setStoredValue(valueToStore)

      if (typeof window !== undefined)
        window.localStorage.setItem(key, JSON.stringify(valueToStore))
    } catch (error) {
      console.log(error)
    }
  }

  return [storedValue, setValue]
}

export default useLocalStorage
