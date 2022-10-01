import dynamic from "next/dynamic"
import React from "react"

const Dyanmic = (props: React.PropsWithChildren) => (
  <React.Fragment>{props.children}</React.Fragment>
)
export default dynamic(() => Promise.resolve(Dyanmic), {
  ssr: false,
})
