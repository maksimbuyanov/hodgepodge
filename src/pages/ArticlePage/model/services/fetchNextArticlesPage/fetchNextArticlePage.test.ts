import { TestAsyncThunk } from "@/shared/lib/TestAsyncThunk/TestAsyncThunk"
import { fetchNextArticlesPage } from "./fetchNextArticlesPage"
import { fetchArticlesList } from "../fetchArticlesList/fetchArticlesList"

jest.mock("../fetchArticlesList/fetchArticlesList")

describe("fetchNextArticlePage.test", () => {
  test("success", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        isLoading: false,
        ids: [],
        entities: {},
        hasMore: true,
        limit: 5,
      },
    })
    // @ts-expect-error
    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(4)
    expect(fetchArticlesList).toBeCalledWith({ replace: false })
  })
  test("fetchArticleList not called", async () => {
    const thunk = new TestAsyncThunk(fetchNextArticlesPage, {
      articlesPage: {
        page: 2,
        isLoading: false,
        ids: [],
        entities: {},
        hasMore: false,
        limit: 5,
      },
    })
    // @ts-expect-error
    await thunk.callThunk()

    expect(thunk.dispatch).toBeCalledTimes(2)
    expect(fetchArticlesList).not.toHaveBeenCalled()
  })
})
