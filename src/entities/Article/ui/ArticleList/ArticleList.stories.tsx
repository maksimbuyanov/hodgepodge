import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ArticleList } from "./ArticleList"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"
import {
  Article,
  ArticleBlockType,
  ArticleType,
  ArticleView,
} from "@/entities/Article/model/types/article"

const article: Article = {
  id: "1",
  user: { username: "Abdulai", id: "500" },
  title: "Песня про Антошку",
  image: "https://i.ytimg.com/vi/AotASl25CCg/maxresdefault.jpg",
  subtitle: "который не очень любит работать",
  views: 2020,
  createdAt: "26.10.2022",
  type: [ArticleType.ABOUT_BOY, ArticleType.RUSSIAN],
  blocks: [
    {
      id: "1",
      type: ArticleBlockType.TEXT,
      title: "TITLE OF THE PERFECT BLOCK",
      paragraphs: [
        "Антошка Антошка",
        "Пойдем копать картошку",
        "Антошка Антошка",
        "Пойдем копать карто-о-шку",
      ],
    },
    {
      id: "2",
      type: ArticleBlockType.TEXT,
      title: "Второй куплет",
      paragraphs: [
        "Ти ли ти ли",
        "Тра ли вали",
        "Это мы не проходили",
        "Это нам не задавали",
      ],
    },
    {
      id: "3",
      type: ArticleBlockType.IMAGE,
      title: "Тот самый Антошка",
      src: "https://skazki.land/api/get-resized-image/antoshka-289f5.jpg?width=1024&height=1024&fit=inside",
    },
    {
      id: "4",
      type: ArticleBlockType.CODE,
      code: 'import React from "react"\nimport { ComponentMeta, ComponentStory } from "@storybook/react"\nimport { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"\nimport { Theme } from "@/app/providers/ThemeProvider"\nimport { Select } from "./Select"\n\nexport default {\n  title: "shared/Select",\n  component: Select,\n  argTypes: {\n    backgroundColor: { control: "color" },\n  },\n  args: {\n    label: "Test text",\n    options: [\n      { value: "123", content: "123" },\n      { value: "11123", content: "11123" },\n    ],\n  },\n} as ComponentMeta<typeof Select>\n\nconst Template: ComponentStory<typeof Select> = args => <Select {...args} />\n\nexport const Light = Template.bind({})\n\nexport const ReadOnly = Template.bind({})\nReadOnly.args = {\n  readOnly: true,\n}\n\nexport const Dark = Template.bind({})\nDark.decorators = [ThemeDecorator(Theme.DARK)]\n\nexport const Blood = Template.bind({})\nBlood.decorators = [ThemeDecorator(Theme.BLOOD)]\n',
    },
  ],
}

export default {
  title: "entities/ArticleList",
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
