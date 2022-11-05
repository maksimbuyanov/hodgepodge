import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { CountrySelect } from "./CountrySelect"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"

// TODO проверить что бы работал режим read Only

export default {
  title: "entities/CurrencySelect",
  component: CountrySelect,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof CountrySelect>

const Template: ComponentStory<typeof CountrySelect> = () => <CountrySelect />

export const Light = Template.bind({})
Light.args = {
  readOnly: false,
}
export const readOnly = Template.bind({})
readOnly.args = {
  readOnly: true,
}
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
