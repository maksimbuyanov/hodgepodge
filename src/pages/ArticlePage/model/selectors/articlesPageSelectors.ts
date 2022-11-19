import { StateSchema } from "@/app/providers/StoreProvider"
import { ArticleView } from "@/entities/Article"

export const getArticlesPageIsLoading = (state: StateSchema) =>
  state.articlesPage?.isLoading
export const getArticlesPageError = (state: StateSchema) =>
  state.articlesPage?.error
export const getArticlesPageView = (state: StateSchema) =>
  state.articlesPage?.view ?? ArticleView.GRID
export const getArticlesPageNumber = (state: StateSchema) =>
  state.articlesPage?.page as number
export const getArticlesPageLimit = (state: StateSchema) =>
  state.articlesPage?.limit ?? 9
export const getArticlesPageHasMore = (state: StateSchema) =>
  state.articlesPage?.hasMore
export const getArticlesPageInited = (state: StateSchema) =>
  state.articlesPage?._inited
