import type { FC } from "react"
import React, { useState } from "react"
import cls from "./Sidebar.module.scss"
import { classNames } from "@/shared/lib"
import { ThemeSwitcher } from "@/widgets/ThemeSwitcher"
import { LangSwitcher } from "@/widgets/LangSwitcher"
import { Button, ButtonTheme, ButtonSize } from "@/shared/ui"
import SidebarItem from "../SidebarItem/SidebarItem"
import { useSelector } from "react-redux"
import { getSidebarItems } from "../../model/selectors/getSidebarItems"

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = props => {
  const { className = "", children, ...otherProps } = props
  const [collapsed, setCollapsed] = useState(false)
  const sidebarItemsList = useSelector(getSidebarItems)
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
        {sidebarItemsList.map(item => (
          <SidebarItem item={item} key={item.path} collapsed={collapsed} />
        ))}
      </nav>
      <div className={classNames(cls.switchers)}>
        {children}
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} short={collapsed} />
      </div>
    </div>
  )
}
