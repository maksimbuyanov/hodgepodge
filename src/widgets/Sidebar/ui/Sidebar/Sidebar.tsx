import type { FC } from 'react'
import React, { useState } from 'react'
import cls from './Sidebar.module.scss'
import { classNames } from '@/shared/lib'
import { ThemeSwitcher } from '@/widgets/ThemeSwitcher'
import { LangSwitcher } from '@/widgets/LangSwitcher'

interface SidebarProps {
  className?: string
}

export const Sidebar: FC<SidebarProps> = props => {
  const { className, children, ...otherProps } = props
  const [collapsed, setCollapsed] = useState(false)
  const toggle = () => {
    setCollapsed(prev => !prev)
  }

  return (
    <div className={classNames(cls.Sidebar, { [cls.collapsed]: collapsed }, [className])}
      {...otherProps}>
      <button onClick={toggle}>Toggle</button>
      <div className={classNames(cls.switchers)}>
        <ThemeSwitcher />
        <LangSwitcher className={cls.lang} />
      </div>

    </div>
  )
}
