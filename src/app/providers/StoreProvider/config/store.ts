import {
  CombinedState,
  configureStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit"
import { StateSchema, ThunkExtraArh } from "./StateSchema"
import { userReducer } from "@/entities/User"
import { reducerManager } from "./reducerManager"
import { $api } from "@/shared/api/api"
import { scrollSaveReducer } from "@/features/ScrollSave"
import { rtkApi } from "@/shared/api/rtkApi"

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore(
  initialState?: StateSchema,
  asyncReducers?: ReducersMapObject<StateSchema>
) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    ...asyncReducers,
    user: userReducer,
    scrollSave: scrollSaveReducer,
    [rtkApi.reducerPath]: rtkApi.reducer,
  }

  const manager = reducerManager(rootReducers)

  const extraArg: ThunkExtraArh = {
    api: $api,
  }

  const store = configureStore({
    reducer: manager.reduce as Reducer<CombinedState<StateSchema>>,
    devTools: __IS_DEV__,
    preloadedState: initialState,
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
        thunk: {
          extraArgument: extraArg,
        },
      }).concat(rtkApi.middleware),
  })

  // @ts-expect-error
  store.reducerManager = manager

  return store
}

export type AppDispatch = ReturnType<typeof createReduxStore>["dispatch"]
