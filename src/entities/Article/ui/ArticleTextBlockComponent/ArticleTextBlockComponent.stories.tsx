import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ArticleTextBlockComponent } from "./ArticleTextBlockComponent"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"

export default {
  title: "entities/ArticleTextBlockComponent",
  component: ArticleTextBlockComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleTextBlockComponent>

const Template: ComponentStory<typeof ArticleTextBlockComponent> = () => (
  <ArticleTextBlockComponent />
)

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD), StoreDecorator({})]
