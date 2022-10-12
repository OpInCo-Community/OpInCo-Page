import React from "react"
import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { Contributor } from "../../../pages/hacktoberweek"

const ContributorCard = ({ data }: { data: Contributor }) => {
  return (
    <div className="flex flex-col border-dashed border-accent-200 border-2">
      <a href={data["project-link"]}>
        <div className="flex flex-col md:gap-3 md:flex-row hover:bg-[#27c4a54d] px-4 py-3 items-end gap-1">
          <h3 className="text-3xl font-semibold">{data["project-name"]}</h3>
          <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-400">
            by {data.name}
          </h4>
        </div>
      </a>
      <div className="flex text-lg text-white bg-accent-200 px-4 py-2 gap-6 border-accent-200 border-dashed border-t-2">
        <a href={data.github}>
          <FaGithub />
        </a>
        <a href={data.linkedIn}>
          <FaLinkedinIn />
        </a>
      </div>
    </div>
  )
}

export default ContributorCard
