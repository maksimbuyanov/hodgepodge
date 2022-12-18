import { validateProfileData } from "./validateProfileData"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"
import { Profile } from "@/entities/Profile"
import { ValidateProfileError } from "@/features/EditableProfileCard/model/types/EditableProfileCardSchema"

describe("validateProfileData.test", () => {
  const profileValue: Profile = {
    city: "Tar-tarary",
    age: 100,
    username: "TwitterChief",
    lastname: "Mask",
    first: "Ilon",
    country: Country.AZ,
    currency: Currency.EUR,
  }
  test("test empty profile", () => {
    const result = validateProfileData(undefined)
    expect(result).toEqual([ValidateProfileError.NO_DATA])
  })
  test("test normal profile", () => {
    const result = validateProfileData(profileValue)
    expect(result).toEqual([])
  })
  test("test profile without name", () => {
    const result = validateProfileData({ ...profileValue, first: "" })
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
  test("test profile without lastname", () => {
    const result = validateProfileData({ ...profileValue, lastname: "" })
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
  test("test profile without username", () => {
    const result = validateProfileData({ ...profileValue, username: "" })
    expect(result).toEqual([ValidateProfileError.INCORRECT_USER_DATA])
  })
  test("test profile without age", () => {
    const result = validateProfileData({ ...profileValue, age: undefined })
    expect(result).toEqual([ValidateProfileError.INCORRECT_AGE])
  })
  test("test profile without city", () => {
    const result = validateProfileData({ ...profileValue, city: undefined })
    expect(result).toEqual([ValidateProfileError.INCORRECT_CITY])
  })
  test("test profile without age and city", () => {
    const result = validateProfileData({
      ...profileValue,
      city: undefined,
      age: undefined,
    })
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
    ])
  })
  test("test profile without age and city and username", () => {
    const result = validateProfileData({
      ...profileValue,
      city: undefined,
      age: undefined,
      username: undefined,
    })
    expect(result).toEqual([
      ValidateProfileError.INCORRECT_USER_DATA,
      ValidateProfileError.INCORRECT_AGE,
      ValidateProfileError.INCORRECT_CITY,
    ])
  })
})
