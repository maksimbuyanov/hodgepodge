import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ArticleImageBlockComponent } from "./ArticleImageBlockComponent"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"
import { ArticleBlockType } from "../../model/types/article"
import icon from "@/shared/assets/forTests/user.png"

export default {
  title: "entities/Article/ArticleImageBlockComponent",
  component: ArticleImageBlockComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    block: {
      title: "text",
      src: icon,
      id: "0",
      type: ArticleBlockType.IMAGE,
    },
  },
} as ComponentMeta<typeof ArticleImageBlockComponent>

const Template: ComponentStory<typeof ArticleImageBlockComponent> = args => (
  <ArticleImageBlockComponent {...args} />
)

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD), StoreDecorator({})]
