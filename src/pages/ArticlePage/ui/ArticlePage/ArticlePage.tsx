import { FC, memo, useCallback } from "react"
import cls from "./ArticlePage.module.scss"
import {
  classNames,
  DynamicModuleLoader,
  ReducersList,
  useAppDispatch,
  useInitialEffect,
} from "@/shared/lib"
import { articlesPageReducer } from "../../model/slice/articlesPageSlice"
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage"
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage"
import { Page } from "@/widgets/Page"
import ArticlesPageFilters from "../ArticlesPageFilters/ArticlesPageFilters"
import { useSearchParams } from "react-router-dom"
import { ArticleInfiniteList } from "../ArticleInfiniteList/ArticleInfiniteList"

interface ArticlePageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

export const ArticlePage: FC<ArticlePageProps> = props => {
  const { className = "" } = props

  const dispatch = useAppDispatch()

  const [searchParams] = useSearchParams()

  useInitialEffect(() => {
    void dispatch(initArticlesPage(searchParams))
  })

  const onLoadNextPart = useCallback(() => {
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(cls.ArticlePage, {}, [className])}
        onScrollEnd={onLoadNextPart}
      >
        <ArticlesPageFilters className={cls.addon} />
        <ArticleInfiniteList />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlePage)
