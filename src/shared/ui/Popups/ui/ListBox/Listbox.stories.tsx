import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { MemoListBox as ListBox } from "./ListBox"

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
  decorators: [
    Story => (
      <div
        style={{
          display: "flex",
          height: "100vh",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof ListBox>

const Template: ComponentStory<typeof ListBox> = args => <ListBox {...args} />

export const Default = Template.bind({})
Default.args = {}
export const ReadOnly = Template.bind({})
ReadOnly.args = {
  readOnly: true,
}
export const TopRight = Template.bind({})
TopRight.args = {
  direction: "top-right",
}
export const TopLeft = Template.bind({})
TopLeft.args = {
  direction: "top-left",
}
export const BottomRight = Template.bind({})
BottomRight.args = {
  direction: "bottom-right",
}
export const BottomLeft = Template.bind({})
BottomLeft.args = {
  direction: "bottom-left",
}
export const WithLabel = Template.bind({})
WithLabel.args = {
  label: "Введите значение",
}
export const DefaultDark = Template.bind({})
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
