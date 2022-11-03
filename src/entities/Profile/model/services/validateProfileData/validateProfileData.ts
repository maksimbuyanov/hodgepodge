import { Profile, ValidateProfileError } from "../../types/profile"

export const validateProfileData = (profile: Profile | undefined) => {
  if (!profile) {
    return [ValidateProfileError.NO_DATA]
  }
  const { first, lastname, age, username, city } = profile
  const errors: ValidateProfileError[] = []
  if (!first || !lastname || !username) {
    errors.push(ValidateProfileError.INCORRECT_USER_DATA)
  }
  if (!age || !Number.isInteger(age) || age < 0) {
    errors.push(ValidateProfileError.INCORRECT_AGE)
  }
  if (!city) {
    errors.push(ValidateProfileError.INCORRECT_CITY)
  }
  return errors
}
