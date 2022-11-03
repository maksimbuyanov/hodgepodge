import { StateSchema } from "@/app/providers/StoreProvider"
import { getProfileData } from "./getProfileData"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"

describe("getProfileData.test", () => {
  test("return data", () => {
    const data = {
      city: "Tar-tarary",
      age: 100,
      username: "TwitterChief",
      lastname: "Mask",
      first: "Ilon",
      country: Country.AZ,
      currency: Currency.EUR,
    }

    const state: DeepPartial<StateSchema> = { profile: { data } }
    expect(getProfileData(state as StateSchema)).toEqual(data)
  })
  test("return undefined", () => {
    const state: DeepPartial<StateSchema> = { profile: {} }
    const emptyState: DeepPartial<StateSchema> = {}
    expect(getProfileData(state as StateSchema)).toBeUndefined()
    expect(getProfileData(emptyState as StateSchema)).toBeUndefined()
  })
})
