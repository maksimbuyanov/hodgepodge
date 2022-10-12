import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { LoginSchema } from "../types/loginSchema"
import { loginByUsername } from "@/features/AuthByUsername/model/services/loginByUsername/loginByUsername"

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
    builder.addCase(loginByUsername.pending, (state, action) => {
      state.error = ""
      state.isLoading = true
    })
    builder.addCase(loginByUsername.fulfilled, (state, action) => {
      state.isLoading = false
    })
    builder.addCase(loginByUsername.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: loginActions, reducer: loginReducer } = loginSlice
