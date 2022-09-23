import type { FC } from "react"
import React from "react"
import { useTranslation } from "react-i18next"
import cls from "./Navbar.module.scss"
import { classNames } from "@/shared/lib"
import { AppLink, AppLinkTheme } from "@/shared/ui"
import { RoutePath } from "@/shared/config/routerConfig/routerConfig"

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation()
  return (
    <nav className={classNames(cls.Navbar, {}, [className])}>
      <div className={classNames(cls.links)}>
        <AppLink to={RoutePath.main} className={classNames(cls.mainLink)}>
          {t("На главную")}
        </AppLink>

        <AppLink to={RoutePath.about} theme={AppLinkTheme.SECONDARY}>
          {t("О нас")}
        </AppLink>
      </div>
    </nav>
  )
}
