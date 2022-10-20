import { Story } from "@storybook/react"
import { ReactElement } from "react"
import { StoreProvider, StateSchema } from "@/app/providers/StoreProvider"
import { DeepPartial, ReducersMapObject } from "@reduxjs/toolkit"
import { loginReducer } from "@/features/AuthByUsername"
import { profileReducer } from "@/entities/Profile"

const defaultAsyncReducers: DeepPartial<ReducersMapObject<StateSchema>> = {
  loginForm: loginReducer,
  profile: profileReducer,
}

export const StoreDecorator =
  (
    state: DeepPartial<StateSchema>,
    asyncReducers?: DeepPartial<ReducersMapObject<StateSchema>>
  ) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: Story): ReactElement => {
    return (
      <StoreProvider
        initialState={state as StateSchema}
        asyncReducers={{ ...defaultAsyncReducers, ...asyncReducers }}
      >
        <StoryComponent />
      </StoreProvider>
    )
  }
