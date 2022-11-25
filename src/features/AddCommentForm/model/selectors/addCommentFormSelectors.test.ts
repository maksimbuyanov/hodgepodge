import {
  getAddCommentFormText,
  getAddCommentFormError,
} from "./addCommentFormSelectors"
import { StateSchema } from "@/app/providers/StoreProvider"

describe("addCommentFormSelectors.test", () => {
  test("return text", () => {
    const state: DeepPartial<StateSchema> = { addCommentForm: { text: "123" } }
    const result = getAddCommentFormText(state as StateSchema)
    expect(result).toEqual("123")
  })

  test("return error text", () => {
    const state: DeepPartial<StateSchema> = { addCommentForm: { error: "123" } }
    const result = getAddCommentFormError(state as StateSchema)
    expect(result).toEqual("123")
  })
})
