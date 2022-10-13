import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import LoginForm from "./LoginForm"

export default {
  title: "features/LoginForm",
  component: LoginForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof LoginForm>

const Template: ComponentStory<typeof LoginForm> = args => (
  <LoginForm {...args} />
)

export const Default = Template.bind({})
Default.args = {}
export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
