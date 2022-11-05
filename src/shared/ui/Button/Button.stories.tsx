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
  args: {
    children: "text",
  },
} as ComponentMeta<typeof Button>

const Template: ComponentStory<typeof Button> = args => <Button {...args} />

export const Default = Template.bind({})
Default.args = {
  theme: ButtonTheme.ERROR,
}
export const DefaultDark = Template.bind({})
DefaultDark.args = {
  theme: ButtonTheme.ERROR,
}
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Clear = Template.bind({})
Clear.args = {
  theme: ButtonTheme.CLEAR,
}
export const ClearDark = Template.bind({})
ClearDark.args = {
  theme: ButtonTheme.CLEAR,
}
ClearDark.decorators = [ThemeDecorator(Theme.DARK)]

export const ClearInverted = Template.bind({})
ClearInverted.args = {
  theme: ButtonTheme.CLEAR_INVERTED,
}
export const ClearInvertedDark = Template.bind({})
ClearInvertedDark.args = {
  theme: ButtonTheme.CLEAR_INVERTED,
}
ClearInvertedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Outline = Template.bind({})
Outline.args = {
  theme: ButtonTheme.OUTLINE,
}
export const Outline_L = Template.bind({})
Outline_L.args = {
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.L,
}
export const Outline_XL = Template.bind({})
Outline_XL.args = {
  theme: ButtonTheme.OUTLINE,
  size: ButtonSize.XL,
}
export const OutlineDark = Template.bind({})
OutlineDark.args = {
  theme: ButtonTheme.OUTLINE,
}
OutlineDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Background = Template.bind({})
Background.args = {
  theme: ButtonTheme.BACKGROUND,
}
export const BackgroundDark = Template.bind({})
BackgroundDark.args = {
  theme: ButtonTheme.BACKGROUND,
}
BackgroundDark.decorators = [ThemeDecorator(Theme.DARK)]

export const BackgroundInverted = Template.bind({})
BackgroundInverted.args = {
  theme: ButtonTheme.BACKGROUND_INVERTED,
}
export const BackgroundInvertedDark = Template.bind({})
BackgroundInvertedDark.args = {
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
export const disabled = Template.bind({})
disabled.args = {
  children: ">",
  theme: ButtonTheme.OUTLINE,
  disabled: true,
}

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
