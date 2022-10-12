import Image from "next/image"
import { FaGithub } from "react-icons/fa"
import hacktoberfestlogo from "../public/assets/hacktoberfestlogo.jpg"
import ContributorCard from "../src/components/hacktoberweek/ContributorCard"
import announcement from "../public/assets/announcement_poster.png"
import AccentButton from "../src/components/AccentButton"
import day1 from "../public/assets/day1.png"
import day2 from "../public/assets/day2.png"
import day3 from "../public/assets/day3.png"
import day4 from "../public/assets/day4.png"
import contributorData from "../contribution.json"
import { useState } from "react"

export interface Contributor {
  name: string
  github: string
  linkedIn: string
  "project-name": string
  "project-link": string
}

export default function Hacktoberfest() {
  const [data, setData] = useState<Contributor[]>(contributorData)
  return (
    <>
      <div className="container py-4 -mx-6 w-full flex flex-col">
        {/* hacktoberfest logo */}
        <div className="flex flex-col lg:flex-row gap-8 justify-center items-center">
          <span className="flex max-w-xs m-5">
            <Image
              src={announcement}
              //   layout="responsive"
              objectFit="contain"
              className="sm:rounded-3xl "
              alt="Hacktoberfest Official Logo"
            />
          </span>
          <span className="grid px-4 my-4">
            <div className="flex text-center justify-center align-center items-center flex-col">
              <div className="flex items-center px-3 flex-col max-w-xl mt-7">
                <h1 className="lg:text-6xl text-center md:text-5xl sm:text-5xl xs:text-5xl xxs:text-5xl text-4xl leading-snug font-bold">
                  HacktoberWeek
                </h1>
                <h3 className="text-xl mt-7">
                  Hack Club BIT Durg & OpInCo Community presents A week long
                  In-person event conducting in Bhilai Institute of Technology,
                  Durg to celebrate Hacktoberfest and Open source.
                </h3>
                <div className="uppercase flex mt-6 text-lg gap-8 font-bold">
                  7-15th October at BIT DURG
                </div>
                <div className="flex text-xl mt-6 gap-4">
                  With everything from code, low-code to no-code sessions, we
                  have got you covered🤞🏻 Mark your calendars and come boost your
                  open-source journey!
                </div>
                <div className="flex mt-6 text-lg gap-8 register-button justify-center m-12">
                  <a
                    href="https://forms.gle/4BF2SQ1vBojJhj338/"
                    target="__blank"
                  >
                    <AccentButton
                      className="tracking-wider shadow-[#0003] shadow-md uppercase"
                      text="Register!"
                      type="fill"
                    />
                  </a>
                </div>
              </div>
            </div>
          </span>
        </div>
      </div>
      <div className="container px-4 flex flex-col">
        <h1 className="text-2xl md:text-4xl my-6 font-semibold">
          Upcoming events
        </h1>
        <div className="grid mt-4 md:grid-cols-2 gap-8">
          <div className="flex w-[30rem]3">
            <Image src={day1} objectFit="contain" />
          </div>
          <div className="flex w-[30rem]3">
            <Image src={day2} objectFit="contain" />
          </div>
          <div className="flex w-[30rem]3">
            <Image src={day3} objectFit="contain" />
          </div>
          <div className="flex w-[30rem]3">
            <Image src={day4} objectFit="contain" />
          </div>
        </div>
      </div>
      <div className="flex px-4 container flex-col mt-10">
        <h1 className="text-2xl md:text-4xl my-6 font-semibold">
          Our Contributors{" "}
          <span className="text-gray-700 dark:text-gray-400">
            &amp; Projects
          </span>
        </h1>
        <div className="flex flex-col gap-6">
          {data?.map((value) => (
            <ContributorCard data={value} key={value.github} />
          ))}
        </div>
      </div>
    </>
  )
}

// import Hacktoberfest from "../HacktoberWeek/hacktoberweek-page/hacktoberweek"

// export default function HacktoberWeek() {
//   return <Hacktoberfest />
// }
