import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { NotFoundPage } from "./NotFoundPage"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"

export default {
  title: "page/NotFoundPage",
  component: NotFoundPage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof NotFoundPage>

const Template: ComponentStory<typeof NotFoundPage> = args => (
  <NotFoundPage {...args} />
)

export const Light = Template.bind({})

export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
