import { FC, ReactNode, useCallback } from "react"
import cls from "./Tabs.module.scss"
import { classNames } from "@/shared/lib"
import { Card, CardTheme } from "@/shared/ui/Card/Card"

export interface TabItem {
  value: string
  content: ReactNode
}

interface TabsProps {
  className?: string
  tabs: TabItem[]
  value: string
  onTabClick: (tab: TabItem) => void
}

export const Tabs: FC<TabsProps> = props => {
  const { className = "", onTabClick, tabs, value } = props

  const clickHandle = useCallback(
    (tab: TabItem) => {
      return () => {
        onTabClick(tab)
      }
    },
    [onTabClick]
  )
  return (
    <div className={classNames(cls.Tabs, {}, [className])}>
      {tabs.map(tab => {
        return (
          <Card
            className={cls.tab}
            key={tab.value}
            theme={tab.value === value ? CardTheme.NORMAL : CardTheme.OUTLINED}
            onClick={clickHandle(tab)}
          >
            {tab.content}
          </Card>
        )
      })}
    </div>
  )
}
