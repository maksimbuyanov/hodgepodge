import { editableProfileActions, editableProfileReducer } from "./slice"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"
import { Profile } from "@/entities/Profile"
import {
  EditableProfileCardSchema,
  ValidateProfileError,
} from "../types/EditableProfileCardSchema"
import { updateProfileData } from "../services/updateProfileData/updateProfileData"

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
    const state: DeepPartial<EditableProfileCardSchema> = {
      readonly: true,
      isLoading: false,
    }
    expect(
      editableProfileReducer(
        state as EditableProfileCardSchema,
        editableProfileActions.setReadOnly(false)
      )
    ).toEqual({ readonly: false, isLoading: false })
  })
  test("test cancel Edit", () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      readonly: false,
      isLoading: false,
      form: {},
      data: { username: "krya-krya" },
      validateErrors: [],
    }
    expect(
      editableProfileReducer(
        state as EditableProfileCardSchema,
        editableProfileActions.cancelEdit()
      )
    ).toEqual({
      readonly: true,
      isLoading: false,
      form: { username: "krya-krya" },
      data: { username: "krya-krya" },
      validateErrors: undefined,
    })
  })
  test("test updateProfile", () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      form: { username: "valet" },
    }
    expect(
      editableProfileReducer(
        state as EditableProfileCardSchema,
        editableProfileActions.updateProfile({ username: "koroly" })
      )
    ).toEqual({ form: { username: "koroly" } })
    expect(
      editableProfileReducer(
        state as EditableProfileCardSchema,
        editableProfileActions.updateProfile({ age: 2 })
      )
    ).toEqual({ form: { username: "valet", age: 2 } })
  })
  test("test update profile data pending", () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      isLoading: false,
      validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
    }
    expect(
      editableProfileReducer(
        state as EditableProfileCardSchema,
        updateProfileData.pending
      )
    ).toEqual({ isLoading: true, error: "", validateErrors: undefined })
  })
  test("test update profile data fulfilled", () => {
    const state: DeepPartial<EditableProfileCardSchema> = {
      isLoading: true,
      validateErrors: [ValidateProfileError.INCORRECT_USER_DATA],
      readonly: false,
    }
    expect(
      editableProfileReducer(
        state as EditableProfileCardSchema,
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
