import { StateSchema } from "@/app/providers/StoreProvider"
import { getProfileErrors } from "./getProfileErrors"
import { ValidateProfileError } from "../../types/profile"

describe("getProfileErrors.test", () => {
  test("return enum value", () => {
    const state: DeepPartial<StateSchema> = {
      profile: { validateErrors: [ValidateProfileError.SERVER_ERROR] },
    }
    expect(getProfileErrors(state as StateSchema)).toEqual([
      ValidateProfileError.SERVER_ERROR,
    ])
  })
  test("return undefined", () => {
    const state: DeepPartial<StateSchema> = { profile: {} }
    const emptyState: DeepPartial<StateSchema> = {}
    expect(getProfileErrors(state as StateSchema)).toBeUndefined()
    expect(getProfileErrors(emptyState as StateSchema)).toBeUndefined()
  })
})
