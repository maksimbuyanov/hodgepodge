import { StateSchema } from "@/app/providers/StoreProvider"
import { getProfileForm } from "./getProfileForm"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"

describe("getProfileForm.test", () => {
  const data = {
    city: "Tar-tarary",
    age: 100,
    username: "TwitterChief",
    lastname: "Mask",
    first: "Ilon",
    country: Country.AZ,
    currency: Currency.EUR,
  }
  test("return form data", () => {
    const state: DeepPartial<StateSchema> = { profile: { form: data } }
    expect(getProfileForm(state as StateSchema)).toEqual(data)
  })
  test("return undefined", () => {
    const state: DeepPartial<StateSchema> = { profile: {} }
    const emptyState: DeepPartial<StateSchema> = {}
    expect(getProfileForm(state as StateSchema)).toBeUndefined()
    expect(getProfileForm(emptyState as StateSchema)).toBeUndefined()
  })
})
