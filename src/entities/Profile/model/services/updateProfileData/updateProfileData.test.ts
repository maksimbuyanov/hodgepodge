import { updateProfileData } from "./updateProfileData"
import { TestAsyncThunk } from "@/shared/lib/TestAsyncThunk/TestAsyncThunk"
import { Profile, ValidateProfileError } from "../../types/profile"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"

describe("updateProfileData.test", () => {
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
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: profileValue },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileValue }))
    const result = await thunk.callThunk(undefined)
    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("fulfilled")
    expect(result.payload).toEqual(profileValue)
  })

  test("validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...profileValue, username: undefined } },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileValue }))
    const result = await thunk.callThunk(undefined)
    expect(result.meta.requestStatus).toBe("rejected")
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })

  test("error with class", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: profileValue },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk(undefined)
    expect(result.meta.requestStatus).toBe("rejected")
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })
})
