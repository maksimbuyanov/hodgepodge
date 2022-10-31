import { StateSchema } from "@/app/providers/StoreProvider"
import { getProfileIsloading } from "./getProfileIsloading"

describe("getProfileIsloading.test", () => {
  test("return bool", () => {
    const state: DeepPartial<StateSchema> = { profile: { isLoading: true } }
    expect(getProfileIsloading(state as StateSchema)).toBe(true)
  })
  test("return undefined", () => {
    const state: DeepPartial<StateSchema> = { profile: {} }
    const emptyState: DeepPartial<StateSchema> = {}
    expect(getProfileIsloading(state as StateSchema)).toBeUndefined()
    expect(getProfileIsloading(emptyState as StateSchema)).toBeUndefined()
  })
})
