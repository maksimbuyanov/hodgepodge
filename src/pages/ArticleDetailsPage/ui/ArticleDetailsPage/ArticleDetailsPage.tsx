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
import { ArticleDetails } from "@/entities/Article"
import { useNavigate, useParams } from "react-router-dom"
import { Button, ButtonTheme, Text } from "@/shared/ui"
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
import { fetchCommentsByArticleId } from "../../model/services/fetchCommentsByArticleId/fetchCommentsByArticleId"
import { AddCommentForm } from "@/features/AddCommentForm"
import { addCommentForArticle } from "../../model/services/addCommentForArticle/addCommentForArticle"
import { RoutePath } from "@/shared/config"
import { Page } from "@/widgets/Page"
import {
  articleDetailsPageRecommendationsReducer,
  getArticleRecommendations,
} from "../../model/slice/articleDetailsPageRecommendationsSlice"
import { getArticleRecommendationsIsLoading } from "@/pages/ArticleDetailsPage/model/selectors/recommendations/recommendations"

interface ArticleDetailsPageProps {
  className?: string
}
const reducers: ReducersList = {
  articleDetailsComments: articleDetailsCommentsReducer,
  articleDetailsRecommendations: articleDetailsPageRecommendationsReducer,
}

export const ArticleDetailsPage: FC<ArticleDetailsPageProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation("article")
  const { id } = useParams<{ id: string }>()
  const commentsIsLoading = useSelector(getArticleCommentsIsLoading)
  const recommendationsIsLoading = useSelector(
    getArticleRecommendationsIsLoading
  )
  const commentsError = useSelector(getArticleCommentsError)
  const comments = useSelector(getArticleComments.selectAll)
  const recommendations = useSelector(getArticleRecommendations.selectAll)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const onBackToList = useCallback(() => {
    navigate(RoutePath.articles)
  }, [navigate])

  useInitialEffect(() => {
    void dispatch(fetchCommentsByArticleId(id))
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
        <Button theme={ButtonTheme.OUTLINE} onClick={onBackToList}>
          {t("Назад к списку")}
        </Button>
        <ArticleDetails id={id} />
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
