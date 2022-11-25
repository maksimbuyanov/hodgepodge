import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import MainPage from "./MainPage"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"

export default {
  title: "page/MainPage",
  component: MainPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof MainPage>

const Template: ComponentStory<typeof MainPage> = () => <MainPage />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
