import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"
import { StateSchema } from "@/app/providers/StoreProvider"
import { Article } from "@/entities/Article"
import { ArticleDetailsPageRecommendationsSchema } from "../types/articleDetailsPageRecommendationsSchema"
import { fetchArticleRecommendations } from "../services/fetchArticleRecommendations/fetchArticleRecommendations"

const recommendationsAdapter = createEntityAdapter<Article>({
  selectId: article => article.id,
})

export const getArticleRecommendations =
  recommendationsAdapter.getSelectors<StateSchema>(
    state =>
      state.articleDetailsPage?.recommendations ??
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
  extraReducers: builder => {
    builder.addCase(fetchArticleRecommendations.pending, (state, ___action) => {
      state.error = ""
      state.isLoading = true
    })
    builder.addCase(
      fetchArticleRecommendations.fulfilled,
      (state, action: PayloadAction<Article[]>) => {
        recommendationsAdapter.setAll(state, action.payload)
        state.isLoading = false
      }
    )
    builder.addCase(fetchArticleRecommendations.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})
// TODO комментарии не загружаются, почитать чат

export const {
  reducer: articleDetailsPageRecommendationsReducer,
  actions: articleDetailsPageRecommendationsActions,
} = articleDetailsPageRecommendationsSlice
