import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ArticlePage } from "./ArticlePage"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"

export default {
  title: "src/pages/ArticlePage/ui/ArticlePage/ArticlePage",
  component: ArticlePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticlePage>

const Template: ComponentStory<typeof ArticlePage> = () => <ArticlePage />

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD), StoreDecorator({})]
