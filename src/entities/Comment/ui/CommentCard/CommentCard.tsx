import { FC } from "react"
import cls from "./CommentCard.module.scss"
import { classNames } from "@/shared/lib"
import { Comment } from "../../model/types/comment"
import { AppLink, Avatar, HStack, Skeleton, Text, VStack } from "@/shared/ui"
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
      <VStack
        gap={"16"}
        max={true}
        className={classNames(cls.CommentCard, {}, [className])}
      >
        <HStack gap={"16"} className={cls.header}>
          <Skeleton height={30} width={30} border={"50%"} />
          <Skeleton height={24} width={200} />
        </HStack>
        <Skeleton height={60} width={"100%"} />
      </VStack>
    )
  }
  return (
    <VStack
      gap={"16"}
      max={true}
      className={classNames(cls.CommentCard, {}, [className])}
    >
      <AppLink to={RoutePath.profile + comment.user.id}>
        <HStack gap={"16"}>
          {comment.user.avatar && (
            <Avatar
              size={30}
              alt={comment.user.username}
              src={comment.user.avatar} // TODO добавить заглушку, на случай если аватара нет
            />
          )}
          <Text title={comment.user.username} />
        </HStack>
      </AppLink>
      <Text text={comment.text} />
    </VStack>
  )
}
