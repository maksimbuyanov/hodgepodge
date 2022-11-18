import { createAsyncThunk } from "@reduxjs/toolkit"
import { asyncThunkProp } from "@/app/providers/StoreProvider"
import { Article } from "@/entities/Article"
import { getArticlesPageLimit } from "@/pages/ArticlePage/model/selectors/articlesPageSelectors"

interface FetchArticlesList {
  page?: number
}

export const fetchArticlesList = createAsyncThunk<
  Article[],
  FetchArticlesList,
  asyncThunkProp<string>
>("articlesPage/fetchArticlesList", async (props, thunkAPI) => {
  const { rejectWithValue, extra, getState, dispatch } = thunkAPI
  const { page = 1 } = props
  const limit = getArticlesPageLimit(getState())
  try {
    const response = await extra.api.get<Article[]>(`/articles`, {
      params: {
        _expand: "user",
        _limit: limit,
        _page: page,
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
