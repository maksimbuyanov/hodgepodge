import { FC, useMemo } from "react"
import { Provider } from "react-redux"
import { createReduxStore } from "../config/store"
import { StateSchema } from "../config/StateSchema"
import { ReducersMapObject } from "@reduxjs/toolkit"
import { useNavigate } from "react-router-dom"

interface StoreProviderProps {
  initialState?: DeepPartial<StateSchema>
  asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
}

export const StoreProvider: FC<StoreProviderProps> = props => {
  const { children, initialState, asyncReducers } = props

  const navigate = useNavigate()
  const store = useMemo(() => {
    return createReduxStore(
      initialState as StateSchema,
      asyncReducers as ReducersMapObject<StateSchema>,
      navigate
    )
  }, [asyncReducers, initialState, navigate])

  return <Provider store={store}>{children}</Provider>
}
