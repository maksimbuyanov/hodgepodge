import { FC, memo, useCallback } from "react"
import cls from "./ArticleDetailsPage.module.scss"
import {
  classNames,
  DynamicModuleLoader,
  ReducersList,
  useAppDispatch,
  useInitialEffect,
} from "@/shared/lib"
import { useTranslation } from "react-i18next"
import { ArticleDetails, ArticleList, ArticleView } from "@/entities/Article"
import { useParams } from "react-router-dom"
import { Text } from "@/shared/ui"
import { CommentList } from "@/entities/Comment"
import { getArticleComments } from "../../model/slice/slice"
import { useSelector } from "react-redux"
import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "../../model/selectors/comments/comments"
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId"
import { AddCommentForm } from "@/features/AddCommentForm"
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle"
import { Page } from "@/widgets/Page"
import { getArticleRecommendations } from "../../model/slice/articleDetailsPageRecommendationsSlice"
import { getArticleRecommendationsIsLoading } from "../../model/selectors/recommendations/recommendations"
import { fetchArticleRecommendations } from "../../model/services/fetchArticleRecommendations/fetchArticleRecommendations"
import { articleDetailsPageReducer } from "../../model/slice"
import ArticleDetailsPageHeader from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader"

interface ArticleDetailsPageProps {
  className?: string
}
const reducers: ReducersList = {
  articleDetailsPage: articleDetailsPageReducer,
}

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = props => {
  const { className = "" } = props
  const { id } = useParams<{ id: string }>()
  const { t } = useTranslation("article")
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  )
  const commentsError = useSelector(getArticleCommentsError)
  const comments = useSelector(getArticleComments.selectAll)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const dispatch = useAppDispatch()

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id))
    void dispatch(fetchArticleRecommendations())
  })

  const onSendComment = useCallback(
    (text: string) => {
      void dispatch(addCommentForArticle(text))
    },
    [dispatch]
  )
  if (!id) {
    return (
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        {t("Статья не найдена")}
      </Page>
    )
  }
  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.ArticleDetailsPage, {}, [className])}>
        <ArticleDetailsPageHeader />
        <ArticleDetails id={id} />
        <Text title={t("Рекомендуем")} />
        <ArticleList
          className={cls.recommendations}
          isLoading={recommendationsIsLoading}
          view={ArticleView.GRID}
          articles={recommendations}
          target={"_blank"}
        />
        <Text title={t("Комментарии")} />
        <AddCommentForm onSendComment={onSendComment} />
        <CommentList
          className={cls.commentTitle}
          comments={comments}
          isLoading={commentsIsLoading}
        />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
