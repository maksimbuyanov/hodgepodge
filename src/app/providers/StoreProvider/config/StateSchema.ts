import { UserSchema } from "@/entities/User"
import { LoginSchema } from "@/features/AuthByUsername"
import {
  AnyAction,
  CombinedState,
  EnhancedStore,
  Reducer,
  ReducersMapObject,
} from "@reduxjs/toolkit"
import { ProfileSchema } from "@/entities/Profile"
import { AxiosInstance } from "axios"
import { NavigateFunction } from "react-router-dom"
import { ArticleDetailsSchema } from "@/entities/Article"

export interface StateSchema {
  user: UserSchema

  // async
  loginForm?: LoginSchema
  profile?: ProfileSchema
  articleDetails?: ArticleDetailsSchema
}

export type StateSchemaKey = keyof StateSchema

export interface ReducerManager {
  getReducerMap: () => ReducersMapObject<StateSchema>
  reduce: (state: StateSchema, action: AnyAction) => CombinedState<StateSchema>
  add: (key: StateSchemaKey, reducer: Reducer) => void
  remove: (key: StateSchemaKey) => void
}
export interface ReduxStoreWithManager extends EnhancedStore<StateSchema> {
  reducerManager: ReducerManager
}

export interface asyncThunkProp<T> {
  rejectValue: T
  extra: ThunkExtraArh
  state: StateSchema
}

export interface ThunkExtraArh {
  api: AxiosInstance
  navigate?: NavigateFunction
}
