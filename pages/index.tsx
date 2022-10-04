import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import illustration from "../public/assets/dark_illustration.png"
import illustration_light from "../public/assets/light_illustration.png"
import openPng from "../public/assets/Open.png"
import incluPng from "../public/assets/Inclusive.png"
import commPng from "../public/assets/Community.png"
import opdev from "../public/assets/opindev.png"
import AccentButton from "../src/components/AccentButton"
import useDarkMode from "../src/hooks/useDarkMode"
import {
  FaDiscord,
  FaArrowAltCircleRight,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaRegHandshake,
} from "react-icons/fa"
import { BsTwitter, BsYoutube } from "react-icons/bs"
import { BiBarChartSquare } from "react-icons/bi"
import { HiOutlinePresentationChartLine } from "react-icons/hi"
import { MdUpdate } from "react-icons/md"

const Home: NextPage = () => {
  const { enabled } = useDarkMode()
  return (
    <>
      <Head>
        <title>OpInCo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex flex-col items-center">
        <div className="container w-full flex flex-col">
          {/* intro */}
          <div className="grid h-[90vh] grid-cols-2">
            <div className="flex justify-center items-center flex-col">
              <div className="flex flex-col max-w-xl">
                <h1 className="text-5xl leading-snug font-bold">
                  Tune in for Talks, <br /> Build Connection and
                  Overhaul your Ability.
                </h1>
                <h3 className="uppercase text-2xl tracking-wider mt-7">
                  Join us now!
                </h3>
                <div className="flex mt-6 text-lg gap-8">
                  <AccentButton
                    className="tracking-wider shadow-[#0003] shadow-md uppercase"
                    Icon={FaDiscord}
                    text="Discord"
                    type="fill"
                  />
                  <AccentButton
                    className="tracking-wider shadow-[#0003] shadow-md uppercase"
                    Icon={FaGithub}
                    text="GitHub"
                    type="outline"
                  />
                </div>
                <div className="flex text-xl mt-6 gap-4">
                  <FaLinkedin />
                  <FaInstagram />
                  <BsTwitter />
                  <BsYoutube />
                </div>
              </div>
            </div>
            <div className="flex items-center justify-center ">
              <div className="flex">
                <Image
                  src={enabled ? illustration : illustration_light}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          {/* about us */}
          <div className="grid mt-20 grid-cols-2">
            <div className="flex flex-col items-center">
              <div className="flex flex-col max-w-xl gap-7">
                <h1 className="text-4xl font-bold">About us</h1>
                <p className="text-gray-600 dark:text-white leading-loose text-xl">
                  Oplnco previously known as Devstucom represents Open Inclusive
                  Collaborative was founded in year 2020. <br />
                  <br />
                  We as a community help our fellow students in building skills
                  through direct discussions on advance topics of science and
                  technology. We urge individual to contribute in open source.{" "}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center ml-20">
              <div className="flex flex-col max-w-xl gap-8">
                <div className="flex flex-col relative gap-3">
                  <div className="bg-accent-200 absolute w-0.5 h-96 left-[-4.4rem] top-5"></div>
                  <h4 className="text-3xl relative font-semibold flex text-accent-200">
                    <div className="flex absolute top-1/2 -left-24 w-14 -translate-y-1/2 h-20 bg-neutral-100 py-3 border-neutral-100 dark:bg-neutral-400 transition-colors duration-200">
                      <Image objectFit="contain" src={openPng} />
                    </div>
                    Open
                  </h4>
                  <p className="text-lg italic text-gray-700 dark:text-white ">
                    &quot;Sharing is caring&quot;, and with opensource, sharing
                    is easier {";) "}
                    At OpInCo, we believe{" "}
                    <span className="text-accent-200">
                      Open=Opportunity
                    </span>{" "}
                    and in approaching all aspects of life with an
                    &quot;open-source attitude&quot; while upskilling & evolving
                    as a team.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-3xl relative font-semibold flex text-accent-200">
                    <div className="flex absolute top-1/2 -left-24 w-14 -translate-y-1/2 h-20 bg-neutral-100 py-3 border-neutral-100 dark:bg-neutral-400 transition-colors duration-200">
                      <Image objectFit="contain" src={incluPng} />
                    </div>
                    Inclusive
                  </h4>
                  <p className="text-lg italic text-gray-700 dark:text-white ">
                    Diversity is vital, both in{" "}
                    <span className="text-accent-200">Culture</span> & in{" "}
                    <span className="text-accent-200">Technology</span>, with
                    inclusion being the key to advancement. Here at OpInCo, we
                    strive to explore and cover a wide range of technical and
                    related fields benefitting both programmers and
                    non-programmers {":)"}
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-3xl relative font-semibold flex text-accent-200">
                    <div className="flex absolute top-1/2 -left-24 w-14 -translate-y-1/2 h-20 bg-neutral-100 py-3 border-neutral-100 dark:bg-neutral-400 transition-colors duration-200">
                      <Image objectFit="contain" src={commPng} />
                    </div>
                    Community
                  </h4>
                  <p className="text-lg italic text-gray-700 dark:text-white ">
                    Simply stated, we profess:{" "}
                    <span className="text-accent-200">
                      &quot;Less Me and More We&quot;
                    </span>{" "}
                    when it comes to innovation. We aim to join hands for
                    achieving and creating wonderful possibilities together.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex relative">
              <div className="flex absolute h-[550px] translate-x-16 -translate-y-16">
                <Image objectFit="contain" src={opdev} />
              </div>
            </div>
            <div className="flex justify-center my-28 flex-col">
              <div className="flex flex-col">
                <div className="text-4xl font-semibold">
                  Know more about us!
                </div>
              </div>
              <div className="flex mt-6 text-xl">
                <AccentButton
                  text="read our story"
                  className="uppercase flex-row-reverse"
                  Icon={FaArrowAltCircleRight}
                  type="fill"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="h-screen w-full flex justify-center from-[#dcdcdc9d] dark:from-[#3d424485] bg-gradient-to-tr to-transparent mt-32">
          <div className="container pt-20 grid grid-cols-3">
            <div className="col-span-2 flex max-w-3xl flex-col">
              <h1 className="font-semibold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-accent-200 to-accent-100">
                Why Join OpInCo?
              </h1>
              <div className="flex-col flex mt-16 gap-12">
                <div className="flex flex-col gap-2">
                  <div className="flex text-3xl items-center gap-4 font-medium">
                    <BiBarChartSquare />
                    <h4>Collaboration in Projects</h4>
                  </div>
                  <p className="text-gray-700 text-xl dark:text-white ml-12">
                    OpInCo provides an excellent opportunity for project
                    collaborations as it has experts from diverse technical
                    fields.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex text-3xl items-center gap-4 font-medium">
                    <HiOutlinePresentationChartLine />
                    <h4>Guidence Sessions</h4>
                  </div>
                  <p className="text-gray-700 text-xl dark:text-white ml-12">
                    We engage industry experts to deliver mentorship sessions on
                    resume building, roadmaps to develop skills, and a lot more.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex text-3xl items-center gap-4 font-medium">
                    <MdUpdate />
                    <h4>Stay up to date!</h4>
                  </div>
                  <p className="text-gray-700 text-xl dark:text-white ml-12">
                    We regularly keep track of upcoming events and organize
                    sessions to introduce our members to new technologies, so
                    you will never be short of new updates.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex text-3xl items-center gap-4 font-medium">
                    <FaRegHandshake />
                    <h4>Connect with people</h4>
                  </div>
                  <p className="text-gray-700 text-xl dark:text-white ml-12">
                    OpInCo provides the opportunity to connect with like-minded
                    people from around the world.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex items-center">
              {enabled ? (
                <div className="">
                  <svg
                    width="456"
                    height="635"
                    viewBox="0 0 456 635"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M89.3817 54.2742C88.3739 53.2789 88.3425 51.633 89.3115 50.5979L103.447 35.5L89.3115 20.4021C88.3425 19.367 88.3739 17.7211 89.3817 16.7258C90.3896 15.7306 91.9921 15.7629 92.9612 16.7979L107.94 32.7969C109.353 34.3066 109.353 36.6934 107.94 38.2031L92.9612 54.2021C91.9921 55.2372 90.3895 55.2694 89.3817 54.2742ZM67.2305 54.2742C66.2227 53.2789 66.1913 51.633 67.1603 50.5979L81.2955 35.5L67.1603 20.4021C66.1913 19.367 66.2227 17.7211 67.2305 16.7258C68.2383 15.7306 69.8409 15.7629 70.81 16.7979L85.7887 32.7969C87.2022 34.3066 87.2022 36.6934 85.7887 38.2031L70.81 54.2021C69.8409 55.2371 68.2383 55.2694 67.2305 54.2742ZM45.0091 50.5979C44.0401 51.633 44.0715 53.2789 45.0793 54.2742C46.0871 55.2694 47.6897 55.2371 48.6588 54.2021L63.6375 38.2031C65.051 36.6934 65.051 34.3066 63.6375 32.7969L48.6588 16.7979C47.6897 15.7628 46.0871 15.7306 45.0793 16.7258C44.0715 17.7211 44.0401 19.367 45.0091 20.4021L59.1443 35.5L45.0091 50.5979ZM22.9281 54.2742C21.9203 53.2789 21.8889 51.633 22.8579 50.5979L36.9931 35.5L22.8579 20.4021C21.8889 19.367 21.9203 17.7211 22.9281 16.7258C23.936 15.7306 25.5385 15.7628 26.5076 16.7979L41.4863 32.7969C42.8998 34.3066 42.8998 36.6934 41.4863 38.2031L26.5076 54.2021C25.5385 55.2371 23.9359 55.2694 22.9281 54.2742ZM0.706732 50.5979C-0.262335 51.633 -0.230911 53.2789 0.77692 54.2742C1.78475 55.2694 3.38734 55.2371 4.3564 54.2021L19.3351 38.2031C20.7486 36.6934 20.7486 34.3066 19.3351 32.7969L4.35641 16.7979C3.38734 15.7628 1.78475 15.7306 0.776923 16.7258C-0.230907 17.7211 -0.262332 19.367 0.706735 20.4021L14.8419 35.5L0.706732 50.5979Z"
                      fill="white"
                    />
                    <path
                      d="M247 377H368.366C414.556 377 452 414.608 452 460.999C452 507.389 414.556 545 368.366 545H331.855"
                      stroke="#34C69F"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M345.234 413C372.164 413 394 434.938 394 462C394 489.059 372.164 511 345.234 511L309.766 511C282.836 511 261 489.059 261 462C261 434.938 282.836 413 309.766 413L345.234 413Z"
                      stroke="#1DC9FF"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="20 20"
                    />
                    <path
                      d="M150.5 306.079C129.237 306.079 112 323.073 112 344.038C112 365.005 129.237 382 150.5 382C171.763 382 189 365.005 189 344.038V189"
                      stroke="#4484AB"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M232 140C255.196 140 274 120.971 274 97.5C274 74.0272 255.196 55 232 55C208.804 55 190 74.0272 190 97.5C190 120.971 208.804 140 232 140Z"
                      stroke="#ADB2B1"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M440 217H350.056C293.14 217 247 263.562 247 321"
                      stroke="#34C69F"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M138 144C138 150.226 138 228.594 138 267"
                      stroke="#34C69F"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="15 15"
                    />
                    <path
                      d="M232 189C283.914 189 326 147.587 326 96.5002C326 45.4137 283.914 4 232 4C180.085 4 138 45.4137 138 96.5002"
                      stroke="white"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M299.132 575.361V590.75C299.132 612.455 281.474 630.051 259.703 630.051C237.924 630.051 220.264 612.455 220.264 590.75V578.003C220.264 556.461 202.742 539 181.137 539C159.522 539 142 556.461 142 578.003V593.69"
                      stroke="white"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              ) : (
                <div className="">
                  <svg
                    width="456"
                    height="635"
                    viewBox="0 0 456 635"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M89.3817 54.2742C88.3739 53.2789 88.3425 51.633 89.3115 50.5979L103.447 35.5L89.3115 20.4021C88.3425 19.367 88.3739 17.7211 89.3817 16.7258C90.3896 15.7306 91.9921 15.7629 92.9612 16.7979L107.94 32.7969C109.353 34.3066 109.353 36.6934 107.94 38.2031L92.9612 54.2021C91.9921 55.2372 90.3895 55.2694 89.3817 54.2742ZM67.2305 54.2742C66.2227 53.2789 66.1913 51.633 67.1603 50.5979L81.2955 35.5L67.1603 20.4021C66.1913 19.367 66.2227 17.7211 67.2305 16.7258C68.2383 15.7306 69.8409 15.7629 70.81 16.7979L85.7887 32.7969C87.2022 34.3066 87.2022 36.6934 85.7887 38.2031L70.81 54.2021C69.8409 55.2371 68.2383 55.2694 67.2305 54.2742ZM45.0091 50.5979C44.0401 51.633 44.0715 53.2789 45.0793 54.2742C46.0871 55.2694 47.6897 55.2371 48.6588 54.2021L63.6375 38.2031C65.051 36.6934 65.051 34.3066 63.6375 32.7969L48.6588 16.7979C47.6897 15.7629 46.0871 15.7306 45.0793 16.7258C44.0715 17.7211 44.0401 19.367 45.0091 20.4021L59.1443 35.5L45.0091 50.5979ZM22.9281 54.2742C21.9203 53.2789 21.8889 51.633 22.8579 50.5979L36.9931 35.5L22.8579 20.4021C21.8889 19.367 21.9203 17.7211 22.9281 16.7258C23.936 15.7306 25.5385 15.7628 26.5076 16.7979L41.4863 32.7969C42.8998 34.3066 42.8998 36.6934 41.4863 38.2031L26.5076 54.2021C25.5385 55.2371 23.936 55.2694 22.9281 54.2742ZM0.706734 50.5979C-0.262336 51.633 -0.230911 53.2789 0.776917 54.2742C1.78475 55.2694 3.38734 55.2371 4.3564 54.2021L19.3351 38.2031C20.7486 36.6934 20.7486 34.3066 19.3351 32.7969L4.3564 16.7979C3.38734 15.7628 1.78476 15.7306 0.77692 16.7258C-0.230908 17.7211 -0.262334 19.367 0.706737 20.4021L14.8419 35.5L0.706734 50.5979Z"
                      fill="white"
                    />
                    <path
                      d="M247 377H368.366C414.556 377 452 414.608 452 460.999C452 507.389 414.556 545 368.366 545H331.855"
                      stroke="#34C69F"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M345.234 413C372.164 413 394 434.938 394 462C394 489.059 372.164 511 345.234 511L309.766 511C282.836 511 261 489.059 261 462C261 434.938 282.836 413 309.766 413L345.234 413Z"
                      stroke="#1DC9FF"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="20 20"
                    />
                    <path
                      d="M150.5 306.079C129.237 306.079 112 323.073 112 344.038C112 365.005 129.237 382 150.5 382C171.763 382 189 365.005 189 344.038V189"
                      stroke="#4484AB"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M232 140C255.196 140 274 120.971 274 97.5C274 74.0272 255.196 55 232 55C208.804 55 190 74.0272 190 97.5C190 120.971 208.804 140 232 140Z"
                      stroke="#ADB2B1"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M440 217H350.056C293.14 217 247 263.562 247 321"
                      stroke="#34C69F"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M138 144C138 150.226 138 228.594 138 267"
                      stroke="#34C69F"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-dasharray="15 15"
                    />
                    <path
                      d="M232 189C283.914 189 326 147.587 326 96.5002C326 45.4137 283.914 4 232 4C180.085 4 138 45.4137 138 96.5002"
                      stroke="#231F20"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                    <path
                      d="M299.132 575.361V590.75C299.132 612.455 281.474 630.051 259.703 630.051C237.924 630.051 220.264 612.455 220.264 590.75V578.003C220.264 556.461 202.742 539 181.137 539C159.522 539 142 556.461 142 578.003V593.69"
                      stroke="#231F20"
                      stroke-width="8"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
