import { FC, useCallback } from "react"
import { classNames, useAppDispatch, useInitialEffect } from "@/shared/lib"
import { Text, VStack } from "@/shared/ui"
import { AddCommentForm } from "@/features/AddCommentForm"
import { CommentList } from "@/entities/Comment"
import { useTranslation } from "react-i18next"
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle"
import { useSelector } from "react-redux"
import { getArticleCommentsIsLoading } from "../../model/selectors/comments/comments"
import { getArticleComments } from "../../model/slice/slice"
import { fetchCommentsByArticleId } from "@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId"

interface ArticleDetailsCommenstsProps {
  className?: string
  id: string
}

export const ArticleDetailsCommensts: FC<
  ArticleDetailsCommenstsProps
> = props => {
  const dispatch = useAppDispatch()
  const { className = "", id } = props
  const { t } = useTranslation("article")
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const comments = useSelector(getArticleComments.selectAll)
  const onSendComment = useCallback(
    (text: string) => {
      void dispatch(addCommentForArticle(text))
    },
    [dispatch]
  )
  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id))
  })
  return (
    <VStack className={classNames("", {}, [className])}>
      <Text title={t("Комментарии")} />
      <AddCommentForm onSendComment={onSendComment} />
      <CommentList comments={comments} isLoading={commentsIsLoading} />
    </VStack>
  )
}
