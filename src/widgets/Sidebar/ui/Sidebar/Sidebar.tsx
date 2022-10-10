import type { FC } from "react"
import React, { useState } from "react"
import cls from "./Sidebar.module.scss"
import { classNames } from "@/shared/lib"
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher"
import { LangSwitcher } from "@/widgets/LangSwitcher"
import { AppLink, AppLinkTheme, Button, ButtonTheme } from "@/shared/ui"
import { ButtonSize } from "@/shared/ui/Button/Button"
import { RoutePath } from "@/shared/config/routerConfig/routerConfig"
import { useTranslation } from "react-i18next"
import MainIcon from "@/shared/assets/house.svg"
import AboutIcon from "@/shared/assets/list.svg"

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = props => {
  const { className = "", children, ...otherProps } = props
  const { t } = useTranslation()
  const [collapsed, setCollapsed] = useState(false)
  const toggle = (): void => {
    setCollapsed(prev => !prev)
  }

  return (
    <div
      data-testid="sidebar"
      className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [
        className,
      ])}
      {...otherProps}
    >
      <Button
        onClick={toggle}
        type="button"
        data-testid="sidebar-toggle"
        className={cls.collapseBtn}
        theme={ButtonTheme.BACKGROUND_INVERTED}
        square={true}
        size={ButtonSize.L}
      >
        {collapsed ? ">" : "<"}
      </Button>
      <nav className={cls.items}>
        <AppLink
          to={RoutePath.main}
          className={classNames(cls.link)}
          theme={AppLinkTheme.SECONDARY}
        >
          <MainIcon className={cls.icon} />
          <span className={cls.item}>{t("На главную")}</span>
        </AppLink>

        <AppLink
          to={RoutePath.about}
          className={classNames(cls.link)}
          theme={AppLinkTheme.SECONDARY}
        >
          <AboutIcon className={cls.icon} />
          <span className={cls.item}>{t("О нас")}</span>
        </AppLink>
      </nav>
      <div className={classNames(cls.switchers)}>
        {children}
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  )
}
