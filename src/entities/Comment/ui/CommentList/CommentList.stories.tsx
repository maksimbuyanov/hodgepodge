import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { CommentList } from "./CommentList"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { action } from "@storybook/addon-actions"
import icon from "@/shared/assets/forTests/user.png"

export default {
  title: "entities/CommentList",
  component: CommentList,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    comments: [
      {
        id: "1",
        user: { id: "2", avatar: icon, username: "Mock" },
        text: "Это моковый комментарий",
      },
      {
        id: "2",
        user: { id: "1", avatar: icon, username: "Mock!!!" },
        text: "Это моковый комментарий!!!",
      },
    ],
  },
} as ComponentMeta<typeof CommentList>

const Template: ComponentStory<typeof CommentList> = args => (
  <CommentList {...args} />
)

export const Default = Template.bind({})

export const DefaultDark = Template.bind({})
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
