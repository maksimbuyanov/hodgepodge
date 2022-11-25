import { createAsyncThunk } from "@reduxjs/toolkit"
import { getUserData } from "@/entities/User"
import { asyncThunkProp } from "@/app/providers/StoreProvider"
import { getArticleDetailsData } from "@/entities/Article"
import { fetchCommentsByArticleId } from "@/pages/ArticleDetailsPage/model/services/fetchCommentsByArticleId/fetchCommentsByArticleId"

export const addCommentForArticle = createAsyncThunk<
  Comment,
  string,
  asyncThunkProp<string>
>("articleDetailsPage/addCommentForArticle", async (text, thunkAPI) => {
  const { rejectWithValue, extra, getState, dispatch } = thunkAPI
  const userData = getUserData(getState())
  const article = getArticleDetailsData(getState())

  if (!userData || !text || !article || !article.id || !userData.id) {
    return rejectWithValue(" no data")
  }

  try {
    const response = await extra.api.post<Comment>(`comments`, {
      articleId: article.id,
      userId: userData.id,
      text,
    })
    if (!response.data) {
      throw new Error()
    }
    void dispatch(fetchCommentsByArticleId(article.id))
    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue("error")
  }
})
