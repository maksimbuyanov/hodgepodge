import {
  AnyAction,
  configureStore,
  EnhancedStore,
  ReducersMapObject,
  Middleware,
} from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { userReducer } from "@/entities/User"
import { reducerManager } from "./reducerManager"

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
): EnhancedStore<StateSchema> {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  }

  const manager = reducerManager(rootReducers)

  const store = configureStore<StateSchema>({
    reducer: manager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })

  // @ts-expect-error
  store.reducerManager = manager

  return store
}

export type AppDispatch = EnhancedStore<
  StateSchema,
  AnyAction,
  ReadonlyArray<Middleware<{}, StateSchema>>
>["dispatch"]
