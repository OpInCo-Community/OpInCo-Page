import React, { useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

const useDarkMode = (): [val: boolean, setVal: (val: boolean) => void] => {
  const initialValue =
    typeof window !== "undefined"
      ? JSON.parse(window.localStorage.getItem("dark-mode") as string)
      : false
  const [enabled, setEnabled] = useLocalStorage<boolean>(
    "dark-mode",
    initialValue
  )

  useEffect(() => {
    const className = "dark"
    const bodyClass = window.document.body.classList

    if (enabled) {
      if (!bodyClass.contains(className)) bodyClass.add(className)
    } else bodyClass.remove(className)
  }, [enabled])

  return [enabled, setEnabled]
}

export default useDarkMode
