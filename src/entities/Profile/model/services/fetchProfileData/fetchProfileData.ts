import { createAsyncThunk } from "@reduxjs/toolkit"
import { asyncThunkProp } from "@/app/providers/StoreProvider"
import { Profile } from "../../types/profile"

// export interface fetchProfileDataProps {}

export const fetchProfileData = createAsyncThunk<
  Profile,
  string,
  asyncThunkProp<string>
>("profile/fetchProfileData", async (profileId, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI
  try {
    const response = extra.api.get<Profile>("/profile/" + profileId)
    if (!(await response).data) {
      throw new Error() // нужно только для отработки тестов
    }
    return (await response).data
  } catch (e) {
    console.log(e)
    return rejectWithValue("error profile")
  }
})
