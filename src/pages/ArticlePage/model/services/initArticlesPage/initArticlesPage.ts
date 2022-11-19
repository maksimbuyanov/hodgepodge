import { createAsyncThunk } from "@reduxjs/toolkit"
import { asyncThunkProp } from "@/app/providers/StoreProvider"
import { getArticlesPageInited } from "../../selectors/articlesPageSelectors"
import { articlesPageActions } from "../../slice/articlesPageSlice"
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList"

export const initArticlesPage = createAsyncThunk<
  unknown,
  undefined,
  asyncThunkProp<string>
>("articlesPage/initArticlesPage", async (props, thunkAPI) => {
  const { getState, dispatch } = thunkAPI

  const inited = getArticlesPageInited(getState())

  if (!inited) {
    dispatch(articlesPageActions.initState())
    void dispatch(fetchArticlesList({ page: 1 }))
  }
})
