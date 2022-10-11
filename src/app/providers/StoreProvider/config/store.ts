import { configureStore, ReducersMapObject } from "@reduxjs/toolkit"
import { StateSchema } from "@/app/providers/StoreProvider/config/StateSchema"
import { userReducer } from "@/entities/User"

// TODO подаставить тип функции стора
// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
export function createReduxStore(initialState?: StateSchema) {
  const rootReducers: ReducersMapObject<StateSchema> = {
    user: userReducer,
  }

  return configureStore<StateSchema>({
    reducer: rootReducers,
    devTools: __IS_DEV__,
    preloadedState: initialState,
  })
}
