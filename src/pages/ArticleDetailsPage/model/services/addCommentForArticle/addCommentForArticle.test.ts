import { addCommentForArticle } from "./addCommentForArticle"
import { TestAsyncThunk } from "@/shared/lib/TestAsyncThunk/TestAsyncThunk"
import { Comment } from "@/entities/Comment"

describe("addCommentForArticle", () => {
  test("success with class", async () => {
    const userValue: Comment = {
      user: { username: "qwe", id: "123" },
      id: "321",
      text: "test text",
    }
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: { authData: { id: "1" } },
      articleDetails: { data: { id: "1" } },
    })
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const result = await thunk.callThunk("test")
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("fulfilled")
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.payload).toEqual(userValue)
  })

  test("error with class", async () => {
    const thunk = new TestAsyncThunk(addCommentForArticle, {
      user: { authData: { id: "1" } },
      articleDetails: { data: { id: "1" } },
    })
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk("test")
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("rejected")
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
  })
})
