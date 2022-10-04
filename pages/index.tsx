import type { NextPage } from "next"
import Head from "next/head"
import Image from "next/image"
import illustration from "../public/assets/dark_illustration.png"
import illustration_light from "../public/assets/light_illustration.png"
import openPng from "../public/assets/Open.png"
import incluPng from "../public/assets/Inclusive.png"
import commPng from "../public/assets/Community.png"
import AccentButton from "../src/components/AccentButton"
import useDarkMode from "../src/hooks/useDarkMode"
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa"
import { BsInstagram, BsLinkedin, BsTwitter, BsYoutube } from "react-icons/bs"

const Home: NextPage = () => {
  const { enabled } = useDarkMode()
  return (
    <>
      <Head>
        <title>OpInCo</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
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
                  &quot;Sharing is caring&quot;, and with opensource, sharing is
                  easier {";) "}
                  At OpInCo, we believe{" "}
                  <span className="text-accent-200">Open=Opportunity</span> and
                  in approaching all aspects of life with an &quot;open-source
                  attitude&quot; while upskilling & evolving as a team.
                </p>
              </div>
              <div className="flex flex-col gap-3">
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
              <div className="flex flex-col gap-3">
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
        </div>
        <div className="h-screen"></div>
      </div>
    </>
  )
}

export default Home
