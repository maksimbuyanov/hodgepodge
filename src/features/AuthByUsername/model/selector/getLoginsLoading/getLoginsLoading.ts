import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema"

export const getLoginsLoading = (state: StateSchema) => {
  return state?.loginForm?.isLoading ?? false
}
