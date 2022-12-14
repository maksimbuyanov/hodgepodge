import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ArticleDetailsPageHeader } from "./ArticleDetailsPageHeader"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"

export default {
  title: "page/ArticleDetailsPage/ArticleDetailsPageHeader",
  component: ArticleDetailsPageHeader,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ArticleDetailsPageHeader>

const Template: ComponentStory<typeof ArticleDetailsPageHeader> = () => (
  <ArticleDetailsPageHeader />
)

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const CanEdit = Template.bind({})
CanEdit.decorators = [
  StoreDecorator({
    user: { authData: { id: "1" } },
    articleDetails: { data: { user: { id: "1" } } },
  }),
]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD), StoreDecorator({})]
