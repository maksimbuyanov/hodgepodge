import { FC, memo, useCallback } from "react"
import cls from "./ArticlePage.module.scss"
import {
  classNames,
  DynamicModuleLoader,
  ReducersList,
  useAppDispatch,
  useInitialEffect,
} from "@/shared/lib"
import { Text } from "@/shared/ui"
import { useTranslation } from "react-i18next"
import { ArticleList } from "@/entities/Article"
import {
  articlesPageReducer,
  getArticles,
} from "../../model/slice/articlesPageSlice"
import { useSelector } from "react-redux"
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors"
import { fetchNextArticlesPage } from "../../model/services/fetchNextArticlesPage/fetchNextArticlesPage"
import { initArticlesPage } from "../../model/services/initArticlesPage/initArticlesPage"
import { Page } from "@/widgets/Page"
import ArticlesPageFilters from "../ArticlesPageFilters/ArticlesPageFilters"
import { useSearchParams } from "react-router-dom"

interface ArticlePageProps {
  className?: string
}

const reducers: ReducersList = {
  articlesPage: articlesPageReducer,
}

export const ArticlePage: FC<ArticlePageProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation("article")
  const dispatch = useAppDispatch()
  const articles = useSelector(getArticles.selectAll)
  const isLoading = useSelector(getArticlesPageIsLoading)
  const view = useSelector(getArticlesPageView)
  const [searchParams] = useSearchParams()
  const error = useSelector(getArticlesPageError)

  useInitialEffect(() => {
    void dispatch(initArticlesPage(searchParams))
  })

  const onLoadNextPart = useCallback(() => {
    void dispatch(fetchNextArticlesPage())
  }, [dispatch])

  let content

  if (error) {
    content = <Text title={t("Ошибка запроса")} />
  } else if (!isLoading && !articles.length) {
    content = (
      <>
        <ArticlesPageFilters className={cls.addon} />
        <Text title={t("Статьи не найдены")} />
      </>
    )
  } else {
    content = (
      <>
        <ArticlesPageFilters className={cls.addon} />
        <ArticleList view={view} isLoading={isLoading} articles={articles} />
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={false}>
      <Page
        className={classNames(cls.ArticlePage, {}, [className])}
        onScrollEnd={onLoadNextPart}
      >
        {content}
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlePage)
