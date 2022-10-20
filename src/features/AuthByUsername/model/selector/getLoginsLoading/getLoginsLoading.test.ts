import { StateSchema } from "@/app/providers/StoreProvider"
import { getLoginsLoading } from "./getLoginsLoading"
import { DeepPartial } from "@reduxjs/toolkit"

describe("getLoginsLoading.test", () => {
  test("should return true", () => {
    // @ts-expect-error TODO Убрать порнографию
    const state: DeepPartial<StateSchema> = { loginForm: { isLoading: true } }
    expect(getLoginsLoading(state as StateSchema)).toEqual(true)
  })
  test("should return false", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginsLoading(state as StateSchema)).toEqual(false)
  })
})
