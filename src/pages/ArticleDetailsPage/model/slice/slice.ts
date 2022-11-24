import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"
import { Comment } from "@/entities/Comment"
import { StateSchema } from "@/app/providers/StoreProvider"
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId"
import { ArticleDetailsCommentsSchema } from "../types/ArticleDetailsPage"

const commentsAdapter = createEntityAdapter<Comment>({
  selectId: comment => comment.id,
})

export const getArticleComments = commentsAdapter.getSelectors<StateSchema>(
  state =>
    state.articleDetailsPage?.comments ?? commentsAdapter.getInitialState()
)

const articleDetailCommentsSlice = createSlice({
  name: "articleDetailsCommentsSlice",
  initialState: commentsAdapter.getInitialState<ArticleDetailsCommentsSchema>({
    error: undefined,
    isLoading: false,
    ids: [],
    entities: {},
  }),
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCommentsByArticleId.pending, (state, ___action) => {
      state.error = ""
      state.isLoading = true
    })
    builder.addCase(
      fetchCommentsByArticleId.fulfilled,
      (state, action: PayloadAction<Comment[]>) => {
        commentsAdapter.setAll(state, action.payload)
        state.isLoading = false
      }
    )
    builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})
// TODO комментарии не загружаются, почитать чат

export const {
  reducer: articleDetailsCommentsReducer,
  actions: articleDetailsCommentsActions,
} = articleDetailCommentsSlice
