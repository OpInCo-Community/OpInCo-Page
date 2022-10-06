import React from "react"
import { IconType } from "react-icons"
import Dynamic from "./Dynamic"

const AccentButton = ({
  text,
  Icon,
  type,
  className,
  onClick,
}: {
  text: string
  Icon?: IconType
  type: "fill" | "outline"
  className?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}) => {
  return (
    <Dynamic>
      <button
        onClick={onClick}
        className={`flex items-center transition-colors gap-[.55em] px-[1.5em] py-[0.7em] rounded-md ${className} ${
          type === "fill"
            ? "bg-accent-200 hover:bg-[#2db3aa] text-white"
            : "border-[.175em] border-accent-200 hover:bg-[#13a89e1a] text-accent-200"
        }`}
      >
        {Icon && <Icon className="text-[1.2em]" />}
        <div>{text}</div>
      </button>
    </Dynamic>
  )
}

export default AccentButton
