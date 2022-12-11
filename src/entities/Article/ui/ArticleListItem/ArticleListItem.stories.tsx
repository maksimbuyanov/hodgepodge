import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ArticleListItem } from "./ArticleListItem"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"
import {
  ArticleBlockType,
  ArticleType,
  ArticleView,
} from "../../model/types/article"
import { article } from "../../config/articleExample"

export default {
  title: "entities/Article/ArticleListItem",
  component: ArticleListItem,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    article,
    view: ArticleView.GRID,
  },
} as ComponentMeta<typeof ArticleListItem>

const Template: ComponentStory<typeof ArticleListItem> = args => (
  <ArticleListItem {...args} />
)

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD), StoreDecorator({})]
