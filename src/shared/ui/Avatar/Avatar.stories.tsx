import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { Avatar } from "./Avatar"
import image from "./testImage.png"

export default {
  title: "shared/Avatar",
  component: Avatar,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof Avatar>

const Template: ComponentStory<typeof Avatar> = args => <Avatar {...args} />

export const Light = Template.bind({})
Light.args = {
  src: image,
  size: 150,
}
export const Small = Template.bind({})
Small.args = {
  src: image,
  size: 50,
}

export const Dark = Template.bind({})
Dark.args = {
  src: image,
  size: 150,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
