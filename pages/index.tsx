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
import opincircle from "../public/assets/opinco-circle.png"
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
import Link from "next/link"
import { useRouter } from "next/router"

const Home: NextPage = () => {
  const { enabled } = useDarkMode()
  const router = useRouter()
  return (
    <>
      <Head>
        <title>OpInCo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full flex flex-col items-center">
        <div className="container w-full flex flex-col">
          {/* intro */}
          <div className="md:grid flex min-h-[60vh] md:min-h-[90vh] justify-center flex-col items-center grid-cols-2">
            <div className="flex justify-center items-center flex-col">
              <div className="flex flex-col max-w-xl">
                <h1 className="xl:text-5xl lg:text-4xl text-3xl sm:text-4xl md:text-3xl flex flex-col lg:gap-4 gap-2 font-bold">
                  <div>Tune in for Talks,</div> <div>Build Connection and</div>
                  <div>Overhaul your Ability.</div>
                </h1>
                <h3 className="uppercase md:text-xl lg:text-2xl tracking-wider mt-7">
                  Join us now!
                </h3>
                <div className="flex mt-6 lg:text-lg gap-5 sm:gap-8">
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href="https://discord.gg/26ewkaV"
                  >
                    <AccentButton
                      className="tracking-wider shadow-[#0003] shadow-md uppercase"
                      Icon={FaDiscord}
                      text="Discord"
                      type="fill"
                    />
                  </a>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href="https://github.com/OpInCo-Community"
                  >
                    <AccentButton
                      className="tracking-wider shadow-[#0003] shadow-md uppercase"
                      Icon={FaGithub}
                      text="GitHub"
                      type="outline"
                    />
                  </a>
                </div>
                <div className="flex text-xl mt-6 gap-4">
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href="https://www.linkedin.com/company/opincocommunity/"
                  >
                    <FaLinkedin />
                  </a>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href="https://www.instagram.com/opincocommunity/"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href="https://twitter.com/opincocommunity"
                  >
                    <BsTwitter />
                  </a>

                  <a
                    target={"_blank"}
                    rel={"noreferrer"}
                    href="https://www.youtube.com/c/OpInCoCommunity"
                  >
                    <BsYoutube />
                  </a>
                </div>
              </div>
            </div>
            <div className="md:flex hidden items-center justify-center ">
              <div className="flex xl:max-w-none max-w-xs">
                <Image
                  src={enabled ? illustration : illustration_light}
                  objectFit="contain"
                />
              </div>
            </div>
          </div>
          {/* about us */}
          <div className="lg:grid flex flex-col mt-20 grid-cols-2">
            <div className="flex flex-col items-center">
              <div className="flex flex-col text-center lg:text-left max-w-xl gap-7">
                <h1 className="text-4xl font-bold">About us</h1>
                <p className="text-gray-600 dark:text-white leading-loose sm:px-0 px-4 sm:text-xl lg:text-lg xl:text-xl">
                  Oplnco previously known as Devstucom represents Open Inclusive
                  Collaborative was founded in year 2020. <br />
                  <br />
                  We as a community help our fellow students in building skills
                  through direct discussions on advance topics of science and
                  technology. We urge individual to contribute in open source.{" "}
                </p>
              </div>
            </div>
            <div className="flex sm:px-0 px-5 flex-col lg:mt-0 mt-16 items-center ml-20 md:ml-24">
              <div className="flex flex-col max-w-xl gap-8">
                <div className="flex flex-col relative gap-3">
                  <div className="bg-accent-200 absolute w-0.5 h-[28rem] sm:h-96 left-[-2.8rem] md:left-[-4.4rem] top-5"></div>
                  <h4 className="text-3xl relative font-semibold flex text-accent-200">
                    <div className="flex absolute top-1/2 md:-left-24 -left-16 w-10 md:w-14 -translate-y-1/2 h-20 bg-neutral-100 py-3 border-neutral-100 dark:bg-neutral-400 transition-colors duration-200">
                      <Image objectFit="contain" src={openPng} />
                    </div>
                    Open
                  </h4>
                  <p className="md:text-lg sm:text-base text-sm italic text-gray-700 dark:text-white ">
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
                    <div className="flex absolute top-1/2 md:-left-24 -left-16 w-10 md:w-14 -translate-y-1/2 h-20 bg-neutral-100 py-3 border-neutral-100 dark:bg-neutral-400 transition-colors duration-200">
                      <Image objectFit="contain" src={incluPng} />
                    </div>
                    Inclusive
                  </h4>
                  <p className="md:text-lg sm:text-base text-sm italic text-gray-700 dark:text-white ">
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
                    <div className="flex absolute top-1/2 md:-left-24 -left-16 w-10 md:w-14 -translate-y-1/2 h-20 bg-neutral-100 py-3 border-neutral-100 dark:bg-neutral-400 transition-colors duration-200">
                      <Image objectFit="contain" src={commPng} />
                    </div>
                    Community
                  </h4>
                  <p className="md:text-lg sm:text-base text-sm italic text-gray-700 dark:text-white ">
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
            <div className="hidden lg:flex relative">
              <div className="flex absolute h-[550px] translate-x-16 -translate-y-16">
                <Image objectFit="contain" src={opdev} />
              </div>
            </div>
            <div className="flex justify-center my-20 md:my-28 flex-col">
              <div className="flex items-center md:items-start flex-col">
                <div className="md:text-4xl text-2xl font-semibold">
                  Know more about us!
                </div>
              </div>
              <div className="flex mt-4 md:mt-6 justify-center md:justify-start text-lg md:text-xl">
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
        <div className="py-20 w-full xl:px-8 flex justify-center from-[#dcdcdc9d] dark:from-[#3d424485] bg-gradient-to-r to-transparent mt-32">
          <div className="container flex flex-col lg:grid grid-cols-3">
            <div className="col-span-2 md:px-0 px-4 flex max-w-3xl flex-col">
              <h1 className="font-semibold text-transparent text-4xl bg-clip-text bg-gradient-to-r from-accent-200 to-accent-100">
                Why Join OpInCo?
              </h1>
              <div className="flex-col flex mt-16 gap-12">
                <div className="flex flex-col gap-2">
                  <div className="flex text-2xl sm:text-3xl items-center gap-4 font-medium">
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
                  <div className="flex text-2xl sm:text-3xl items-center gap-4 font-medium">
                    <HiOutlinePresentationChartLine />
                    <h4>Guidence Sessions</h4>
                  </div>
                  <p className="text-gray-700 text-xl dark:text-white ml-12">
                    We engage industry experts to deliver mentorship sessions on
                    resume building, roadmaps to develop skills, and a lot more.
                  </p>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex text-2xl sm:text-3xl items-center gap-4 font-medium">
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
                  <div className="flex text-2xl sm:text-3xl items-center gap-4 font-medium">
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
            <div className="hidden lg:flex items-center">
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
        <div className="py-20 flex w-full justify-center">
          <div className="w-full flex flex-col items-center">
            {/* <h3 className="text-3xl font-semibold">Events</h3> */}
            <div className="flex w-full overflow-hidden my-8 bg-[#170f1e]">
              <div
                id="hacktober-fest-card"
                className="flex z-20 relative text-[#E5E1E6] w-fulls px-10 w-full items-center justify-center py-10 lg:pb-10 pb-0"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex -translate-y-16 lg:translate-y-0 flex-col scale-75 sm:scale-75 gap-6 items-center">
                    <div className="z-20 relative">
                      <svg
                        width="224"
                        height="224"
                        viewBox="0 0 224 224"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="globe"
                      >
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M208.979 167.991C178.056 221.55 109.569 239.901 56.0093 208.979C2.44951 178.056 -15.9014 109.569 15.0213 56.0093C45.9441 2.44951 114.431 -15.9014 167.991 15.0213C221.55 45.9441 239.901 114.431 208.979 167.991ZM35.7052 184.154C29.9638 169.391 29.0031 150.536 32.8872 130.242C27.1675 124.879 22.1166 119.513 17.8303 114.256C13.7802 109.289 10.372 104.37 7.72571 99.5969C4.09083 130.28 14.2172 161.451 35.7052 184.154ZM9.90682 87.4222C12.1098 94.0693 16.6206 101.697 23.2545 109.833C26.5697 113.899 30.385 118.055 34.6529 122.24C36.1532 116.23 38.0655 110.127 40.3916 103.997C40.7446 104.505 41.144 104.984 41.5871 105.427C42.9061 106.746 44.54 107.677 46.3122 108.149C43.8773 114.783 41.9565 121.355 40.5414 127.772C44.3205 131.18 48.3839 134.589 52.706 137.966C52.5773 138.623 52.5099 139.302 52.5099 139.996L52.5099 146.628C47.7391 143.053 43.2338 139.422 39.0245 135.773C37.8976 142.897 37.4188 149.77 37.5754 156.255C38.0817 177.226 45.1093 193.053 57.0257 201.341L66.7935 184.423C67.2401 186.297 68.1979 188.028 69.5823 189.413C70.0861 189.916 70.6359 190.364 71.2218 190.75L63.1432 204.743C76.1431 210.356 92.9488 208.368 110.887 198.581C116.582 195.474 122.294 191.623 127.9 187.085C119.38 184.139 110.515 180.496 101.502 176.193L101.502 168.415C112.744 173.95 123.734 178.421 134.07 181.772C135.235 180.707 136.392 179.613 137.541 178.49L146.994 178.49C147.108 178.49 147.222 178.488 147.335 178.484C145.517 180.427 143.672 182.301 141.806 184.105C147.564 185.708 153.071 186.935 158.25 187.773C168.612 189.45 177.473 189.542 184.331 188.127C191.46 181.348 197.749 173.444 202.917 164.491C210.279 151.741 214.662 138.088 216.282 124.339C210.834 124.431 204.88 123.939 198.565 122.917C186.197 120.915 172.201 116.841 157.492 110.864L157.492 103.291C165.012 106.447 172.329 109.09 179.315 111.201C184.411 95.8738 186.745 80.9994 186.425 67.7456C185.932 47.317 179.25 31.769 167.889 23.3173L157.472 41.3604C157.314 38.8141 156.232 36.4037 154.418 34.5892C154.183 34.3546 153.938 34.1322 153.685 33.9225L161.884 19.7204C148.749 13.5443 131.528 15.3721 113.113 25.419C104.109 30.3316 95.0597 37.105 86.4577 45.5119L77.0058 45.5119C76.8917 45.5119 76.7778 45.5138 76.6641 45.5175C95.3136 25.5891 116.731 12.8676 136.34 9.84974C108.271 3.14963 78.794 8.44328 54.9537 23.8428C57.3791 28.3235 60.6378 33.1012 64.6879 38.0683C66.9857 40.8864 69.5239 43.748 72.2865 46.6325C71.2958 47.131 70.3814 47.7879 69.5825 48.5867C68.6777 49.4915 67.9552 50.5445 67.4384 51.6886C64.4707 48.6007 61.7396 45.5277 59.2637 42.4911C55.221 37.5331 51.8179 32.6229 49.1737 27.8584C38.0763 36.1362 28.444 46.7582 21.0825 59.5088C15.9137 68.4614 12.2134 77.8588 9.90682 87.4222ZM174.878 196.103C150.123 214.592 118.066 221.408 87.6611 214.15C103.317 211.741 120.126 203.146 135.759 189.635C143.263 191.907 150.436 193.598 157.132 194.682C163.458 195.706 169.422 196.198 174.878 196.103ZM216.87 117.325C211.777 117.465 206.01 117.032 199.683 116.008C195.356 115.308 190.799 114.336 186.058 113.1C195.131 85.6334 195.829 59.2182 188.295 39.8466C208.132 60.8047 218.286 88.9795 216.87 117.325Z"
                          fill="url(#paint0_linear_1_287)"
                        ></path>
                        <defs>
                          <linearGradient
                            id="paint0_linear_1_287"
                            x1="30.1538"
                            y1="30.1538"
                            x2="110.165"
                            y2="227.733"
                            gradientUnits="userSpaceOnUse"
                          >
                            <stop stop-color="#FFE27D"></stop>
                            <stop offset="0.505208" stop-color="#64E3FF"></stop>
                            <stop offset="1" stop-color="#9192FF"></stop>
                          </linearGradient>
                        </defs>
                      </svg>
                      <svg
                        width="113"
                        height="124"
                        viewBox="0 0 113 124"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="absolute h translate-x-1/2 top-1/2  -translate-y-1/2"
                      >
                        <path
                          d="M0.846191 49.8003L0.846202 38.2416L0.846964 37.5231H13.2913L13.2913 49.8001H2.10096L0.846191 49.8003Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M13.2913 29.2604L13.2913 37.5231H25.7357L25.7357 86.6309H13.2913V91.5501L13.2906 98.908H24.5256L25.7357 98.9078V99.6507L25.735 106.835L25.7357 123.462H38.18V86.6308H50.6244V74.3542L75.5131 74.3539V111.185H87.9575V98.9078H97.7151L100.401 98.908L100.402 86.6309H105.388L112.463 86.6311L112.846 86.6309V74.3539L100.402 74.3539L100.402 86.6309L87.9575 86.6308L87.9575 0.692383L75.5131 0.692383V12.9693L63.0687 12.9693V25.2462H50.6244V28.9521L50.6237 36.4003L50.6244 37.5231H52.3251L63.0679 37.5234L63.0687 25.2462L75.3832 25.2462L75.5124 25.2464L75.5124 37.3024L75.5131 37.5231V44.1068L75.5124 51.0645L75.5131 62.077H50.6244V74.3542L38.18 74.3539V12.9693L25.7357 12.9693L25.735 17.3027L25.7357 25.2462H13.2913V29.2604Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="z-20 text">
                      <svg
                        width="259"
                        height="138"
                        viewBox="0 0 259 138"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="text"
                      >
                        <path
                          d="M27.0649 0L37.2717 0V15.3141H65.9451V0L76.1519 0V41.5498H65.9451V25.286L37.2717 25.286V41.5498H27.0649V0Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M89.8774 7.41962C90.5067 5.28277 91.549 3.52184 93.0043 2.13686C94.499 0.712273 96.5442 0 99.1402 0L111.471 0C114.106 0 116.211 0.712273 117.784 2.13686C119.357 3.52184 120.458 5.28277 121.088 7.41962L131.235 41.5498L119.908 41.5498L117.135 31.5778H98.4322L100.792 21.6059H114.362L111.176 9.97194H99.7302L90.9984 41.5498H79.6706L89.8774 7.41962Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M134.159 7.41962C134.159 6.35119 134.356 5.36188 134.749 4.45177C135.142 3.54162 135.654 2.76997 136.283 2.13686C136.952 1.46414 137.719 0.94971 138.584 0.593554C139.489 0.197838 140.413 0 141.357 0L180.119 0V9.97194L144.366 9.97194V31.5778H180.119V41.5498H141.77C140.708 41.5498 139.705 41.3519 138.761 40.9562C137.817 40.5605 137.011 40.0461 136.342 39.4129C135.673 38.7402 135.142 37.9686 134.749 37.098C134.356 36.1879 134.159 35.2579 134.159 34.3082V7.41962Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M185.451 0L195.658 0V16.2638H204.862L217.37 0L229.169 0L213.771 20.1813L232.06 41.5498H219.021L205.393 26.2357H195.658V41.5498H185.451V0Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M19.8236 57.8896H0L0 47.9177H49.7359V57.8896H30.0304L30.0304 89.4675H19.8236L19.8236 57.8896Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M53.5598 55.3373C53.5598 54.2689 53.7565 53.2796 54.1498 52.3694C54.5431 51.4593 55.0543 50.6877 55.6838 50.0545C56.3524 49.3818 57.1194 48.8674 57.9847 48.5113C58.8893 48.1155 59.8136 47.9177 60.7576 47.9177H95.7439C96.8059 47.9177 97.8088 48.1155 98.7528 48.5113C99.6968 48.907 100.503 49.4412 101.172 50.1139C101.84 50.747 102.371 51.5187 102.765 52.4288C103.158 53.2994 103.355 54.2095 103.355 55.1592V82.0478C103.355 83.1163 103.158 84.1056 102.765 85.0157C102.371 85.9258 101.84 86.7172 101.172 87.39C100.542 88.0231 99.7754 88.5375 98.8708 88.9332C98.0055 89.2894 97.1009 89.4675 96.1569 89.4675H61.1706C60.1086 89.4675 59.1057 89.2696 58.1617 88.8739C57.2177 88.4781 56.4114 87.9637 55.7427 87.3306C55.074 86.6579 54.5431 85.8862 54.1498 85.0157C53.7565 84.1056 53.5598 83.1756 53.5598 82.2259V55.3373ZM93.148 79.4955V57.8896H63.7665V79.4955H93.148Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M108.654 55.3373C108.654 54.2689 108.851 53.2796 109.244 52.3694C109.638 51.4593 110.149 50.6877 110.778 50.0545C111.447 49.3818 112.214 48.8674 113.079 48.5113C113.984 48.1155 114.908 47.9177 115.852 47.9177L144.113 47.9177C145.175 47.9177 146.158 48.1155 147.063 48.5113C147.967 48.907 148.734 49.4412 149.364 50.1139C150.032 50.747 150.544 51.5187 150.898 52.4288C151.291 53.2994 151.488 54.2095 151.488 55.1592V63.8253C152.549 63.8253 153.493 64.0232 154.319 64.4189C155.185 64.8146 155.912 65.3488 156.502 66.0215C157.092 66.6546 157.525 67.4263 157.8 68.3364C158.115 69.207 158.272 70.1171 158.272 71.0668V82.0478C158.272 83.1163 158.076 84.1056 157.682 85.0157C157.289 85.9258 156.758 86.7172 156.089 87.39C155.46 88.0231 154.693 88.5375 153.788 88.9332C152.923 89.2894 152.019 89.4675 151.075 89.4675H108.654V55.3373ZM148.066 79.4955V73.1444H118.861V79.4955H148.066ZM141.281 63.8253V57.8896L118.861 57.8896V63.8253L141.281 63.8253Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M162.972 55.3373C162.972 54.2689 163.169 53.2796 163.562 52.3694C163.956 51.4593 164.467 50.6877 165.096 50.0545C165.765 49.3818 166.532 48.8674 167.397 48.5113C168.302 48.1155 169.226 47.9177 170.17 47.9177H207.339V57.8896H173.179V63.2317H202.679V73.2037H173.179V79.4955H207.339V89.4675H170.583C169.521 89.4675 168.518 89.2696 167.574 88.8739C166.63 88.4781 165.824 87.9637 165.155 87.3306C164.487 86.6579 163.956 85.8862 163.562 85.0157C163.169 84.1056 162.972 83.1756 162.972 82.2259V55.3373Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M36.0649 103.716C36.0649 102.648 36.2616 101.658 36.655 100.748C37.0483 99.838 37.5596 99.0663 38.1889 98.4332C38.8576 97.7605 39.6245 97.2461 40.4898 96.8899C41.3945 96.4943 42.3188 96.2964 43.2628 96.2964H77.541V106.268H46.2717V115.825H72.8211V125.797H46.2717L46.2717 137.846H36.0649L36.0649 103.716Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M81.3373 103.716C81.3373 102.648 81.5339 101.658 81.9272 100.748C82.3205 99.838 82.8319 99.0663 83.4612 98.4332C84.1298 97.7605 84.8969 97.2461 85.7621 96.8899C86.6668 96.4943 87.5911 96.2964 88.5351 96.2964H125.704V106.268H91.544V111.61H121.043V121.582H91.544V127.874H125.704V137.846H88.9481C87.8861 137.846 86.8832 137.648 85.9392 137.253C84.9952 136.857 84.1888 136.342 83.5202 135.709C82.8515 135.037 82.3205 134.265 81.9272 133.394C81.5339 132.484 81.3373 131.554 81.3373 130.605V103.716Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M131.016 127.874H170.486V121.582H138.391C137.329 121.582 136.346 121.385 135.441 120.989C134.536 120.593 133.75 120.079 133.081 119.446C132.452 118.773 131.94 118.001 131.547 117.131C131.193 116.221 131.016 115.291 131.016 114.341V103.716C131.016 102.648 131.213 101.658 131.606 100.748C131.999 99.838 132.511 99.0663 133.14 98.4332C133.809 97.7605 134.576 97.2461 135.441 96.8899C136.346 96.4943 137.27 96.2964 138.214 96.2964H176.091V106.268H141.223V111.61H173.318C174.38 111.61 175.363 111.808 176.268 112.204C177.173 112.6 177.94 113.134 178.569 113.807C179.238 114.44 179.749 115.211 180.103 116.122C180.496 116.992 180.693 117.902 180.693 118.852V130.427C180.693 131.495 180.496 132.484 180.103 133.394C179.71 134.305 179.179 135.096 178.51 135.769C177.881 136.402 177.114 136.916 176.209 137.312C175.344 137.668 174.439 137.846 173.495 137.846H131.016V127.874Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M200.514 106.268H180.69V96.2964H230.426V106.268H210.721V137.846H200.514V106.268Z"
                          fill="currentColor"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M213.284 56.2081C213.284 54.9852 213.509 53.853 213.959 52.8112C214.409 51.7695 214.994 50.8864 215.715 50.1617C216.48 49.3918 217.358 48.803 218.348 48.3954C219.384 47.9425 220.442 47.716 221.522 47.716H250.021C251.236 47.716 252.362 47.9425 253.397 48.3954C254.432 48.8483 255.31 49.4597 256.031 50.2296C256.796 50.9543 257.381 51.8375 257.786 52.8792C258.236 53.8756 258.462 54.9173 258.462 56.0042L258.395 64.6111C258.395 65.6981 258.17 66.7398 257.72 67.7362C257.402 68.5523 256.974 69.2711 256.436 69.8927C256.468 69.9273 256.499 69.9623 256.53 69.9977C257.12 70.6309 257.553 71.4025 257.828 72.3127C258.143 73.1832 258.3 76.7442 258.3 77.694V82.0478C258.3 83.1161 258.104 84.1054 257.71 85.0155C257.317 85.9257 256.786 86.7171 256.117 87.3898C255.488 88.0229 254.721 88.5374 253.816 88.9331C252.951 89.2892 252.046 89.4673 251.102 89.4673H242.173V80.8521L248.093 80.8209V75.5503H221.456C220.375 75.5503 219.317 75.3238 218.282 74.8709C217.291 74.4633 216.414 73.8745 215.648 73.1046C214.928 72.3799 214.343 71.4967 213.893 70.455C213.442 69.4133 213.217 68.281 213.217 67.0582L213.284 56.2081ZM246.779 58.1045V64.8982H224.966V58.1045H246.779Z"
                          fill="currentColor"
                        ></path>
                        <path
                          d="M223.747 80.8521V89.4675H213.217V76.8757C213.217 76.8757 215.192 80.8521 220.456 80.8521H223.747Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                  </div>
                  {/* <div className="flex lg:w-48">
                    <Image src={opincircle} objectFit="contain" />
                  </div> */}
                  <div className="flex justify-center lg:translate-y-0 -translate-y-32 items-center flex-col">
                    <h2 className="bg-gradient-to-r from-[#FBE089] via-[#8DE3DB] to-[#899BFA] bg-clip-text font-semibold text-transparent text-4xl md:text-5xl mt-4">
                      HacktoberWeek
                    </h2>
                    <p className="font-semibold max-w-3xl text-[#E5E1E6] text-center mt-4">
                      Hack Club BIT Durg & OpInCo Community presents A week long
                      In-person event conducting in Bhilai Institute of
                      Technology, Durg to celebrate Hacktoberfest and Open
                      source.
                    </p>
                    <h6 className="font-bold from-[#FBE089] bg-gradient-to-l via-[#8DE3DB] to-[#899BFA] bg-clip-text text-transparent mt-4">
                      7-15TH OCTOBER AT BIT DURG
                    </h6>
                    <AccentButton
                      onClick={() => {
                        router.push("/hacktoberweek")
                      }}
                      text="Read More"
                      type="fill"
                      className="text-xl lg:translate-y-0 lg:mt-10 uppercase font-semibold translate-y-16"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Home
