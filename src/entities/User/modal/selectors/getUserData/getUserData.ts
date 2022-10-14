import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema"
import { User } from "@/entities/User"

export const getUserData = (state: StateSchema): User | undefined => {
  return state.user.authData
}
