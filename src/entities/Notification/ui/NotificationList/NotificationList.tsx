import { FC, memo } from "react"
// import cls from "./NotificationList.module.scss"
import { classNames } from "@/shared/lib"
import { useNotifications } from "../../api/notificationApi"
import { VStack } from "@/shared/ui"

interface NotificationListProps {
  className?: string
}
// TODO 20:07
const NotificationList: FC<NotificationListProps> = props => {
  const { className = "" } = props
  const { data, isLoading } = useNotifications(null)
  return (
    <VStack gap={"16"} max className={classNames("", {}, [className])}>
      {data?.map(message => (
        <div>{message.title}</div>
      ))}
    </VStack>
  )
}

export const MemoNotificationList = memo(NotificationList)
