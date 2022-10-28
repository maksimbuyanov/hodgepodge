import { createAsyncThunk } from "@reduxjs/toolkit"
import { User, userActions } from "@/entities/User"
import { USER_LOCALSTORAGE_KEY } from "@/shared/const/localStorage"
import { asyncThunkProp } from "@/app/providers/StoreProvider"
import { RoutePath } from "@/shared/config"

export interface loginByUsernameProps {
  username: string
  password: string
}

export const loginByUsername = createAsyncThunk<
  User,
  loginByUsernameProps,
  asyncThunkProp<string>
>("login/loginByUsername", async ({ username, password }, thunkAPI) => {
  const { rejectWithValue, dispatch, extra } = thunkAPI
  try {
    const response = await extra.api.post<User>(`login`, {
      username,
      password,
    })
    if (!response.data) {
      throw new Error()
    }
    localStorage.setItem(USER_LOCALSTORAGE_KEY, JSON.stringify(response.data))
    dispatch(userActions.auth(response.data))
    extra.navigate?.(RoutePath.about)

    return response.data
  } catch (e) {
    console.log(e)
    return rejectWithValue("error")
  }
})
