import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ArticleTextBlockComponent } from "./ArticleTextBlockComponent"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"
import { ArticleBlockType } from "../../model/types/article"

export default {
  title: "entities/Article/ArticleTextBlockComponent",
  component: ArticleTextBlockComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    block: {
      title: "Some title",
      paragraphs: [
        "lorem ipsum",
        "ipsum lorem",
        "глаз той рыбы",
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae consectetur, consequuntur deleniti enim expedita explicabo harum ipsum iste laboriosam nam nulla optio perspiciatis quibusdam quis quo ratione ullam veritatis voluptatem?",
      ],
      type: ArticleBlockType.TEXT,
      id: "0",
    },
  },
} as ComponentMeta<typeof ArticleTextBlockComponent>

const Template: ComponentStory<typeof ArticleTextBlockComponent> = args => (
  <ArticleTextBlockComponent {...args} />
)

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD), StoreDecorator({})]
