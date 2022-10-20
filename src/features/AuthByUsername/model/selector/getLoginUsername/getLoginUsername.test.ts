import { StateSchema } from "@/app/providers/StoreProvider"
import { getLoginUsername } from "./getLoginUsername"
import { DeepPartial } from "@reduxjs/toolkit"

describe("getLoginUsername.test", () => {
  test("should return string", () => {
    const state: DeepPartial<StateSchema> = {
      // @ts-expect-error TODO Убрать порнографию
      loginForm: { username: "nikomuNeGovori" },
    }
    expect(getLoginUsername(state as StateSchema)).toEqual("nikomuNeGovori")
  })
  test("should return empty string", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual("")
  })
})
