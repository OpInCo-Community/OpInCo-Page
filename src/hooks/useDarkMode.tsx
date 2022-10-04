import React, { createContext, useContext, useEffect } from "react"
import useLocalStorage from "./useLocalStorage"

interface Context {
  enabled: boolean
  setEnabled: (val: boolean) => void
  toggleDark: () => void
}

const darkModeContext = createContext<Context>({} as Context)

const useDarkMode = (): Context => {
  return useContext(darkModeContext)
}

export function DarkModeProvider(props: React.PropsWithChildren<{}>) {
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

  const toggleDark = () => {
    setEnabled(!enabled)
  }

  const value = { enabled, setEnabled, toggleDark }

  return (
    <darkModeContext.Provider
      value={value}
      {...props}
    ></darkModeContext.Provider>
  )
}

export default useDarkMode
