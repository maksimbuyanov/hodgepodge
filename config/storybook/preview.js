import { addDecorator } from "@storybook/react"
import { StyleDecorator } from "@/shared/config/storybook/styleDecorator/styleDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { RouterDecoratod } from "@/shared/config/storybook/RouterDecorator/RouterDecoratod"

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
addDecorator(RouterDecoratod)
