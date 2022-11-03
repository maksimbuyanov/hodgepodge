import { StateSchema } from "@/app/providers/StoreProvider"
import { getLoginUsername } from "./getLoginUsername"

describe("getLoginUsername.test", () => {
  test("should return string", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { username: "nikomuNeGovori" },
    }
    expect(getLoginUsername(state as StateSchema)).toEqual("nikomuNeGovori")
  })
  test("should return empty string", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginUsername(state as StateSchema)).toEqual("")
  })
})
