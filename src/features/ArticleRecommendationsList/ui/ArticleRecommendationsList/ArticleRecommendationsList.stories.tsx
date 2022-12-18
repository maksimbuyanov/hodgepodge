import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"

import { ArticleRecommendationsList } from "./ArticleRecommendationsList"

export default {
  title: "features/ArticleRecommendationsList",
  component: ArticleRecommendationsList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {},
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof ArticleRecommendationsList>

const Template: ComponentStory<typeof ArticleRecommendationsList> = args => (
  <ArticleRecommendationsList {...args} />
)

export const Light = Template.bind({})
Light.args = {}
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
