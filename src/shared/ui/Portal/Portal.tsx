import { FC, ReactNode } from "react"
import { createPortal } from "react-dom"

interface PortalProps {
  children: ReactNode
  container?: HTMLDivElement
}

export const Portal: FC<PortalProps> = props => {
  let { children, container = document.getElementById("root") } = props // TODO поменять эту порнографию
  if (document.querySelector(".app")) {
    container = document.querySelector(".app")
  }
  return createPortal(children, container as HTMLDivElement)
}
