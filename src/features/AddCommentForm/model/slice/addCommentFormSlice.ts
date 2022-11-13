import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { AddCommentFormSchema } from "../types/addCommentForm"

const initialState: AddCommentFormSchema = {
  text: "",
}

export const addCommentFormSlice = createSlice({
  name: "addCommentForm",
  initialState,
  reducers: {
    setText: (state, action: PayloadAction<string>) => {
      state.text = action.payload
    },
  },
  // extraReducers: builder => {
  //   builder.addCase(sendComment.pending, (state, ___action) => {
  //     state.error = ""
  //     state.isLoading = true
  //   })
  //   builder.addCase(sendComment.fulfilled, (state, ___action) => {
  //     state.isLoading = false
  //     state.text = ""
  //   })
  //   builder.addCase(sendComment.rejected, (state, action) => {
  //     state.isLoading = false
  //     state.error = action.payload
  //   })
  // },
})

export const {
  actions: addCommentFormActions,
  reducer: addCommentFormReducer,
} = addCommentFormSlice
