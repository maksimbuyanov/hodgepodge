import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Text, TextAlign, TextSize, TextTheme } from "./Text"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import React from "react"

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {},
} as ComponentMeta<typeof Text>

// TODO починить истории

const Template: ComponentStory<typeof Text> = args => <Text {...args} />

export const Default = Template.bind({})
Default.args = {
  title: "lorem5 lorem5 lorem5",
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae dicta dolore,
  exercitationem itaque laudantium magnam modi natus necessitatibus neque nihil numquam possimus quod.`,
}
export const Align_Right = Template.bind({})
Align_Right.args = {
  align: TextAlign.RIGHT,
  title: "lorem5 lorem5 lorem5",
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae dicta dolore,
  exercitationem itaque laudantium.`,
}
export const Align_CENTER = Template.bind({})
Align_CENTER.args = {
  align: TextAlign.CENTER,
  title: "lorem5 lorem5 lorem5",
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae dicta dolore.`,
}
export const Size_S = Template.bind({})
Size_S.args = {
  size: TextSize.S,
  title: "lorem5 lorem5 lorem5",
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae dicta dolore,
  exercitationem itaque laudantium magnam modi natus necessitatibus neque nihil numquam possimus quod.`,
}
export const Size_M = Template.bind({})
Size_M.args = {
  size: TextSize.M,
  title: "lorem5 lorem5 lorem5",
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae dicta dolore,
  exercitationem itaque laudantium magnam modi natus necessitatibus neque nihil numquam possimus quod.`,
}
export const Size_L = Template.bind({})
Size_L.args = {
  size: TextSize.L,
  title: "lorem5 lorem5 lorem5",
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae dicta dolore,
  exercitationem itaque laudantium magnam modi natus necessitatibus neque nihil numquam possimus quod.`,
}
export const Size_XL = Template.bind({})
Size_XL.args = {
  size: TextSize.XL,
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

export const Blood = Template.bind({})
Blood.args = {
  title: "lorem5 lorem5 lorem5",
  text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae dicta dolore,
  exercitationem itaque laudantium magnam modi natus necessitatibus neque nihil numquam possimus quod.`,
}
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
