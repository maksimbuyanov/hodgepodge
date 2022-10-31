import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Sidebar } from "./Sidebar"
import { ThemeDecorator } from "@/shared/config"
import { Theme } from "@/app/providers/ThemeProvider"

export default {
  title: "widgets/Sidebar/Sidebar",
  component: Sidebar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Sidebar>

const Template: ComponentStory<typeof Sidebar> = args => <Sidebar {...args} />

export const Light = Template.bind({})
Light.args = {
  children: "text",
}
export const Dark = Template.bind({})
Dark.args = {
  children: "text",
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]

// TODO добавить работу со стором, добавить историю на не авторизовонного пользователя
