import {
  createEntityAdapter,
  createSlice,
  PayloadAction,
} from "@reduxjs/toolkit"
import { StateSchema } from "@/app/providers/StoreProvider"
import { Article, ArticleView } from "@/entities/Article"
import { ArticlesPageSchema } from "../types/articlePageSchema"
import { fetchArticlesList } from "../services/fetchArticlesList/fetchArticlesList"
import { LOCAL_STORAGE_ARTICLES_VIEW } from "@/shared/const/localStorage"

const articlesAdapter = createEntityAdapter<Article>({
  selectId: article => article.id,
})

export const getArticles = articlesAdapter.getSelectors<StateSchema>(
  state => state.articlesPage ?? articlesAdapter.getInitialState()
)

const articlesPageSlice = createSlice({
  name: "articlesPageSlice",
  initialState: articlesAdapter.getInitialState<ArticlesPageSchema>({
    error: undefined,
    isLoading: false,
    ids: [],
    entities: {},
    view: ArticleView.GRID,
    page: 1,
    hasMore: true,
    _inited: false,
  }),
  reducers: {
    setView: (state, action: PayloadAction<ArticleView>) => {
      state.view = action.payload
      localStorage.setItem(LOCAL_STORAGE_ARTICLES_VIEW, action.payload)
    },
    initState: state => {
      const view = localStorage.getItem(
        LOCAL_STORAGE_ARTICLES_VIEW
      ) as ArticleView

      state.view = view
      state.limit = view === ArticleView.GRID ? 9 : 4
      state._inited = true
    },
    setPage: (state, action: PayloadAction<number>) => {
      state.page = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchArticlesList.pending, (state, ___action) => {
      state.error = ""
      state.isLoading = true
    })
    builder.addCase(
      fetchArticlesList.fulfilled,
      (state, action: PayloadAction<Article[]>) => {
        articlesAdapter.addMany(state, action.payload)
        state.isLoading = false
        state.hasMore = action.payload.length > 0
      }
    )
    builder.addCase(fetchArticlesList.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { reducer: articlesPageReducer, actions: articlesPageActions } =
  articlesPageSlice
