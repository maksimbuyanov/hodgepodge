import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import AboutPage from "./AboutPage"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"

export default {
  title: "page/AboutPage",
  component: AboutPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof AboutPage>

const Template: ComponentStory<typeof AboutPage> = () => <AboutPage />

export const Light = Template.bind({})
Light.decorators = []

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
