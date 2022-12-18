import { updateProfileData } from "./updateProfileData"
import { TestAsyncThunk } from "@/shared/lib/TestAsyncThunk/TestAsyncThunk"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"
import { Profile } from "@/entities/Profile"
import { ValidateProfileError } from "@/features/EditableProfileCard/model/types/EditableProfileCardSchema"

describe("updateProfileData.test", () => {
  const profileValue: Profile = {
    city: "Tar-tarary",
    age: 100,
    username: "TwitterChief",
    lastname: "Mask",
    first: "Ilon",
    country: Country.AZ,
    currency: Currency.EUR,
    id: "1",
  }
  test("success with class", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: profileValue },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileValue }))
    const result = await thunk.callThunk("1")
    expect(thunk.api.put).toHaveBeenCalled()
    expect(result.meta.requestStatus).toBe("fulfilled")
    expect(result.payload).toEqual(profileValue)
  })

  test("validate error", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: { ...profileValue, username: undefined } },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ data: profileValue }))
    const result = await thunk.callThunk("1")
    expect(result.meta.requestStatus).toBe("rejected")
    expect(result.payload).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })

  test("error with class", async () => {
    const thunk = new TestAsyncThunk(updateProfileData, {
      profile: { form: profileValue },
    })
    thunk.api.put.mockReturnValue(Promise.resolve({ status: 403 }))
    const result = await thunk.callThunk("1")
    expect(result.meta.requestStatus).toBe("rejected")
    expect(result.payload).toEqual([ValidateProfileError.SERVER_ERROR])
  })
})
