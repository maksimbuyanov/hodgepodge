import { FC, memo, useCallback } from "react"
import cls from "./ArticlePage.module.scss"
import {
  classNames,
  DynamicModuleLoader,
  ReducersList,
  useAppDispatch,
  useInitialEffect,
} from "@/shared/lib"
import { useTranslation } from "react-i18next"
import {
  ArticleList,
  ArticleView,
  ArticleViewSelector,
} from "@/entities/Article"
import {
  articlesPageActions,
  articlesPageReducer,
  getArticles,
} from "../../model/slice/articlesPageSlice"
import { fetchArticlesList } from "../../model/services/fetchArticlesList/fetchArticlesList"
import { useSelector } from "react-redux"
import {
  getArticlesPageError,
  getArticlesPageIsLoading,
  getArticlesPageView,
} from "../../model/selectors/articlesPageSelectors"
import { Page } from "@/shared/ui"

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
  const error = useSelector(getArticlesPageError)
  const view = useSelector(getArticlesPageView)
  useInitialEffect(() => {
    dispatch(articlesPageActions.initState())
    void dispatch(fetchArticlesList({ page: 1 }))
  })
  const onChangeView = useCallback(
    (view: ArticleView) => {
      dispatch(articlesPageActions.setView(view))
    },
    [dispatch]
  )
  return (
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.ArticlePage, {}, [className])}>
        <ArticleViewSelector view={view} onViewClick={onChangeView} />
        <ArticleList view={view} isLoading={isLoading} articles={articles} />
      </Page>
    </DynamicModuleLoader>
  )
}

export default memo(ArticlePage)
