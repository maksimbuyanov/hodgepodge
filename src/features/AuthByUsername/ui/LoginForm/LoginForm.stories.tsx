import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import LoginForm from "./LoginForm"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"

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
Default.decorators = [
  StoreDecorator({
    loginForm: { username: "user", password: "pass", isLoading: false },
  }),
]
export const DefaultDark = Template.bind({})
DefaultDark.args = {}
DefaultDark.decorators = [
  StoreDecorator({
    loginForm: { username: "user", password: "pass", isLoading: false },
  }),
  ThemeDecorator(Theme.DARK),
]
export const Error = Template.bind({})
Error.args = {}
Error.decorators = [
  StoreDecorator({
    loginForm: {
      username: "user",
      password: "pass",
      error: "Error",
      isLoading: false,
    },
  }),
]
export const Loading = Template.bind({})
Loading.args = {}
Loading.decorators = [
  StoreDecorator({
    loginForm: { isLoading: true },
  }),
]

export const Blood = Template.bind({})
Blood.decorators = [
  ThemeDecorator(Theme.BLOOD),
  StoreDecorator({
    loginForm: { username: "user", password: "pass", isLoading: false },
  }),
]
