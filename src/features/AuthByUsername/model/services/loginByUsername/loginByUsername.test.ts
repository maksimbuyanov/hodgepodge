import { loginByUsername } from "@/features/AuthByUsername/model/services/loginByUsername/loginByUsername"
import { userActions } from "@/entities/User"
import { TestAsyncThunk } from "@/shared/lib/TestAsyncThunk/TestAsyncThunk"

describe("loginByUsername", () => {
  test("success", async () => {
    expect(1).toBe(1)
  })

  test("success with class", async () => {
    const userValue = { username: "123", id: "31" }
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const result = await thunk.callThunk({ username: "123", password: "321" })
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("fulfilled")
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.auth(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.payload).toEqual(userValue)
  })

  test("error with class", async () => {
    const thunk = new TestAsyncThunk(loginByUsername)
    thunk.api.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk({ username: "123", password: "321" })
    expect(thunk.api.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("rejected")
    expect(thunk.dispatch).toHaveBeenCalledTimes(2)
    expect(result.payload).toBe("error")
  })
})
