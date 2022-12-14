import { StateSchema } from "@/app/providers/StoreProvider"
import { AsyncThunkAction } from "@reduxjs/toolkit"
import axios, { AxiosStatic } from "axios"
import {
  AsyncThunkFulfilledActionCreator,
  AsyncThunkRejectedActionCreator,
} from "@reduxjs/toolkit/src/createAsyncThunk"

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

type Result<Return, Arg, ThunkApiConfig> = Promise<
  | ReturnType<AsyncThunkFulfilledActionCreator<Return, Arg>>
  | ReturnType<AsyncThunkRejectedActionCreator<Arg, ThunkApiConfig>>
> & {
  abort: (reason?: string) => void
  requestId: string
  arg: Arg
  unwrap: () => Promise<Return>
}

jest.mock("axios")
const mockedAxios = jest.mocked(axios, true)

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>
  api: jest.MockedFunctionDeep<AxiosStatic>

  constructor(
    actionCreator: ActionCreatorType<Return, Arg, RejectedValue>,
    state?: DeepPartial<StateSchema>
  ) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn(() => state as StateSchema)
    this.api = mockedAxios
  }

  callThunk(arg: Arg): Result<Return, Arg, { rejectValue: RejectedValue }> {
    const action = this.actionCreator(arg)
    return action(this.dispatch, this.getState, {
      api: this.api,
    })
  }
}
