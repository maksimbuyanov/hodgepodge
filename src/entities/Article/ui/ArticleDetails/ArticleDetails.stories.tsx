import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ArticleDetails } from "./ArticleDetails"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"
import { article } from "../../config/articleExample"

export default {
  title: "entities/Article/ArticleDetails",
  component: ArticleDetails,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    id: "1",
  },
  decorators: [
    StoreDecorator({
      articleDetails: {
        data: article,
      },
    }),
  ],
} as ComponentMeta<typeof ArticleDetails>

const Template: ComponentStory<typeof ArticleDetails> = args => (
  <ArticleDetails {...args} />
)

export const Light = Template.bind({})
Light.decorators = []

export const Loading = Template.bind({})
Loading.decorators = [
  StoreDecorator({
    articleDetails: {
      isLoading: true,
    },
  }),
]

export const Error = Template.bind({})
Error.decorators = [
  StoreDecorator({
    articleDetails: {
      error: "true",
    },
  }),
]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]
export const LoadingDark = Template.bind({})
LoadingDark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    articleDetails: {
      isLoading: true,
    },
  }),
]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
export const LoadingBlood = Template.bind({})
LoadingBlood.decorators = [
  ThemeDecorator(Theme.BLOOD),
  StoreDecorator({
    articleDetails: {
      isLoading: true,
    },
  }),
]
