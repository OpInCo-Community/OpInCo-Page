import Image from 'next/image'
import hacktoberfestlogo from '../public/assets/hacktoberfestlogo.jpg'

import {FaGithub} from "react-icons/fa"
import AccentButton from "../src/components/AccentButton"


export default function hacktoberfest(){
  return (
    <>
        <div className="container w-full flex flex-col">
        {/* hacktoberfest logo */}
        <div className="grid h-[90vh] gap-x-6 gap-y-6 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 justify-center">
            <span className="grid ">
            <Image 
            src={hacktoberfestlogo} 
            layout="responsive"
            objectFit="contain"
            alt="Hacktoberfest Official Logo" />
            </span>
            <span className="grid">
            <div className="flex justify-center items-center flex-col">
            <div className="flex flex-col max-w-xl">
                <h1 className="text-5xl leading-snug font-bold">
                    Hacktoberfest
                </h1>
                <h3 className="uppercase text-2xl tracking-wider mt-7">
                    Join Us for the week long event 
                </h3>
                <div className="flex mt-6 text-lg gap-8">
                    and learn about Open Source
                </div>
                <div className="flex text-xl mt-6 gap-4">
                and start your open source journey now!!
                </div>
                <div className="flex mt-6 text-lg gap-8 register-button justify-center">
                <a href="https://forms.gle/4BF2SQ1vBojJhj338/" target="__blank">
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
        {/* hacktoberfest logo */}

        {/* contributing steps */}
        <div className="flex items-center justify-center contributing-heading">
            <h1 className="text-5xl leading-snug font-bold ">But How to contribute to Open Source?</h1>
        </div>
        <div className="all-steps">
        <div className="grid grid-cols-1 gap-2">
            <div className="flex">
            <h6 className="text-2xl leading-snug font-bold">Step1</h6>
            <h3 className="text-2xl mt-7">
                Join Us for the week long event Join Us for the week long event Join Us for the week long event Join Us for the week long event Join Us for the week long event Join Us for the week long event 
            </h3>
            </div>
            <div className="flex"></div>
        </div>

        <div className="grid grid-cols-1 gap-2">
            <div className="flex">
            <h6 className="text-2xl leading-snug font-bold">Step1</h6>
            <h3 className="text-2xl mt-7">
                Join Us for the long event Join Us for the week long event Join Us for the week long event Join Us for the week long event Join Us for the week long event Join Us for the week long event 
            </h3>
            </div>
            <div className="flex"></div>
        </div>
            <div className="flex">
            <h6 className="text-2xl leading-snug font-bold">Step1</h6>
            <h3 className="text-2xl mt-7">
                Join Us for the week long event Join Us for the week long event Join Us for the week long event Join Us for the week long event Join Us for the week long event Join Us for the week long event 
            </h3>
            </div>
            <div className="flex">
                
            </div>

            <div className="flex">
            <h6 className="text-2xl leading-snug font-bold">Step1</h6>
            <h3 className="text-2xl mt-7">
                Join Us for the week long event Join Us for the week long event Join Us for the week long event Join Us for the week long event Join Us for the week long event Join Us for the week long event 
            </h3>
            </div>
            <div className="flex">
            
            </div>
        </div>
        {/* contributing steps */}

        {/* projects title*/}
        <div className="flex items-center justify-center contributing-heading">
            <h1 className="text-5xl leading-snug font-bold ">Projects</h1>
        </div>
        </div>
        {/* projects title */}

        {/* projects */}
        <div className="container grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1 gap-x-6 gap-y-6 md:w-auto sm:w-auto justify-center">
        <div className="w-[36vh] project-box">
            <div className="project-image">
            <Image 
            src={hacktoberfestlogo} 
            layout="responsive"
            objectFit="contain"
            alt="Hacktoberfest Official Logo" className="project-image"/>
            </div>
            <div className="project-text">
            <h1 className="text-2xl leading-snug font-bold">Project Name</h1>
            <h3 className="uppercase text-xl tracking-wider mt-7">Niche
            </h3>
            <div className="flex text-xl mt-6 gap-4">
            about project </div>
            <div className="flex mt-6 text-lg gap-8 project-button justify-center">
                <AccentButton
                className="tracking-wider shadow-[#0003] shadow-md uppercase"
                Icon={FaGithub}
                text="Github"
                type="fill"
                />
            </div>
            </div>
        </div>
        <div className="w-[36vh] project-box">
            <div className="project-image">
            <Image 
            src={hacktoberfestlogo} 
            layout="responsive"
            objectFit="contain"
            alt="Hacktoberfest Official Logo" className="project-image"/>
            </div>
            <div className="project-text">
            <h1 className="text-2xl leading-snug font-bold">Project Name</h1>
            <h3 className="uppercase text-xl tracking-wider mt-7">
                Niche
            </h3>
            <div className="flex text-xl mt-6 gap-4">
            about project </div>
            <div className="flex mt-6 text-lg gap-8 project-button justify-center">
                <AccentButton
                className="tracking-wider shadow-[#0003] shadow-md uppercase"
                Icon={FaGithub}
                text="Github"
                type="fill"
                />
            </div>
            </div>
        </div>
        <div className="w-[36vh] project-box">
            <div className="project-image">
            <Image 
            src={hacktoberfestlogo} 
            layout="responsive"
            objectFit="contain"
            alt="Hacktoberfest Official Logo" className="project-image"/>
            </div>
            <div className="project-text">
            <h1 className="text-2xl leading-snug font-bold">Project Name</h1>
            <h3 className="uppercase text-xl tracking-wider mt-7">
                Niche
            </h3>
            <div className="flex text-xl mt-6 gap-4">
            about project </div>
            <div className="flex mt-6 text-lg gap-8 project-button justify-center">
                <AccentButton
                className="tracking-wider shadow-[#0003] shadow-md uppercase"
                Icon={FaGithub}
                text="Github"
                type="fill"
                />
            </div>
            </div>
        </div>
        <div className="w-[36vh] project-box">
            <div className="project-image">
            <Image 
            src={hacktoberfestlogo} 
            layout="responsive"
            objectFit="contain"
            alt="Hacktoberfest Official Logo" className="project-image"/>
            </div>
            <div className="project-text">
            <h1 className="text-2xl leading-snug font-bold">Project Name</h1>
            <h3 className="uppercase text-xl tracking-wider mt-7">
                Niche
            </h3>
            <div className="flex text-xl mt-6 gap-4">
            about project </div>
            <div className="flex mt-6 text-lg gap-8 project-button justify-center">
                <AccentButton
                className="tracking-wider shadow-[#0003] shadow-md uppercase"
                Icon={FaGithub}
                text="Github"
                type="fill"
                />
            </div>
            </div>
        </div>
        <div className="w-[36vh] project-box">
            <div className="project-image">
            <Image 
            src={hacktoberfestlogo} 
            layout="responsive"
            objectFit="contain"
            alt="Hacktoberfest Official Logo" className="project-image"/>
            </div>
            <div className="project-text">
            <h1 className="text-2xl leading-snug font-bold">Project Name</h1>
            <h3 className="uppercase text-xl tracking-wider mt-7">
                Niche
            </h3>
            <div className="flex text-xl mt-6 gap-4">
            about project </div>
            <div className="flex mt-6 text-lg gap-8 project-button justify-center">
                <AccentButton
                className="tracking-wider shadow-[#0003] shadow-md uppercase"
                Icon={FaGithub}
                text="Github"
                type="fill"
                />
            </div>
            </div>
        </div>
        <div className="w-[36vh] project-box">
            <div className="project-image">
            <Image 
            src={hacktoberfestlogo} 
            layout="responsive"
            objectFit="contain"
            alt="Hacktoberfest Official Logo" className="project-image"/>
            </div>
            <div className="project-text">
            <h1 className="text-2xl leading-snug font-bold">Project Name</h1>
            <h3 className="uppercase text-xl tracking-wider mt-7">
                Niche
            </h3>
            <div className="flex text-xl mt-6 gap-4">
            about project </div>
            <div className="flex mt-6 text-lg gap-8 project-button justify-center">
                <AccentButton
                className="tracking-wider shadow-[#0003] shadow-md uppercase"
                Icon={FaGithub}
                text="Github"
                type="fill"
                />
            </div>
            </div>
        </div>
        </div>
    {/* projects */}
    </>
  );
}