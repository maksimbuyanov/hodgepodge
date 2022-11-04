import { fetchProfileData } from "./fetchProfileData"
import { TestAsyncThunk } from "@/shared/lib/TestAsyncThunk/TestAsyncThunk"
import { Profile } from "../../types/profile"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"

describe("fetchProfileData", () => {
  const profileValue: Profile = {
    city: "Tar-tarary",
    age: 100,
    username: "TwitterChief",
    lastname: "Mask",
    first: "Ilon",
    country: Country.AZ,
    currency: Currency.EUR,
  }
  test("success with class", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ data: profileValue }))
    const result = await thunk.callThunk(undefined)
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("fulfilled")
    expect(result.payload).toEqual(profileValue)
  })

  test("error with class", async () => {
    const thunk = new TestAsyncThunk(fetchProfileData)
    thunk.api.get.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(undefined)
    expect(thunk.api.get).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("rejected")
    expect(result.payload).toBe("error profile")
  })
})
