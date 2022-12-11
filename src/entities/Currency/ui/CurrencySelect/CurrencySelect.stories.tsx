import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { CurrencySelect } from "./CurrencySelect"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"

// TODO проверить что бы работал режим read Only

export default {
  title: "entities/CurrencySelect",
  component: CurrencySelect,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CurrencySelect>

const Template: ComponentStory<typeof CurrencySelect> = args => (
  <CurrencySelect {...args} />
)

export const Light = Template.bind({})
Light.args = {
  readOnly: false,
}
export const ReadOnly = Template.bind({})
ReadOnly.args = {
  readOnly: true,
}
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
