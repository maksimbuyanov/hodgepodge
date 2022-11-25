import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Tabs } from "./Tabs"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"
import { action } from "@storybook/addon-actions"

export default {
  title: "shared/Tabs",
  component: Tabs,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    value: "tab2",
    onTabClick: action("tabClick"),
    tabs: [
      { content: "tab1", value: "tab1" },
      { content: "tab2", value: "tab2" },
      { content: "tab3", value: "tab3" },
    ],
  },
} as ComponentMeta<typeof Tabs>

const Template: ComponentStory<typeof Tabs> = args => <Tabs {...args} />

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD), StoreDecorator({})]
