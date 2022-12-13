import { createAsyncThunk } from "@reduxjs/toolkit"
import { asyncThunkProp } from "@/app/providers/StoreProvider"
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors"
import { articlesPageActions } from "../../slice/articlesPageSlice"
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList"
import { SortOrder } from "@/shared/types"
import { ArticleSortField } from "@/entities/Article"
import { ArticleTabsType } from "../../types/articlePageSchema"

export const initArticlesPage = createAsyncThunk<
  unknown,
  URLSearchParams,
  asyncThunkProp<string>
>("articlesPage/initArticlesPage", async (searchParams, thunkAPI) => {
  const { getState, dispatch } = thunkAPI

  const inited = getArticlesPageInited(getState())

  if (!inited) {
    const orderFromUrl = searchParams.get("order")
    const sortFromUrl = searchParams.get("sort")
    const searchFromUrl = searchParams.get("search")
    const typeFromUrl = searchParams.get("type")

    if (orderFromUrl) {
      dispatch(articlesPageActions.setOrder(orderFromUrl as SortOrder))
    }
    if (sortFromUrl) {
      dispatch(articlesPageActions.setSort(sortFromUrl as ArticleSortField))
    }
    if (searchFromUrl) {
      dispatch(articlesPageActions.setSearch(searchFromUrl))
    }
    if (typeFromUrl) {
      dispatch(articlesPageActions.setType(typeFromUrl as ArticleTabsType))
    }
    dispatch(articlesPageActions.initState())
    void dispatch(fetchArticlesList({ replace: false }))
  }
})
