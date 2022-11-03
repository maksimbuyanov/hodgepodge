import { StateSchema } from "@/app/providers/StoreProvider"
import { getLoginsPassword } from "./getLoginsPassword"

describe("getLoginsPassword.test", () => {
  test("should return string", () => {
    const state: DeepPartial<StateSchema> = {
      loginForm: { password: "nikomuNeGovori" },
    }
    expect(getLoginsPassword(state as StateSchema)).toEqual("nikomuNeGovori")
  })
  test("should return empty string", () => {
    const state: DeepPartial<StateSchema> = {}
    expect(getLoginsPassword(state as StateSchema)).toEqual("")
  })
})
