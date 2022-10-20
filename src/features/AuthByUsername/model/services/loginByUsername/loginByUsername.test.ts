import axios from "axios"
import { loginByUsername } from "@/features/AuthByUsername/model/services/loginByUsername/loginByUsername"
import { Dispatch } from "@reduxjs/toolkit"
import { StateSchema } from "@/app/providers/StoreProvider"
import { userActions } from "@/entities/User"
import { TestAsyncThunk } from "@/shared/lib/TestAsyncThunk/TestAsyncThunk"

jest.mock("axios")
const mockedAxios = jest.mocked(axios, true)

describe("loginByUsername", () => {
  let dispatch: Dispatch
  let getState: () => StateSchema

  beforeEach(function () {
    dispatch = jest.fn()
    getState = jest.fn()
  })
  test("success", async () => {
    const userValue = { username: "123", id: "31" }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const action = loginByUsername({ username: "123", password: "321" })
    const result = await action(dispatch, getState, undefined)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("fulfilled")
    expect(dispatch).toHaveBeenCalledWith(userActions.auth(userValue))
    expect(dispatch).toHaveBeenCalledTimes(3)
    expect(result.payload).toEqual(userValue)
  })
  test("error", async () => {
    mockedAxios.post.mockReturnValue(Promise.resolve({ status: 403 }))
    const action = loginByUsername({ username: "123", password: "321" })
    const result = await action(dispatch, getState, undefined)
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("rejected")
    expect(dispatch).toHaveBeenCalledTimes(2)
    expect(result.payload).toBe("error")
  })

  test("success with class", async () => {
    const userValue = { username: "123", id: "31" }
    mockedAxios.post.mockReturnValue(Promise.resolve({ data: userValue }))
    const thunk = new TestAsyncThunk(loginByUsername)
    const result = await thunk.callThunk({ username: "123", password: "321" })
    expect(mockedAxios.post).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("fulfilled")
    expect(thunk.dispatch).toHaveBeenCalledWith(userActions.auth(userValue))
    expect(thunk.dispatch).toHaveBeenCalledTimes(3)
    expect(result.payload).toEqual(userValue)
  })
})
