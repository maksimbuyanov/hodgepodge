import React from "react"
import { RoutePath } from "@/shared/config"
import MainIcon from "@/shared/assets/house.svg"
import AboutIcon from "@/shared/assets/list.svg"
import PersonIcon from "@/shared/assets/person.svg"
import ArticleIcon from "@/shared/assets/document.svg"

export interface SidebarItemsType {
  path: string
  text: string
  Icon: React.VFC<React.SVGProps<SVGSVGElement>>
  authOnly?: boolean
}

export const SidebarItemsList: SidebarItemsType[] = [
  { path: RoutePath.main, text: "На главную", Icon: MainIcon },
  { path: RoutePath.about, text: "О нас", Icon: AboutIcon },
  {
    path: RoutePath.profile,
    text: "Профиль",
    Icon: PersonIcon,
    authOnly: true,
  },
  {
    path: RoutePath.articles,
    text: "Статьи",
    Icon: ArticleIcon,
    authOnly: true,
  },
]
