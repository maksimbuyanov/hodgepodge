import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Spinner, SpinnerStatusEnum } from "./Spinner"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"

export default {
  title: "shared/Spinner",
  component: Spinner,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    status: SpinnerStatusEnum.on,
  },
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />

export const LoadingLight = Template.bind({})

export const LoadingDark = Template.bind({})

LoadingDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SuccessLight = Template.bind({})
SuccessLight.args = {
  status: SpinnerStatusEnum.success,
}
export const SuccessDark = Template.bind({})
SuccessDark.args = {
  status: SpinnerStatusEnum.success,
}
SuccessDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RejectedLight = Template.bind({})
RejectedLight.args = {
  status: SpinnerStatusEnum.fail,
}
export const RejectedDark = Template.bind({})
RejectedDark.args = {
  status: SpinnerStatusEnum.fail,
}
RejectedDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
