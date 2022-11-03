import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { Select } from "./Select"

export default {
  title: "shared/Select",
  component: Select,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof Select>

const Template: ComponentStory<typeof Select> = args => <Select {...args} />

export const Light = Template.bind({})
Light.args = {
  label: "Test text",
  options: [
    { value: "123", content: "123" },
    { value: "11123", content: "11123" },
  ],
}
export const ReadOnly = Template.bind({})
ReadOnly.args = {
  label: "Test text",
  options: [
    { value: "123", content: "123" },
    { value: "11123", content: "11123" },
  ],
  readOnly: true,
}

export const Dark = Template.bind({})
Dark.args = {}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
