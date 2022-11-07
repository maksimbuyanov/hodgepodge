import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"

export default {
  title:
    "src/entities/Article/ui/ArticleCodeBlockComponent/ArticleCodeBlockComponent",
  component: ArticleCodeBlockComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleCodeBlockComponent>

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = () => (
  <ArticleCodeBlockComponent />
)

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD), StoreDecorator({})]
