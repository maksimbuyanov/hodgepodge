import {
  addCommentFormReducer,
  addCommentFormActions,
} from "./addCommentFormSlice"

import { AddCommentFormSchema } from "../types/addCommentForm"

describe("loginSlice.test", () => {
  test("test set username", () => {
    const state: DeepPartial<AddCommentFormSchema> = { text: "123" }

    expect(
      addCommentFormReducer(
        state as AddCommentFormSchema,
        addCommentFormActions.setText("namename")
      )
    ).toEqual({ text: "namename" })
  })
})
