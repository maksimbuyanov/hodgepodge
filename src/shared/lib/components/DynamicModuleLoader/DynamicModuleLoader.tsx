import { FC, useEffect } from "react"
import { useDispatch, useStore } from "react-redux"
import {
  ReduxStoreWithManager,
  StateSchemaKey,
} from "@/app/providers/StoreProvider"
import { Reducer } from "@reduxjs/toolkit"

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer
}

type ReducersListEntry = [StateSchemaKey, Reducer]

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = props => {
  const { children, reducers, removeAfterUnmount } = props
  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager
  useEffect(() => {
    Object.entries(reducers).forEach((ar: ReducersListEntry) => {
      const [name, value] = ar
      store.reducerManager.add(name, value)
      // TODO убрать в конце 5 модуля
      // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
      dispatch({ type: `@INIT ${name}` })
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key]: ReducersListEntry) => {
          // TODO убрать в конце 5 модуля
          // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
          dispatch({ type: `@DESTROY ${key}` })
          store.reducerManager.remove(key)
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <>{children}</>
}
