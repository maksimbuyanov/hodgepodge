import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { Profile, ProfileSchema } from "../types/profile"
import { fetchProfileData } from "@/entities/Profile"

const initialState: ProfileSchema = {
  readonly: true,
  isLoading: false,
  error: "",
}

export const profileSlice = createSlice({
  name: "profile",
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    cancelEdit: (state, action: PayloadAction) => {
      state.readonly = true
      state.form = state.data
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.data = { ...state.form, ...action.payload }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchProfileData.pending, (state, ___action) => {
      state.error = ""
      state.isLoading = true
    })
    builder.addCase(
      fetchProfileData.fulfilled,
      (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
      }
    )
    builder.addCase(fetchProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.error = action.payload
    })
  },
})

export const { actions: profileActions, reducer: profileReducer } = profileSlice
