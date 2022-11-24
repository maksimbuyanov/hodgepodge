import {
  getArticleCommentsError,
  getArticleCommentsIsLoading,
} from "./comments"
import { StateSchema } from "@/app/providers/StoreProvider"

describe("comments.test", () => {
  test("return error string", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: { comments: { error: "error" } },
    }
    const result = getArticleCommentsError(state as StateSchema)
    expect(result).toEqual("error")
  })
  test("return isLoading bool", () => {
    const state: DeepPartial<StateSchema> = {
      articleDetailsPage: { comments: { isLoading: true } },
    }
    const result = getArticleCommentsIsLoading(state as StateSchema)
    expect(result).toEqual(true)
  })
})
