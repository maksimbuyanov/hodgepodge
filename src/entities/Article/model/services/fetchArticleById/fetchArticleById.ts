import { createAsyncThunk } from "@reduxjs/toolkit"
import { asyncThunkProp } from "@/app/providers/StoreProvider"
import { Article } from "../../types/article"

export const fetchArticleById = createAsyncThunk<
  Article,
  string,
  asyncThunkProp<string>
>("articleDetails/fetchArticleById", async (articleId, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI
  try {
    const response = extra.api.get<Article>("/articles/" + articleId)
    if (!(await response).data) {
      throw new Error() // нужно только для отработки тестов
    }
    return (await response).data
  } catch (e) {
    console.log(e)
    return rejectWithValue("error article")
  }
})
