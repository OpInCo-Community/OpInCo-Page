import Image from "next/image"
import React from "react"
import { BsTwitter, BsYoutube } from "react-icons/bs"
import { FaInstagram, FaLinkedin } from "react-icons/fa"
import logoDark from "../../public/assets/opincoDark.png"

const Footer = () => {
  return (
    <div className="w-full flex items-center flex-col bg-gradient-to-t pt-36 via-accent-200 text-white from-accent-200 to-transparent">
      <div className="border-b-2 border-white flex w-full justify-center">
        <div className="container pb-10 grid grid-cols-6">
          <div className="flex items-center col-span-2">
            <div className="flex -translate-x-5 h-14 px-2">
              <Image src={logoDark} objectFit="contain" />
            </div>
          </div>
          <div className="flex flex-col gap-4 text-lg">
            <p>Our story</p>
            <p>About us</p>
            <p>Team</p>
          </div>
          <div className="flex flex-col gap-4 text-lg">
            <p>Upcomming events</p>
            <p>Latest events</p>
            <p>Blog</p>
          </div>
          <div className="col-span-2 flex flex-row-reverse">
            <div className="flex flex-col gap-3">
              <h4 className="text-2xl font-medium">Contact us</h4>
              <input
                type="text"
                placeholder="email"
                className="bg-white focus:outline-none text-gray-800 max-w-[20rem] px-4 rounded-md py-2"
              />
              <div className="flex text-xl gap-4">
                <FaLinkedin />
                <FaInstagram />
                <BsTwitter />
                <BsYoutube />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container flex py-8 justify-between ">
        <div className="flex gap-4 text-xl">
          <h5>Copyright Opinco 2022</h5>
        </div>
        <div className="text-xl">
          Site developed By - Opinco Team Technical Team
        </div>
      </div>
    </div>
  )
}

export default Footer
