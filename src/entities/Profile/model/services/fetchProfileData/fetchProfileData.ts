import { createAsyncThunk } from "@reduxjs/toolkit"
import { asyncThunkProp } from "@/app/providers/StoreProvider"
import { Profile } from "@/entities/Profile"

// export interface fetchProfileDataProps {}

export const fetchProfileData = createAsyncThunk<
  Profile,
  undefined, // TODO пробно указал, проверить
  asyncThunkProp<string>
>("profile/fetchProfileData", async (data, thunkAPI) => {
  const { rejectWithValue, extra } = thunkAPI
  try {
    const response = extra.api.get<Profile>("/profile")
    if (!(await response).data) {
      throw new Error() // нужно только для отработки тестов
    }
    return (await response).data
  } catch (e) {
    console.log(e)
    return rejectWithValue("error profile")
  }
})
