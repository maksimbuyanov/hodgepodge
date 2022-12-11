import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ArticleCopyrightBlockComponent } from "./ArticleCopyrightBlockComponent"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"
import { ArticleBlockType } from "@/entities/Article/model/types/article"

export default {
  title: "entities/Article/ArticleCopyrightBlockComponent",
  component: ArticleCopyrightBlockComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    block: {
      id: "0",
      type: ArticleBlockType.COPYRIGHT,
      url: "google.com",
      text: "ссылка на гугл",
    },
  },
} as ComponentMeta<typeof ArticleCopyrightBlockComponent>

const Template: ComponentStory<
  typeof ArticleCopyrightBlockComponent
> = args => <ArticleCopyrightBlockComponent {...args} />

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD), StoreDecorator({})]
