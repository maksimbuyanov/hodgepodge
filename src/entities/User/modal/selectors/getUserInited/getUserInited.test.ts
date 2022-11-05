import { StateSchema } from "@/app/providers/StoreProvider"
import { getUserInited } from "./getUserInited"

describe("getUserInited.test", () => {
  test("return data", () => {
    const state: DeepPartial<StateSchema> = { user: { _inited: false } } // подставить тестируемый стейт
    expect(getUserInited(state as StateSchema)).toEqual(false) // подставить тестируемый стейт
  })
})
