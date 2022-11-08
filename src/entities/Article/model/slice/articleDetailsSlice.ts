import { ArticleDetailsSchema } from "@/entities/Article/model/types/ArticleDetailsSchema"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById"
import { Article } from "../types/article"

const initialState: ArticleDetailsSchema = {
  isLoading: false,
}

export const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },
  },

  extraReducers: builder => {
    builder.addCase(fetchArticleById.pending, (state, ___action) => {
      state.error = ""
      state.isLoading = true
    })
    builder.addCase(
      fetchArticleById.fulfilled,
      (state, action: PayloadAction<Article>) => {
        state.isLoading = false
        state.data = action.payload
      }
    )
    builder.addCase(fetchArticleById.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const {
  actions: articleDetailsActions,
  reducer: articleDetailsReducer,
} = articleDetailsSlice
