import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"
import { Comment } from "@/entities/Comment"
import { StateSchema } from "@/app/providers/StoreProvider"
import { ArticleDetailsPageSchema } from "@/pages/ArticleDetailsPage"
import {
  fetchProfileData,
  Profile,
  updateProfileData,
} from "@/entities/Profile"
import { fetchCommentsByArticleId } from "../services/fetchCommentsByArticleId/fetchCommentsByArticleId"
import { Article } from "@/entities/Article"
import { ArticleDetailsPageRecommendationsSchema } from "@/pages/ArticleDetailsPage/model/types/articleDetailsPageRecommendationsSchema"

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: article => article.id,
})

export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<StateSchema>(
    state =>
      state.articleDetailsRecommendations ??
      recommendationsAdapter.getInitialState()
  )

const articleDetailsPageRecommendationsSlice = createSlice({
  name: "articleDetailsPageRecommendationsSlice",
  initialState:
    recommendationsAdapter.getInitialState<ArticleDetailsPageRecommendationsSchema>(
      {
        error: undefined,
        isLoading: false,
        ids: [],
        entities: {},
      }
    ),
  reducers: {},
  // extraReducers: builder => {
  //   builder.addCase(fetchCommentsByArticleId.pending, (state, ___action) => {
  //     state.error = ""
  //     state.isLoading = true
  //   })
  //   builder.addCase(
  //     fetchCommentsByArticleId.fulfilled,
  //     (state, action: PayloadAction<Article[]>) => {
  //       recommendationsAdapter.setAll(state, action.payload)
  //       state.isLoading = false
  //     }
  //   )
  //   builder.addCase(fetchCommentsByArticleId.rejected, (state, action) => {
  //     state.isLoading = false
  //     state.error = action.payload
  //   })
  // },
})
// TODO комментарии не загружаются, почитать чат

export const {
  reducer: articleDetailsPageRecommendationsReducer,
  actions: articleDetailsPageRecommendationsActions,
} = articleDetailsPageRecommendationsSlice
