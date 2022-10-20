import { StateSchema } from "@/app/providers/StoreProvider"
import { getLoginsError } from "./getLoginsError"
import { DeepPartial } from "@reduxjs/toolkit"

describe("getLoginsError.test", () => {
  test("should return error", () => {
    // @ts-expect-error TODO Убрать порнографию
    const state: DeepPartial<StateSchema> = { loginForm: { error: "Error" } }
    expect(getLoginsError(state as StateSchema)).toEqual("Error")
  })
  test("should return empty string", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginsError(state as StateSchema)).toEqual("")
  })
})
