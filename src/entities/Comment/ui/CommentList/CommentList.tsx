import { FC } from "react"
import cls from "./CommentList.module.scss"
import { classNames } from "@/shared/lib"
import { Text } from "@/shared/ui"
import { useTranslation } from "react-i18next"
import { CommentCard } from "@/entities/Comment/ui/CommentCard/CommentCard"
import { Comment } from "../../model/types/comment"

interface CommentListProps {
  className?: string
  comments?: Comment[]
  isLoading?: boolean
}

export const CommentList: FC<CommentListProps> = props => {
  const { className = "", comments, isLoading } = props
  const { t } = useTranslation()
  return (
    <div className={classNames(cls.CommentList, {}, [className])}>
      {comments?.length ? (
        comments.map(comment => {
          return (
            <CommentCard
              key={comment.id}
              comment={comment}
              className={cls.comment}
              isLoading={isLoading}
            />
          )
        })
      ) : (
        <Text text={t("Комментарии отсутствуют")} />
      )}
    </div>
  )
}
