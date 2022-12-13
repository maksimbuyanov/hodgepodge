import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ArticleTabs } from "./ArticleTabs"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"
import { action } from "@storybook/addon-actions"

export default {
  title: "entities/Article/ArticleTabs",
  component: ArticleTabs,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    value: "tab2",
    onChange: action("click"),
  },
} as ComponentMeta<typeof ArticleTabs>

const Template: ComponentStory<typeof ArticleTabs> = args => (
  <ArticleTabs {...args} />
)

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD), StoreDecorator({})]
