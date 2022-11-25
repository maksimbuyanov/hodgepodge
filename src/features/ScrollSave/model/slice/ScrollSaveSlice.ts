import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { ScrollSaveSchema } from "../types/scrolSaveSchema"

const initialState: ScrollSaveSchema = {
  scroll: {},
}

export const scrollSave = createSlice({
  name: "scrollSave",
  initialState,
  reducers: {
    setScrollPosition: (
      state,
      action: PayloadAction<{ path: string; position: number }>
    ) => {
      const { path, position } = action.payload
      state.scroll[path] = position
    },
  },
})

export const { actions: scrollSaveActions, reducer: scrollSaveReducer } =
  scrollSave
