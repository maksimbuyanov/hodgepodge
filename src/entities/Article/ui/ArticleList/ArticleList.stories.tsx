import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ArticleList } from "./ArticleList"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"
import { ArticleView } from "../../model/types/article"
import { article } from "../../config/articleExample"

export default {
  title: "entities/Article/ArticleList",
  component: ArticleList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    articles: [article, article, article],
  },
} as ComponentMeta<typeof ArticleList>

const Template: ComponentStory<typeof ArticleList> = args => (
  <ArticleList {...args} />
)

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const Loading = Template.bind({})
Loading.args = { isLoading: true }
Loading.decorators = [StoreDecorator({})]

export const Grid = Template.bind({})
Grid.args = {
  view: ArticleView.GRID,
  articles: [
    article,
    article,
    article,
    article,
    article,
    article,
    article,
    article,
    article,
  ],
}
Grid.decorators = [StoreDecorator({})]

export const GridLoading = Template.bind({})
GridLoading.args = {
  view: ArticleView.GRID,
  isLoading: true,
}
GridLoading.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD), StoreDecorator({})]
