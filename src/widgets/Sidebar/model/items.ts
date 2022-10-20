import React from "react"
import { RoutePath } from "@/shared/config"
import MainIcon from "@/shared/assets/house.svg"
import AboutIcon from "@/shared/assets/list.svg"
import PersonIcon from "@/shared/assets/person.svg"

export interface SidebarItemsType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
}

export const SidebarItemsList: SidebarItemsType[] = [
  { path: RoutePath.main, text: "Профиль", Icon: MainIcon },
  { path: RoutePath.about, text: "О нас", Icon: AboutIcon },
  { path: RoutePath.profile, text: "Профиль", Icon: PersonIcon },
]
