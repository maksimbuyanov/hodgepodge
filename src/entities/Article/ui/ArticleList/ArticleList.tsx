import { FC, memo, ReactNode } from "react"
import cls from "./ArticleList.module.scss"
import { classNames } from "@/shared/lib"
import { Article, ArticleView } from "../../model/types/article"
import { ArticleListItem } from "../ArticleListItem/ArticleListItem"
import { ArticleListItemSkeleton } from "@/entities/Article/ui/ArticleListItem/ArticleListItemSkeleton"

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
}

const getSkeletons = (view: ArticleView): ReactNode[] => {
  return new Array(view === ArticleView.GRID ? 9 : 3)
    .fill(0)
    .map((item, intex) => {
      return <ArticleListItemSkeleton view={view} key={intex} />
    })
}

export const ArticleList: FC<ArticleListProps> = props => {
  const {
    className = "",
    articles,
    view = ArticleView.COLUMN,
    isLoading,
  } = props
  const renderArticle = (article: Article): ReactNode => (
    <ArticleListItem article={article} view={view} key={article.id} />
  )

  // if (isLoading) {
  //   return (
  //     <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
  //       {getSkeletons(view)}
  //     </div>
  //   )
  // }

  return (
    <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
      {articles.length > 0 ? articles.map(renderArticle) : null}
      {isLoading && getSkeletons(view)}
    </div>
  )
}

export default memo(ArticleList)
