import { StateSchema } from "@/app/providers/StoreProvider"
import { getProfileReadOnly } from "./getReadOnly"

describe("getProfileReadOnly.test", () => {
  test("return bool", () => {
    const state: DeepPartial<StateSchema> = { profile: { readonly: true } }
    expect(getProfileReadOnly(state as StateSchema)).toBe(true)
  })
  test("return undefined", () => {
    const state: DeepPartial<StateSchema> = { profile: {} }
    const emptyState: DeepPartial<StateSchema> = {}
    expect(getProfileReadOnly(state as StateSchema)).toBeUndefined()
    expect(getProfileReadOnly(emptyState as StateSchema)).toBeUndefined()
  })
})
