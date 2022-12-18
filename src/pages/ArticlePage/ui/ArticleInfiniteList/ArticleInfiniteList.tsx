import { FC } from "react"
import { ArticleList } from "@/entities/Article"
import { useSelector } from "react-redux"
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors"
import { getArticles } from "../../model/slice/articlesPageSlice"
import { Text } from "@/shared/ui"
import { useTranslation } from "react-i18next"

interface ArticleInfiniteListProps {
  className?: string
}

export const ArticleInfiniteList: FC<ArticleInfiniteListProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation("article")
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)
  if (error) {
    return <Text title={t("Ошибка запроса")} />
  } else if (!isLoading && !articles.length) {
    return <Text title={t("Статьи не найдены")} />
  }
  return <ArticleList view={view} isLoading={isLoading} articles={articles} />
}
