import { ReactNode } from "react"
import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema"

interface StoreProviderProps {
  children: ReactNode
  initialState?: StateSchema
}

// TODO подставить тип для функции стора
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export const StoreProvider = (props: StoreProviderProps) => {
  const { children, initialState } = props
  const store = createReduxStore(initialState)
  // @ts-expect-error
  return <Provider store={store}>{children}</Provider>
}
