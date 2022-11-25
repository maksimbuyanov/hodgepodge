import { createSelector } from "@reduxjs/toolkit"
import { getUserData } from "@/entities/User"
import { RoutePath } from "@/shared/config"
import MainIcon from "@/shared/assets/house.svg"
import AboutIcon from "@/shared/assets/list.svg"
import PersonIcon from "@/shared/assets/person.svg"
import ArticleIcon from "@/shared/assets/document.svg"
import { SidebarItemsType } from "../types/sidebar"

export const getSidebarItems = createSelector(getUserData, userData => {
  const sidebarItemsList: SidebarItemsType[] = [
    { path: RoutePath.main, text: "На главную", Icon: MainIcon },
    { path: RoutePath.about, text: "О нас", Icon: AboutIcon },
  ]
  if (userData) {
    sidebarItemsList.push(
      {
        path: RoutePath.profile + userData.id,
        text: "Профиль",
        Icon: PersonIcon,
        authOnly: true,
      },
      {
        path: RoutePath.articles,
        text: "Статьи",
        Icon: ArticleIcon,
        authOnly: true,
      }
    )
  }
  return sidebarItemsList
})
