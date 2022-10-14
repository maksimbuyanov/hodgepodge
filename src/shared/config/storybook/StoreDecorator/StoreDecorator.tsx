import { Story } from "@storybook/react"
import { ReactElement } from "react"
import { StoreProvider, StateSchema } from "@/app/providers/StoreProvider"
import { DeepPartial } from "@reduxjs/toolkit"

export const StoreDecorator =
  (state: DeepPartial<StateSchema>) =>
  // eslint-disable-next-line react/display-name
  (StoryComponent: Story): ReactElement => {
    return (
      <StoreProvider initialState={state as StateSchema}>
        <StoryComponent />
      </StoreProvider>
    )
  }
