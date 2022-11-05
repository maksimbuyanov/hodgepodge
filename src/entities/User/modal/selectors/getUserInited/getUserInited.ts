import { StateSchema } from "@/app/providers/StoreProvider"

export const getUserInited = (state: StateSchema): Boolean => {
  return state.user._inited
}
