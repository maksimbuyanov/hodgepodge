import { FC, memo } from "react"
import cls from "./ArticleDetailsPage.module.scss"
import { classNames, DynamicModuleLoader, ReducersList } from "@/shared/lib"
import { useTranslation } from "react-i18next"
import { ArticleDetails } from "@/entities/Article"
import { useParams } from "react-router-dom"
import { Page } from "@/widgets/Page"
import { articleDetailsPageReducer } from "../../model/slice"
import ArticleDetailsPageHeader from "../ArticleDetailsPageHeader/ArticleDetailsPageHeader"
import { ArticleRecommendationsList } from "@/features/ArticleRecommendationsList"
import { ArticleDetailsCommensts } from "../ArticleDetailsCommensts/ArticleDetailsCommensts"

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
        <ArticleRecommendationsList />
        <ArticleDetailsCommensts id={id} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticleDetailsPage)
