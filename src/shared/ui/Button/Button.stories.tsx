import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Button, ButtonSize, ButtonTheme } from "./Button"
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
  theme: ButtonTheme.ERROR,
}
export const DefaultDark = Template.bind({})
DefaultDark.args = {
  children: "text",
  theme: ButtonTheme.ERROR,
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear = Template.bind({})
Clear.args = {
  children: "text",
  theme: ButtonTheme.CLEAR,
}
export const ClearDark = Template.bind({})
ClearDark.args = {
  children: "text",
  theme: ButtonTheme.CLEAR,
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline = Template.bind({})
Outline.args = {
  children: "text",
  theme: ButtonTheme.OUTLINE,
}
export const Outline_L = Template.bind({})
Outline_L.args = {
  children: "text",
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
}
export const Outline_XL = Template.bind({})
Outline_XL.args = {
  children: "text",
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
}
export const OutlineDark = Template.bind({})
OutlineDark.args = {
  children: "text",
  theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({})
Background.args = {
  children: "text",
  theme: ButtonTheme.BACKGROUND,
}
export const BackgroundDark = Template.bind({})
BackgroundDark.args = {
  children: "text",
  theme: ButtonTheme.BACKGROUND,
}
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  children: "text",
  theme: ButtonTheme.BACKGROUND_INVERTED,
}
export const BackgroundInvertedDark = Template.bind({})
BackgroundInvertedDark.args = {
  children: "text",
  theme: ButtonTheme.BACKGROUND_INVERTED,
}
BackgroundInvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundInvertedSquared_M = Template.bind({})
BackgroundInvertedSquared_M.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.M,
}
export const BackgroundInvertedSquared_L = Template.bind({})
BackgroundInvertedSquared_L.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.L,
}
export const BackgroundInvertedSquared_XL = Template.bind({})
BackgroundInvertedSquared_XL.args = {
  children: ">",
  theme: ButtonTheme.BACKGROUND_INVERTED,
  square: true,
  size: ButtonSize.XL,
}
