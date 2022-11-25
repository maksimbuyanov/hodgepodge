import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ArticlesPageFilters } from "./ArticlesPageFilters"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"

export default {
  title: "page/ArticlesPageFilters",
  component: ArticlesPageFilters,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticlesPageFilters>

const Template: ComponentStory<typeof ArticlesPageFilters> = () => (
  <ArticlesPageFilters />
)

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD), StoreDecorator({})]
