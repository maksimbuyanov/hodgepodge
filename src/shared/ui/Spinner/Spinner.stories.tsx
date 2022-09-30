import React from "react"
import {ComponentMeta, ComponentStory} from "@storybook/react"
import {Spinner, SpinnerStatusEnum} from "./Spinner"
import {ThemeDecorator} from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import {Theme} from "@/app/providers/ThemeProvider"

export default {
  title: "shared/Spinner",
  component: Spinner,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Spinner>

const Template: ComponentStory<typeof Spinner> = args => <Spinner {...args} />

export const LoadingLight = Template.bind({})
LoadingLight.args = {
  children: "text",
  status: SpinnerStatusEnum.on,
}
export const LoadingDark = Template.bind({})
LoadingDark.args = {
  children: "text",
  status: SpinnerStatusEnum.on,
}
LoadingDark.decorators = [ThemeDecorator(Theme.DARK)]

export const SuccessLight = Template.bind({})
SuccessLight.args = {
  children: "text",
  status: SpinnerStatusEnum.success,
}
export const SuccessDark = Template.bind({})
SuccessDark.args = {
  children: "text",
  status: SpinnerStatusEnum.success,
}
SuccessDark.decorators = [ThemeDecorator(Theme.DARK)]

export const RejectedLight = Template.bind({})
RejectedLight.args = {
  children: "text",
  status: SpinnerStatusEnum.fail,
}
export const RejectedDark = Template.bind({})
RejectedDark.args = {
  children: "text",
  status: SpinnerStatusEnum.fail,
}
RejectedDark.decorators = [ThemeDecorator(Theme.DARK)]
