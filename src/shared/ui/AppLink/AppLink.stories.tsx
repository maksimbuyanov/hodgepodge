import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { AppLink, AppLinkTheme } from "./AppLink"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"

export default {
  title: "shared/AppLink",
  component: AppLink,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    to: "/",
  },
} as ComponentMeta<typeof AppLink>

const Template: ComponentStory<typeof AppLink> = args => <AppLink {...args} />

export const Light = Template.bind({})
Light.args = {
  children: "text",
  theme: AppLinkTheme.PRIMARY,
}

export const Dark = Template.bind({})
Dark.args = {
  children: "text",
  theme: AppLinkTheme.PRIMARY,
}
Dark.decorators = [ThemeDecorator(Theme.DARK)]
