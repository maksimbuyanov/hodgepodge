import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { CommentCard } from "./CommentCard"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import icon from "@/shared/assets/forTests/user.png"

export default {
  title: "entities/CommentCard",
  component: CommentCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    comment: {
      id: "1",
      user: { id: "2", avatar: icon, username: "Mock" },
      text: "Это моковый комментарий",
    },
  },
} as ComponentMeta<typeof CommentCard>

const Template: ComponentStory<typeof CommentCard> = args => (
  <CommentCard {...args} />
)

export const Default = Template.bind({})

export const IsLoading = Template.bind({})
IsLoading.args = {
  isLoading: true,
}

export const DefaultDark = Template.bind({})
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
