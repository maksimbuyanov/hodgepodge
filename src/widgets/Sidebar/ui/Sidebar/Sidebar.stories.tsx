import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Sidebar } from "./Sidebar"
import { StoreDecorator, ThemeDecorator } from "@/shared/config"
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
Light.decorators = [
  StoreDecorator({
    user: { authData: { username: "asd", id: "asda" } },
  }),
]
export const Dark = Template.bind({})
Dark.args = {
  children: "text",
}
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    user: { authData: { username: "asd", id: "asda" } },
  }),
]
