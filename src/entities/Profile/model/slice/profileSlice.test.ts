import { Profile, ProfileSchema, ValidateProfileError } from "../types/profile"
import { profileActions, profileReducer } from "./slice"
import { updateProfileData } from "@/entities/Profile"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"

describe("profileSlice.test", () => {
  const profileValue: Profile = {
    city: "Tar-tarary",
    age: 100,
    username: "TwitterChief",
    lastname: "Mask",
    first: "Ilon",
    country: Country.AZ,
    currency: Currency.EUR,
  }
  test("test toggle readonly", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: true,
      isLoading: false,
    }
    expect(
      profileReducer(state as ProfileSchema, profileActions.setReadOnly(false))
    ).toEqual({ readonly: false, isLoading: false })
  })
  test("test cancel Edit", () => {
    const state: DeepPartial<ProfileSchema> = {
      readonly: false,
      isLoading: false,
      form: {},
      data: { username: "krya-krya" },
      validateErrors: [],
    }
    expect(
      profileReducer(state as ProfileSchema, profileActions.cancelEdit())
    ).toEqual({
      readonly: true,
      isLoading: false,
      form: { username: "krya-krya" },
      data: { username: "krya-krya" },
      validateErrors: undefined,
    })
  })
  test("test updateProfile", () => {
    const state: DeepPartial<ProfileSchema> = {
      form: { username: "valet" },
    }
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ username: "koroly" })
      )
    ).toEqual({ form: { username: "koroly" } })
    expect(
      profileReducer(
        state as ProfileSchema,
        profileActions.updateProfile({ age: 2 })
      )
    ).toEqual({ form: { username: "valet", age: 2 } })
  })
  test("test update profile data pending", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
    }
    expect(
      profileReducer(state as ProfileSchema, updateProfileData.pending)
    ).toEqual({ isLoading: true, error: "", validateErrors: undefined })
  })
  test("test update profile data fulfilled", () => {
    const state: DeepPartial<ProfileSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
      readonly: false,
    }
    expect(
      profileReducer(
        state as ProfileSchema,
        // @ts-expect-error
        updateProfileData.fulfilled(profileValue)
      )
    ).toEqual({
      isLoading: false,
      validateErrors: undefined,
      readonly: true,
      data: profileValue,
      form: profileValue,
    })
  })
})

// TODO написать rtl тесты на форму
