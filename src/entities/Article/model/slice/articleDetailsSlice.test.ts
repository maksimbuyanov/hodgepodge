import { ArticleDetailsSchema } from "../types/ArticleDetailsSchema"
import { Article, ArticleBlockType, ArticleType } from "../types/article"
import { articleDetailsReducer } from "./articleDetailsSlice"
import { fetchArticleById } from "../services/fetchArticleById/fetchArticleById"
import image from "@/shared/assets/forTests/user.png"

describe("profileSlice.test", () => {
  const article: Article = {
    id: "1",
    title: "Песня про Антошку",
    user: {
      id: "1",
      username: "TwitterChief",
      avatar: image,
    },
    image,
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

  test("test fetch article data pending", () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: false,
    }
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        fetchArticleById.pending
      )
    ).toEqual({ isLoading: true, error: "" })
  })
  test("test update fetch article fulfilled", () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    }
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        // @ts-expect-error
        fetchArticleById.fulfilled(article)
      )
    ).toEqual({
      isLoading: false,
      data: article,
    })
  })
  test("test update fetch article rejected", () => {
    const state: DeepPartial<ArticleDetailsSchema> = {
      isLoading: true,
    }
    expect(
      articleDetailsReducer(
        state as ArticleDetailsSchema,
        // @ts-expect-error
        fetchArticleById.rejected("error article")
      )
    ).toEqual({
      isLoading: false,
      error: undefined, // "error article" выдает ошибку
    })
  })
})
