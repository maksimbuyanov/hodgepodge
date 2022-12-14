import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoginSchema } from "../types/loginSchema"
import { loginByUsername } from "../../model/services/loginByUsername/loginByUsername"

const initialState: LoginSchema = {
  isLoading: false,
  password: "",
  username: "",
}

export const loginSlice = createSlice({
  name: "loginSlice",
  initialState,
  reducers: {
    setUsername: (state, action: PayloadAction<string>) => {
      state.username = action.payload
    },
    setPassword: (state, action: PayloadAction<string>) => {
      state.password = action.payload
    },
  },
  extraReducers: builder => {
    builder.addCase(loginByUsername.pending, (state, ___action) => {
      state.error = ""
      state.isLoading = true
    })
    builder.addCase(loginByUsername.fulfilled, (state, ___action) => {
      state.isLoading = false
      state.password = ""
      state.username = ""
    })
    builder.addCase(loginByUsername.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
