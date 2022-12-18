import { classNames } from "@/shared/lib"
import { useTranslation } from "react-i18next"
import { FC, memo } from "react"
import { Text, VStack } from "@/shared/ui"
import { ArticleList, ArticleView } from "@/entities/Article"
import { useArticleRecommendationsList } from "../../api/articleRecommendationsApi"
import cls from "./ArticleRecommendationsList.module.scss"

interface ArticleRecommendationsListProps {
  className?: string
}

export const ArticleRecommendationsList: FC<
  ArticleRecommendationsListProps
> = props => {
  const { className } = props
  const { t } = useTranslation("article")

  const { isLoading, data: articles } = useArticleRecommendationsList(4)

  return (
    <VStack
      className={classNames(cls.RecommendationsList, {}, [className])}
      gap={"8"}
    >
      <Text title={t("Рекомендуем")} />
      <ArticleList
        view={ArticleView.GRID}
        articles={articles}
        target={"_blank"}
        isLoading={isLoading}
      />
    </VStack>
  )
}
export default memo(ArticleRecommendationsList)
