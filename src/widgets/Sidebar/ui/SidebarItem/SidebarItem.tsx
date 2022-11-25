import React, { FC, memo } from "react"
import cls from "./SidebarItem.module.scss"
import { classNames } from "@/shared/lib"
import { AppLink, AppLinkTheme } from "@/shared/ui"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import { getUserData } from "@/entities/User"
import { SidebarItemsType } from "@/widgets/Sidebar/model/types/sidebar"

interface SidebarItemProps {
  item: SidebarItemsType
  collapsed: boolean
}

export const SidebarItem: FC<SidebarItemProps> = props => {
  const { item, collapsed } = props
  const { t } = useTranslation()
  const { text, path, Icon, authOnly } = item
  const isAuth = useSelector(getUserData)
  if (authOnly && !isAuth) {
    return null
  }
  return (
    <AppLink
      to={path}
      className={classNames(cls.link, { [cls.collapsed]: collapsed })}
      theme={AppLinkTheme.SECONDARY}
    >
      <Icon className={cls.icon} />
      <span className={cls.item}>{t(text)}</span>
    </AppLink>
  )
}
export default memo(SidebarItem)
