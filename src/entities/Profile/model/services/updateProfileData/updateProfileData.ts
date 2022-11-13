import { createAsyncThunk } from "@reduxjs/toolkit"
import { asyncThunkProp } from "@/app/providers/StoreProvider"
import { Profile, ValidateProfileError } from "../../types/profile"
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm"
import { validateProfileData } from "../validateProfileData/validateProfileData"

export const updateProfileData = createAsyncThunk<
  Profile,
  string,
  asyncThunkProp<ValidateProfileError[]>
>("profile/updateProfileData", async (profileId, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI
  const formData = getProfileForm(getState())
  const errors = validateProfileData(formData)
  if (errors.length) {
    return rejectWithValue(errors)
  }
  try {
    const response = await extra.api.put<Profile>(
      "/profile/" + profileId,
      formData
    )
    if (!response.data) {
      throw new Error()
    }
    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue([ValidateProfileError.SERVER_ERROR])
  }
})
