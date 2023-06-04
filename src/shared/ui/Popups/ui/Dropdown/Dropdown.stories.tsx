import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { MemoDropdown as Dropdown } from "./Dropdown"
import { Button } from "@/shared/ui"

export default {
  title: "shared/Dropdown",
  component: Dropdown,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    defaultValue: "введите значение",
    trigger: <Button>111222333</Button>,
    items: [
      { content: "1" },
      { content: "13" },
      { content: "14" },
      { content: "15", disabled: true },
    ],
  },
} as ComponentMeta<typeof Dropdown>

const Template: ComponentStory<typeof Dropdown> = args => <Dropdown {...args} />

export const Default = Template.bind({})
Default.args = {}
export const ReadOnly = Template.bind({})
ReadOnly.args = {
  // readOnly: true,
}
export const Top = Template.bind({})
Top.args = {
  // direction: "top",
}
export const WithLabel = Template.bind({})
WithLabel.args = {
  // label: "Введите значение",
}
export const DefaultDark = Template.bind({})
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
