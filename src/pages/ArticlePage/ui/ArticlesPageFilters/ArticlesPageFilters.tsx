import { FC, memo, useCallback } from "react"
import cls from "./ArticlesPageFilters.module.scss"
import { classNames, useAppDispatch, useDebounce } from "@/shared/lib"
import {
  ArticleSortField,
  ArticleSortSelector,
  ArticleView,
  ArticleViewSelector,
} from "@/entities/Article"
import { useSelector } from "react-redux"
import {
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors"
import { articlesPageActions } from "../../model/slice/articlesPageSlice"
import { Input } from "@/shared/ui"
import { useTranslation } from "react-i18next"
import { Card } from "@/shared/ui/Card/Card"
import { SortOrder } from "@/shared/types"
import { fetchArticlesList } from "@/pages/ArticlePage/model/services/fetchArticlesList/fetchArticlesList"

interface ArticlesPageFiltersProps {
  className?: string
}

export const ArticlesPageFilters: FC<ArticlesPageFiltersProps> = props => {
  const { className = "" } = props
  const dispatch = useAppDispatch()
  const { t } = useTranslation("article")
  const view = useSelector(getArticlesPageView)
  const order = useSelector(getArticlesPageOrder)
  const sort = useSelector(getArticlesPageSort)
  const search = useSelector(getArticlesPageSearch)
  const fetchData = useCallback(() => {
    void dispatch(fetchArticlesList({ replace: true }))
  }, [dispatch])
  const debouncedFetchData = useDebounce(fetchData, 300)
  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )
  const onChangeSort = useCallback(
    (newSort: ArticleSortField) => {
      dispatch(articlesPageActions.setSort(newSort))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )
  const onChangeOrder = useCallback(
    (newOrder: SortOrder) => {
      dispatch(articlesPageActions.setOrder(newOrder))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
  )
  const onChangeSearch = useCallback(
    (value: string) => {
      dispatch(articlesPageActions.setSearch(value))
      dispatch(articlesPageActions.setPage(1))
      debouncedFetchData()
    },
    [dispatch, debouncedFetchData]
  )
  return (
    <div className={classNames("", {}, [className])}>
      <div className={cls.sortWrapper}>
        <ArticleSortSelector
          sort={sort}
          order={order}
          onChangeOrder={onChangeOrder}
          onChangeSort={onChangeSort}
        />
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
      </div>
      <Card className={cls.searchWrapper}>
        <Input
          placeholder={t("Поиск")}
          value={search}
          onChange={onChangeSearch}
        />
      </Card>
    </div>
  )
}

export default memo(ArticlesPageFilters)
