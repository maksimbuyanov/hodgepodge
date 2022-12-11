import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { ListBox } from "./ListBox"

export default {
  title: "shared/ListBox",
  component: ListBox,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    defaultValue: "введите значение",
    value: "13",
    options: [
      { content: "1", value: "1" },
      { content: "13", value: "2" },
      { content: "14", value: "3" },
      { content: "15", value: "4", disabled: true },
    ],
  },
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = args => <ListBox {...args} />

export const Default = Template.bind({})
Default.args = {}
export const ReadOnly = Template.bind({})
ReadOnly.args = {
  readOnly: true,
}
export const Top = Template.bind({})
Top.args = {
  direction: "top",
}
export const WithLabel = Template.bind({})
WithLabel.args = {
  label: "Введите значение",
}
export const DefaultDark = Template.bind({})
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
