import { ArticleDetailsSchema } from "@/entities/Article/model/types/ArticleDetailsSchema"
import { createSlice, PayloadAction } from "@reduxjs/toolkit"

const initialState: ArticleDetailsSchema = {
  isLoading: false,
}

export const articleDetailsSlice = createSlice({
  name: "articleDetails",
  initialState,
  reducers: {
    setReadOnly: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    },

    // extraReducers: builder => {
    //   builder.addCase(fetchProfileData.pending, (state, ___action) => {
    //     state.error = ""
    //     state.isLoading = true
    //   })
    //   builder.addCase(
    //     fetchProfileData.fulfilled,
    //     (state, action: PayloadAction<Profile>) => {
    //       state.isLoading = false
    //       state.data = action.payload
    //       state.form = action.payload
    //     }
    //   )
    //   builder.addCase(fetchProfileData.rejected, (state, action) => {
    //     state.isLoading = false
    //     state.error = action.payload
    //   })
    // },
  },
})

export const {
  actions: articleDetailsActions,
  reducer: articleDetailsReducer,
} = articleDetailsSlice
