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
      <div className="flex fixed top-0 right-0 backdrop-blur-md left-0 z-30 pt-6 justify-center from-[#dcdcdc9d] pb-3 dark:from-[#3d424485] bg-gradient-to-tr to-transparent">
        <div className="container flex justify-between">
          {enabled ? (
            <div className="flex h-11 px-2 mb-3 bg-neutral-400 rounded-md py-1 mr-auto">
              <Image src={logoDark} width={110} objectFit="contain" />
            </div>
          ) : (
            <div className="flex h-16 rounded-md mr-auto">
              <Image src={logo} width={110} objectFit="contain" />
            </div>
          )}
          <ul
            className={`z-30 transition-transform delay-300 ${
              navbarOpen
                ? "fixed top-0 bottom-0 right-0 left-1/3 flex translate-x-0 flex-col items-end bg-accent pt-20 pr-4 md:left-1/2"
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
              link="/events"
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
              className={`p-2 cursor-pointer rounded-md text-2xl ml-6 ${
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
            color="#fff"
            onClick={() => {
              setNavbarOpen(!navbarOpen)
            }}
            className={`z-40 mr-4 h-full cursor-pointer ${
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
        className="my-auto mx-6 cursor-pointer text-xl transition-all ease-linear hover:text-accent-200"
      >
        <span>{text}</span>
      </div>
    </li>
  )
}

export default Header
