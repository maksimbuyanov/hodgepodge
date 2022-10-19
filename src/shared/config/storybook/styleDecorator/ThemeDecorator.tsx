// import "@/app/styles/index.scss" TODO проверить на что влияет?
import { Story } from "@storybook/react"
import { Theme } from "@/app/providers/ThemeProvider"
import { ReactElement } from "react"

export const ThemeDecorator = (theme: Theme) => {
  // eslint-disable-next-line react/display-name
  return (StoryComponent: Story): ReactElement => {
    return (
      <div className={"app " + theme}>
        <StoryComponent />
      </div>
    )
  }
}
