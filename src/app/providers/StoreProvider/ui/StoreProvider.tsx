import { FC } from "react"
import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema"

interface StoreProviderProps {
  initialState?: StateSchema
}

// TODO подставить тип для функции стора
export const StoreProvider: FC<StoreProviderProps> = props => {
  const { children, initialState } = props
  const store = createReduxStore(initialState)

  // @ts-expect-error
  return <Provider store={store}>{children}</Provider>
}
