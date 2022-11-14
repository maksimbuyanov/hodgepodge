import { FC, memo, ReactNode } from "react"
import cls from "./ArticleList.module.scss"
import { classNames } from "@/shared/lib"
import { Article, ArticleView } from "../../model/types/article"
import { ArticleListItem } from "../ArticleListItem/ArticleListItem"

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

export const ArticleList: FC<ArticleListProps> = props => {
  const {
    className = "",
    articles,
    view = ArticleView.COLUMN,
    isLoading,
  } = props
  const renderArticle = (article: Article): ReactNode => (
    <ArticleListItem article={article} view={view} />
  )

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
    </div>
  )
}

export default memo(ArticleList)
