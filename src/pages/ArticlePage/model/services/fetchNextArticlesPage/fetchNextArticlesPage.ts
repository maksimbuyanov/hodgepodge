import { createAsyncThunk } from "@reduxjs/toolkit"
import { asyncThunkProp } from "@/app/providers/StoreProvider"
import {
  getArticlesPageHasMore,
  getArticlesPageIsLoading,
  getArticlesPageNumber,
} from "../../selectors/articlesPageSelectors"
import { articlesPageActions } from "../../slice/articlesPageSlice"
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList"

export const fetchNextArticlesPage = createAsyncThunk<
  unknown,
  undefined,
  asyncThunkProp<string>
>("articlesPage/fetchNextArticlesPage", async (props, thunkAPI) => {
  const { getState, dispatch } = thunkAPI

  const page = getArticlesPageNumber(getState())
  const isLoading = getArticlesPageIsLoading(getState())
  const hasMore = getArticlesPageHasMore(getState())
  if (page && hasMore && !isLoading) {
    dispatch(articlesPageActions.setPage(page + 1))
    void dispatch(fetchArticlesList({ replace: false }))
  }
})
