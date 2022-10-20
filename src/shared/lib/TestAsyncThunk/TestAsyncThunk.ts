import { StateSchema } from "@/app/providers/StoreProvider"
import { AsyncThunkAction } from "@reduxjs/toolkit"

type ActionCreatorType<Return, Arg, RejectedValue> = (
  arg: Arg
) => AsyncThunkAction<Return, Arg, { rejectValue: RejectedValue }>

export class TestAsyncThunk<Return, Arg, RejectedValue> {
  dispatch: jest.MockedFn<any>
  getState: () => StateSchema
  actionCreator: ActionCreatorType<Return, Arg, RejectedValue>

  constructor(actionCreator: ActionCreatorType<Return, Arg, RejectedValue>) {
    this.actionCreator = actionCreator
    this.dispatch = jest.fn()
    this.getState = jest.fn()
  }

  // TODO разобраться с типами
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  async callThunk(arg: Arg) {
    const action = this.actionCreator(arg)
    return await action(this.dispatch, this.getState, undefined)
  }
}
