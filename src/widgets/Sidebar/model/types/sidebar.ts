import type { VFC, SVGProps } from "react"

export interface SidebarItemsType {
  path: string
  text: string
  Icon: VFC<SVGProps<SVGSVGElement>>
  authOnly?: boolean
}
