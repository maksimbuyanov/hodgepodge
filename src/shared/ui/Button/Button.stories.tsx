import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Button, ThemeButton } from "./Button"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"

export default {
  title: "shared/Button",
  component: Button,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  children: "text",
  theme: ThemeButton.ERROR,
}
export const DefaultDark = Template.bind({})
DefaultDark.args = {
  children: "text",
  theme: ThemeButton.ERROR,
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear = Template.bind({})
Clear.args = {
  children: "text",
  theme: ThemeButton.CLEAR,
}
export const ClearDark = Template.bind({})
ClearDark.args = {
  children: "text",
  theme: ThemeButton.CLEAR,
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline = Template.bind({})
Outline.args = {
  children: "text",
  theme: ThemeButton.OUTLINE,
}
export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: "text",
  theme: ThemeButton.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]
