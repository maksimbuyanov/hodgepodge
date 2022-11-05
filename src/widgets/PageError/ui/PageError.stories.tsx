import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { PageError } from "./PageError"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"

export default {
  title: "widgets/PageError",
  component: PageError,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof PageError>

const Template: ComponentStory<typeof PageError> = args => (
  <PageError {...args} />
)

export const Light = Template.bind({})
Light.args = {
  children: "text",
}

export const Dark = Template.bind({})
Dark.args = {
  children: "text",
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
