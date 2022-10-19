import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema"

export const getLoginsError = (state: StateSchema) => {
  return state?.loginForm?.error ?? ""
}
