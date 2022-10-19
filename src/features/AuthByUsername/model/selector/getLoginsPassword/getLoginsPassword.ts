import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema"

export const getLoginsPassword = (state: StateSchema) => {
  return state?.loginForm?.password ?? ""
}
