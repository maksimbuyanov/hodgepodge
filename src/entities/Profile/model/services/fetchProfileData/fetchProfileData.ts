import { createAsyncThunk } from "@reduxjs/toolkit"
import { User, userActions } from "@/entities/User"
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage"
import { RoutePath } from "@/shared/config"
import { asyncThunkProp } from "@/app/providers/StoreProvider"
import { Profile } from "@/entities/Profile"

// export interface fetchProfileDataProps {}

export const fetchProfileData = createAsyncThunk<
  Profile,
  // fetchProfileDataProps,
  void,
  asyncThunkProp<string>
>("profile/fetchProfileData", async (data, thunkAPI) => {
  const { rejectWithValue, dispatch, extra } = thunkAPI
  try {
    const responce = extra.api.get<Profile>("/profile")
    return (await responce).data
  } catch (e) {
    console.log(e)
    return rejectWithValue("error profile")
  }
})
