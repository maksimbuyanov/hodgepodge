import { createAsyncThunk } from "@reduxjs/toolkit"
import { Article } from "@/entities/Article"
import { asyncThunkProp } from "@/app/providers/StoreProvider"

export const fetchArticleRecommendations = createAsyncThunk<
  Article[],
  undefined,
  asyncThunkProp<string>
>("ArticleDetailsPage/fetchArticleRecommendations", async (___, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI

  try {
    const response = await extra.api.get<Article[]>("/articles", {
      params: { _limit: 4 },
    })
    if (!response.data) {
      throw new Error()
    }
    return response.data
  } catch (e) {
    return rejectWithValue("error")
  }
})
