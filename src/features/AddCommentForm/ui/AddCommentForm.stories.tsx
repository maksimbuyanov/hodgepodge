import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import AddCommentForm from "./AddCommentForm"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { action } from "@storybook/addon-actions"

export default {
  title: "features/AddCommentForm",
  component: AddCommentForm,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    onSendComment: action("onSendComment"),
  },
  decorators: [StoreDecorator({ addCommentForm: { text: "123" } })],
} as ComponentMeta<typeof AddCommentForm>

const Template: ComponentStory<typeof AddCommentForm> = args => (
  <AddCommentForm {...args} />
)

export const Default = Template.bind({})

export const DefaultDark = Template.bind({})
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
