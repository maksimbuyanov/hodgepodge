import { FC, memo, useEffect } from "react"
import cls from "./ArticleDetailsPage.module.scss"
import {
  classNames,
  DynamicModuleLoader,
  ReducersList,
  useAppDispatch,
  useInitialEffect,
} from "@/shared/lib"
import { useTranslation } from "react-i18next"
import { ArticleDetails } from "@/entities/Article"
import { useParams } from "react-router-dom"
import { Text } from "@/shared/ui"
import { CommentList } from "@/entities/Comment"
import {
  articleDetailsCommentsReducer,
  getArticleComments,
} from "../../model/slice/slice"
import { useSelector } from "react-redux"
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "../../model/selectors/comments/comments"
import { fetchCommentsByArticleId } from "@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId"

interface ArticleDetailsPageProps {
  className?: string
}
const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
}

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation("article")
  const { id } = useParams<{ id: string }>()
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const commentsError = useSelector(getArticleCommentsError)
  const comments = useSelector(getArticleComments.selectAll)
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id))
  })
  if (!id) {
    return (
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </div>
    )
  }
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetails id={id} />
        <Text title={t("Комментарии")} />
        <CommentList
          className={cls.commentTitle}
          comments={comments}
          isLoading={commentsIsLoading}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
