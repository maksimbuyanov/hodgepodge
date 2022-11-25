import { StateSchema } from "@/app/providers/StoreProvider"
import { createSelector } from "@reduxjs/toolkit"

export const getScrollPosition = (state: StateSchema) => state.scrollSave.scroll
export const getScrollPositionByPass = createSelector(
  getScrollPosition,
  (state: StateSchema, path: string) => path,
  (scroll, path: string) => {
    return scroll[path] ?? 0
  }
)
