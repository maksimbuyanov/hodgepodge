import { createAsyncThunk } from "@reduxjs/toolkit"
import { asyncThunkProp } from "@/app/providers/StoreProvider"
import { Article } from "@/entities/Article"
import {
  getArticlesPageLimit,
  getArticlesPageNumber,
  getArticlesPageOrder,
  getArticlesPageSearch,
  getArticlesPageSort,
} from "@/pages/ArticlePage/model/selectors/articlesPageSelectors"
import { addQueryParam } from "@/shared/lib/url/addQueryParam/addQueryParam"

interface FetchArticlesList {
  replace?: boolean
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesList,
  asyncThunkProp<string>
>("articlesPage/fetchArticlesList", async (props, thunkAPI) => {
  const { rejectWithValue, extra, getState, dispatch } = thunkAPI
  const page = getArticlesPageNumber(getState())
  const order = getArticlesPageOrder(getState())
  const sort = getArticlesPageSort(getState())
  const search = getArticlesPageSearch(getState())
  const limit = getArticlesPageLimit(getState())
  try {
    addQueryParam({ sort, order, search })
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: "user",
        _limit: limit,
        _page: page,
        _sort: sort,
        _order: order,
        q: search,
      },
    })

    if (!response.data) {
      throw new Error()
    }

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue("error")
  }
})
