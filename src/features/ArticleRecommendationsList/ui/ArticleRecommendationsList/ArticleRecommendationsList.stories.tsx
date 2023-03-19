import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"

import { ArticleRecommendationsList } from "./ArticleRecommendationsList"
import withMock from "storybook-addon-mock"
import { article } from "@/entities/Article/config/articleExample"

export default {
  title: "features/ArticleRecommendationsList",
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {},
  decorators: [StoreDecorator({}), withMock],
} as ComponentMeta<typeof ArticleRecommendationsList>

const Template: ComponentStory<typeof ArticleRecommendationsList> = args => (
  <ArticleRecommendationsList {...args} />
)

export const Light = Template.bind({})
Light.args = {}
Light.parameters = {
  mockData: [
    {
      url: __API__ + "/articles?_limit=4",
      status: "",
      method: "",
      response: [
        { ...article, id: "1" },
        { ...article, id: "2" },
        { ...article, id: "3" },
      ],
    },
  ],
}

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
