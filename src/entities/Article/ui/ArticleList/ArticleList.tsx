import { FC, HTMLAttributeAnchorTarget, memo, ReactNode } from "react"
import cls from "./ArticleList.module.scss"
import { classNames } from "@/shared/lib"
import { Article, ArticleView } from "../../model/types/article"
import { ArticleListItem } from "../ArticleListItem/ArticleListItem"
import { ArticleListItemSkeleton } from "@/entities/Article/ui/ArticleListItem/ArticleListItemSkeleton"
import {
  AutoSizer,
  List,
  ListRowProps,
  WindowScroller,
} from "react-virtualized"
import { PAGE_ID } from "@/shared/const/page"

interface ArticleListProps {
  className?: string
  articles: Article[]
  isLoading?: boolean
  view?: ArticleView
  target?: HTMLAttributeAnchorTarget
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
    target,
  } = props
  const renderArticle = (article: Article): ReactNode => (
    <ArticleListItem
      article={article}
      view={view}
      key={article.id}
      target={target}
    />
  )

  const rowRender: FC<ListRowProps> = props => {
    // eslint-disable-next-line react/prop-types
    const { key, style, index } = props
    return (
      <div key={key} style={style}>
        <ArticleListItem
          article={articles[index]}
          view={view}
          target={target}
        />
      </div>
    )
  }

  // if (isLoading) {
  //   return (
  //     <div className={classNames(cls.ArticleList, {}, [className, cls[view]])}>
  //       {getSkeletons(view)}
  //     </div>
  //   )
  // }

  return (
    // @ts-expect-error
    <WindowScroller scrollElement={document.getElementById(PAGE_ID) as Element}>
      {({
        registerChild,
        height,
        width,
        scrollTop,
        isScrolling,
        onChildScroll,
      }) => (
        <div
          className={classNames(cls.ArticleList, {}, [className, cls[view]])}
          ref={registerChild}
        >
          {/* @ts-expect-error */}
          <List
            height={height ?? 700}
            rowCount={articles.length}
            rowHeight={500}
            rowRenderer={rowRender}
            width={width ? width - 80 : 700}
            autoHeight={true}
            onScroll={onChildScroll}
            isScrolling={isScrolling}
            scrollTop={scrollTop}
          />
          {/* {articles.length > 0 ? articles.map(renderArticle) : null} */}
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  )
}

export default memo(ArticleList)
