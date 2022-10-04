import React, { ReactNode } from "react"
import useDarkMode from "../hooks/useDarkMode"
import Footer from "./Footer"
import Header from "./Header"

const Layout = ({ children }: { children?: ReactNode }) => {
  const { enabled, setEnabled } = useDarkMode()
  return (
    <div className="w-screen h-screen bg-neutral-100 transition-colors duration-200 text-black dark:text-white dark:bg-neutral-400 overflow-hidden">
      <Header />
      <div className="flex flex-col overflow-y-auto overflow-x-hidden h-[100%] w-full">
        <main className="w-full mt-24 flex flex-col items-center">
          {children}
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default Layout
