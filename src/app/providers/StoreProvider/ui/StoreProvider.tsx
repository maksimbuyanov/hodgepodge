import { ReactNode } from "react"
import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema"

interface StoreProviderProps {
  children: ReactNode
  initialState?: StateSchema
}

export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props
  const store = createReduxStore(initialState)
  // @ts-expect-error
  return <Provider store={store}>{children}</Provider>
}
