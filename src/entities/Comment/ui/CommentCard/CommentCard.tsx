import { FC } from "react"
import cls from "./CommentCard.module.scss"
import { classNames } from "@/shared/lib"
import { Comment } from "../../model/types/comment"
import { AppLink, Avatar, Skeleton, Text } from "@/shared/ui"
import { RoutePath } from "@/shared/config"

interface CommentCardProps {
  className?: string
  comment: Comment
  isLoading?: boolean
}

export const CommentCard: FC<CommentCardProps> = props => {
  const { className = "", comment, isLoading } = props
  if (isLoading) {
    return (
      <div className={classNames(cls.CommentCard, {}, [className])}>
        <div className={cls.header}>
          <Skeleton height={30} width={30} border={"50%"} />
          <Skeleton height={24} width={200} />
        </div>
        <Skeleton height={60} width={"100%"} className={cls.text} />
      </div>
    )
  }
  return (
    <div className={classNames(cls.CommentCard, {}, [className])}>
      <AppLink to={RoutePath.profile + comment.user.id} className={cls.header}>
        {comment.user.avatar && (
          <Avatar
            size={30}
            alt={comment.user.username}
            src={comment.user.avatar} // TODO добавить заглушку, на случай если аватара нет
          />
        )}
        <Text title={comment.user.username} />
      </AppLink>
      <Text text={comment.text} className={cls.text} />
    </div>
  )
}
