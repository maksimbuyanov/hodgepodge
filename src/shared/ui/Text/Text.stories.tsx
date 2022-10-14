import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Text, TextTheme } from "./Text"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import React from "react"

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>

// TODO починить истории

const Template: ComponentStory<typeof Text> = args => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "lorem5 lorem5 lorem5",
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae dicta dolore,
  exercitationem itaque laudantium magnam modi natus necessitatibus neque nihil numquam possimus quod.`,
}
export const DefaultDark = Template.bind({})
DefaultDark.args = {
  title: "lorem5 lorem5 lorem5",
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae dicta dolore,
  exercitationem itaque laudantium magnam modi natus necessitatibus neque nihil numquam possimus quod.`,
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]
export const onlyTitle = Template.bind({})
onlyTitle.args = {
  title: "lorem5 lorem5 lorem5",
}
export const onlyText = Template.bind({})
onlyText.args = {
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae dicta dolore,
  exercitationem itaque laudantium magnam modi natus necessitatibus neque nihil numquam possimus quod.`,
}
export const Error = Template.bind({})
Error.args = {
  theme: TextTheme.Error,
  title: "lorem5 lorem5 lorem5",
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae dicta dolore,
  exercitationem itaque laudantium magnam modi natus necessitatibus neque nihil numquam possimus quod.`,
}
