import { FC, useEffect } from "react"
import { useDispatch, useStore } from "react-redux"
import {
  ReduxStoreWithManager,
  StateSchema,
  StateSchemaKey,
} from "@/app/providers/StoreProvider"
import { Reducer } from "@reduxjs/toolkit"

export type ReducersList = {
  [name in StateSchemaKey]?: Reducer<NonNullable<StateSchema[name]>>
}

interface DynamicModuleLoaderProps {
  reducers: ReducersList
  removeAfterUnmount?: boolean
}

export const DynamicModuleLoader: FC<DynamicModuleLoaderProps> = props => {
  const { children, reducers, removeAfterUnmount = true } = props
  const dispatch = useDispatch()
  const store = useStore() as ReduxStoreWithManager
  useEffect(() => {
    const reducersMap = store.reducerManager.getReducerMap()
    Object.entries(reducers).forEach(([name, value]) => {
      const mounted = reducersMap[name as StateSchemaKey]
      if (mounted === undefined) {
        store.reducerManager.add(name as StateSchemaKey, value)
        dispatch({ type: `@INIT ${name}` })
      }
    })

    return () => {
      if (removeAfterUnmount) {
        Object.entries(reducers).forEach(([key]) => {
          dispatch({ type: `@DESTROY ${key}` })
          store.reducerManager.remove(key as StateSchemaKey)
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])
  return <>{children}</>
}
