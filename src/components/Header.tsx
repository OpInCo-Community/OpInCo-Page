import Image from "next/image"
import { useRouter } from "next/router"
import React, { useState } from "react"
import logo from "../../public/assets/opinco.png"
import logoDark from "../../public/assets/opincoDark.png"
import useDarkMode from "../hooks/useDarkMode"
import { FaBars } from "react-icons/fa"
import { BsFillMoonStarsFill, BsFillSunFill } from "react-icons/bs"
import Dynamic from "./Dynamic"

const Header = () => {
  const { enabled, toggleDark } = useDarkMode()
  const [navbarOpen, setNavbarOpen] = useState(false)
  return (
    <Dynamic>
      <div className="flex fixed top-0 xl:px-6 right-0 backdrop-blur-md left-0 z-30 justify-center from-[#dcdcdc9d] py-3 md:py-5 dark:from-[#3d424485] bg-gradient-to-tr to-transparent">
        <div className="container px-4 md:px-0 items-center flex justify-between">
          {enabled ? (
            <div className="flex h-11 px-2 mr-auto">
              <Image src={logoDark} width={110} objectFit="contain" />
            </div>
          ) : (
            <div className="flex h-11 rounded-md mr-auto">
              <Image src={logo} width={110} objectFit="contain" />
            </div>
          )}
          <ul
            className={`z-30 transition-transform delay-300 ${
              navbarOpen
                ? "fixed h-screen text-lg top-0 bottom-0 right-0 left-1/3 flex gap-6 bg-gradient-to-t from-accent-200 to-neutral-200 dark:via-neutral-400 dark:to-neutral-400 translate-x-0 flex-col items-end bg-accent pt-20 pr-4 md:left-1/2"
                : "pointer-events-none absolute translate-x-full items-center opacity-0 md:pointer-events-auto md:static md:flex md:translate-x-0 md:opacity-100"
            }`}
          >
            <NavItem
              text="Home"
              link="/"
              onClick={() => setNavbarOpen(false)}
            />
            <NavItem
              text="About us"
              link="/aboutus"
              onClick={() => setNavbarOpen(false)}
            />
            <NavItem
              text="Events"
              link="/hacktoberweek"
              onClick={() => setNavbarOpen(false)}
            />
            <NavItem
              text="Team"
              link="/team"
              onClick={() => setNavbarOpen(false)}
            />
            <NavItem
              text="Blog"
              link="/blogs"
              onClick={() => setNavbarOpen(false)}
            />
            <div
              className={`p-2 cursor-pointer mr-3 md:mr-0 rounded-md text-2xl ml-6 ${
                enabled
                  ? "bg-neutral-300"
                  : "bg-gray-400 shadow-xl text-gray-700"
              }`}
              onClick={() => {
                toggleDark()
              }}
            >
              {!enabled ? <BsFillMoonStarsFill /> : <BsFillSunFill />}
            </div>
          </ul>
          <FaBars
            size={25}
            onClick={() => {
              setNavbarOpen(!navbarOpen)
            }}
            className={`z-40 text-accent-200 mr-4 h-full cursor-pointer ${
              !navbarOpen && "md:hidden"
            }`}
          />
        </div>
      </div>
    </Dynamic>
  )
}

const NavItem = ({
  text,
  link,
  onClick,
}: {
  text: string
  link?: string
  onClick?: () => void
}) => {
  const router = useRouter()
  return (
    <li className="">
      <div
        onClick={() => {
          link && router.push(link)
          onClick!()
        }}
        className="my-auto mx-3 lg:mx-6 bg-neutral-100 px-2 rounded-md hover:border-2 dark:bg-neutral-400 border-dashed border-accent-200 cursor-pointer lg:text-xl transition-all ease-linear"
      >
        <span>{text}</span>
      </div>
    </li>
  )
}

export default Header
