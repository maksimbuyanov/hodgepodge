import { createAsyncThunk } from "@reduxjs/toolkit"
import { asyncThunkProp } from "@/app/providers/StoreProvider"
import { Comment } from "@/entities/Comment"

// export interface fetchProfileDataProps {}

export const fetchCommentsByArticleId = createAsyncThunk<
  Comment[],
  string | undefined,
  asyncThunkProp<string>
>("articleDetails/fetchCommentsByArticleId", async (articleId, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI
  if (!articleId) {
    return rejectWithValue("error article comments")
  }
  try {
    const response = extra.api.get<Comment[]>(`/comments`, {
      params: {
        articleId,
        _expand: "user",
      },
    })
    if (!(await response).data) {
      throw new Error() // нужно только для отработки тестов
    }
    return (await response).data
  } catch (e) {
    return rejectWithValue("error article comments")
  }
})
