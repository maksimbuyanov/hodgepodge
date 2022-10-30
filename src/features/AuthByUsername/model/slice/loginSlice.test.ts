import { LoginSchema } from "../types/loginSchema"
import { loginActions, loginReducer } from "../slice/loginSlice"
import { loginByUsername } from "../services/loginByUsername/loginByUsername"

describe("loginSlice.test", () => {
  test("test set username", () => {
    const state: DeepPartial<LoginSchema> = { username: "123" }

    expect(
      loginReducer(state as LoginSchema, loginActions.setUsername("namename"))
    ).toEqual({ username: "namename" })
  })
  test("test set password", () => {
    const state: DeepPartial<LoginSchema> = { password: "123" }

    expect(
      loginReducer(state as LoginSchema, loginActions.setPassword("namename"))
    ).toEqual({ password: "namename" })
  })

  test("test update isLoading", () => {
    const state: DeepPartial<LoginSchema> = {
      isLoading: false,
      error: "asdasda",
    }

    expect(loginReducer(state as LoginSchema, loginByUsername.pending)).toEqual(
      { isLoading: true, error: "" }
    )
  })

  test("test updateError", () => {
    const state: DeepPartial<LoginSchema> = { error: "" }

    expect(
      loginReducer(state as LoginSchema, loginByUsername.rejected)
    ).toEqual({ error: undefined, isLoading: false }) // TODO определить как передать в данном случае payload
  })
})

// TODO написать rtl тесты на форму
