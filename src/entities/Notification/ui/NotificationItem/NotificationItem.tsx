import { FC } from "react"
import cls from "./NotificationItem.module.scss"
import { classNames } from "@/shared/lib"

interface NotificationItemProps {
  className?: string
}

export const NotificationItem: FC<NotificationItemProps> = props => {
  const { className = "" } = props
  return (
    <div className={classNames(cls.NotificationItem, {}, [className])}></div>
  )
}
