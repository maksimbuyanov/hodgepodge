import { StateSchema } from "@/app/providers/StoreProvider"
import { getProfileForm } from "./getProfileForm"

describe("getProfileForm.test", () => {
  test("return string", () => {
    const state: DeepPartial<StateSchema> = { profile: { error: "error" } }
    expect(getProfileError(state as StateSchema)).toBe("error")
  })
  test("return undefined", () => {
    const state: DeepPartial<StateSchema> = { profile: {} }
    const emptyState: DeepPartial<StateSchema> = {}
    expect(getProfileError(state as StateSchema)).toBeUndefined()
    expect(getProfileError(emptyState as StateSchema)).toBeUndefined()
  })
})
