import { FC, HTMLAttributeAnchorTarget, memo, ReactNode } from "react"
import cls from "./ArticleList.module.scss"
import { classNames } from "@/shared/lib"
import { Article, ArticleView } from "../../model/types/article"
import { ArticleListItem } from "../ArticleListItem/ArticleListItem"
import { ArticleListItemSkeleton } from "../ArticleListItem/ArticleListItemSkeleton"
import { List, ListRowProps, WindowScroller } from "react-virtualized"
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
  let elem: Element
  elem = document.getElementById(PAGE_ID) as Element
  if (!elem) {
    elem = document.getElementById("root") as Element
  }

  const isColumn = view === ArticleView.COLUMN
  const itemsPerRow = isColumn ? 1 : Math.floor(elem.clientWidth / 300)

  const rowCount = isColumn
    ? articles.length
    : Math.ceil(articles.length / itemsPerRow)

  const rowRender: FC<ListRowProps> = props => {
    // eslint-disable-next-line react/prop-types
    const { key, style, index } = props
    const items = []
    const fromIndex = index * itemsPerRow
    const toIndex = Math.min(fromIndex + itemsPerRow, articles.length)
    for (let i = fromIndex; i < toIndex; i++) {
      items.push(
        <ArticleListItem
          className={cls.card}
          article={articles[i]}
          view={view}
          target={target}
          key={articles[i].id}
        />
      )
    }
    return (
      <div key={key} style={style} className={cls.line}>
        {items}
      </div>
    )
  }

  return (
    // @ts-expect-error
    <WindowScroller scrollElement={elem}>
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
          {articles.length > 0 && (
            /* @ts-expect-error */
            <List
              height={height ?? elem.clientHeight}
              rowCount={rowCount}
              rowHeight={isColumn ? 660 : 380}
              autoWidth={isColumn}
              rowRenderer={rowRender}
              width={width || elem.clientWidth}
              autoHeight={true}
              onScroll={onChildScroll}
              isScrolling={isScrolling}
              scrollTop={scrollTop}
            />
          )}
          {isLoading && getSkeletons(view)}
        </div>
      )}
    </WindowScroller>
  )
}

export default memo(ArticleList)
