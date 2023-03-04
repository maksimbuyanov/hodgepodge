import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import AdminPanel from "./AdminPanel"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"

export default {
  title: "page/AdminPanel",
  component: AdminPanel,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof AdminPanel>

const Template: ComponentStory<typeof AdminPanel> = () => <AdminPanel />

export const Light = Template.bind({})
Light.decorators = []

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
