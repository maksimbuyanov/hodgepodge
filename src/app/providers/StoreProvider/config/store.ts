import {
  AnyAction,
  configureStore,
  EnhancedStore,
  Middleware,
  ReducersMapObject,
} from "@reduxjs/toolkit"
import { StateSchema } from "./StateSchema"
import { userReducer } from "@/entities/User"
import { reducerManager } from "./reducerManager"
import { $api } from "@/shared/api/api"
import { NavigateFunction } from "react-router-dom"

export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>,
  navigate?: NavigateFunction
): EnhancedStore<StateSchema> {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
  }

  const manager = reducerManager(rootReducers)

  const store = configureStore({
    reducer: manager.reduce,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: {
            api: $api,
            navigate,
          },
        },
      }),
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
