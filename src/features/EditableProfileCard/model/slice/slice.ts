import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { EditableProfileCardSchema } from "../types/EditableProfileCardSchema"
import { fetchProfileData } from "../services/fetchProfileData/fetchProfileData"
import { updateProfileData } from "../services/updateProfileData/updateProfileData"
import { Profile } from "@/entities/Profile"

const initialState: EditableProfileCardSchema = {
  readonly: true,
  isLoading: false,
  error: "",
}

export const profileSlice = createSlice({
  name: "editableProfileSlice",
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.readonly = action.payload
    },
    cancelEdit: state => {
      state.readonly = true
      state.form = state.data
      state.validateErrors = undefined
    },
    updateProfile: (state, action: PayloadAction<Profile>) => {
      state.form = { ...state.form, ...action.payload }
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
    builder.addCase(updateProfileData.pending, state => {
      state.error = ""
      state.isLoading = true
      state.validateErrors = undefined
    })
    builder.addCase(
      updateProfileData.fulfilled,
      (state, action: PayloadAction<Profile>) => {
        state.isLoading = false
        state.data = action.payload
        state.form = action.payload
        state.readonly = true
        state.validateErrors = undefined
      }
    )
    builder.addCase(updateProfileData.rejected, (state, action) => {
      state.isLoading = false
      state.validateErrors = action.payload
    })
  },
})

export const {
  actions: editableProfileActions,
  reducer: editableProfileReducer,
} = profileSlice
