import { Story } from "@storybook/react"
import { ReactElement } from "react"
import { MemoryRouter } from "react-router-dom"

export const RouterDecoratorWithPath =
  (route: string) =>
  // TODO
  // eslint-disable-next-line react/display-name
  (StoryComponent: Story): ReactElement => {
    return (
      <MemoryRouter initialEntries={[route]}>
        <StoryComponent />
      </MemoryRouter>
    )
  }
