import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Flex } from "./Flex"

export default {
  title: "shared/Flex",
  component: Flex,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    children: (
      <>
        <div>123</div>
        <div>12</div>
        <div>1223</div>
        <div>125453</div>
      </>
    ),
  },
} as ComponentMeta<typeof Flex>

const Template: ComponentStory<typeof Flex> = args => <Flex {...args} />

export const Row = Template.bind({})
export const RowGap4 = Template.bind({})
RowGap4.args = {
  gap: "4",
}
export const RowGap16 = Template.bind({})
RowGap16.args = {
  gap: "16",
}
export const Column = Template.bind({})
Column.args = {
  direction: "column",
}
export const Align = Template.bind({})
Align.args = {
  align: "end",
}
export const Justify = Template.bind({})
Justify.args = {
  justify: "center",
}
export const Sandbox = Template.bind({})
Sandbox.args = {
  direction: "column",
  gap: "8",
  justify: "between",
  align: "end",
}
