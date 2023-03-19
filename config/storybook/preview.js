import { addDecorator } from "@storybook/react"
import { Theme } from "@/app/providers/ThemeProvider"
import {
  RouterDecorator,
  SuspenseDecorator,
  ThemeDecorator,
} from "@/shared/config"
import { StyleDecorator } from "@/shared/config/storybook/styleDecorator/styleDecorator"

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
}

addDecorator(StyleDecorator)
addDecorator(ThemeDecorator(Theme.LIGHT))
addDecorator(RouterDecorator)
addDecorator(SuspenseDecorator)
