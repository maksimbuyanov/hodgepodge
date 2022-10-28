import { createAsyncThunk } from "@reduxjs/toolkit"
import { asyncThunkProp } from "@/app/providers/StoreProvider"
import { Profile } from "../../types/profile"
import { getProfileForm } from "../../selectors/getProfileForm/getProfileForm"

export const updateProfileData = createAsyncThunk<
  Profile,
  undefined, // TODO на тип never ругается слайс builder
  asyncThunkProp<string>
>("profile/updateProfileData", async (data, thunkAPI) => {
  const { rejectWithValue, extra, getState } = thunkAPI
  const formData = getProfileForm(getState())
  try {
    const response = extra.api.put<Profile>("/profile", formData)
    return (await response).data
  } catch (e) {
    console.log(e)
    return rejectWithValue("error profile")
  }
})
