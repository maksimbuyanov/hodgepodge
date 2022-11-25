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
  getArticlesPageType,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors"
import { articlesPageActions } from "../../model/slice/articlesPageSlice"
import { Input } from "@/shared/ui"
import { useTranslation } from "react-i18next"
import { Card } from "@/shared/ui/Card/Card" // TODO
import { SortOrder } from "@/shared/types"
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList"
import { TabItem } from "@/shared/ui/Tabs/Tabs" // TODO
import { ArticleType } from "@/entities/Article/model/types/article"
import { ArticleTabs } from "@/entities/Article/ui/ArticleTabs/ArticleTabs" // TODO

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
  const type = useSelector(getArticlesPageType)
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
  const onChangeType = useCallback(
    (tab: TabItem) => {
      dispatch(articlesPageActions.setType(tab.value as ArticleType))
      dispatch(articlesPageActions.setPage(1))
      fetchData()
    },
    [dispatch, fetchData]
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
      <ArticleTabs onChange={onChangeType} value={type} />
    </div>
  )
}

export default memo(ArticlesPageFilters)
