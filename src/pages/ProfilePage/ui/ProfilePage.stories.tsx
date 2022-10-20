import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import ProfilePage from "./ProfilePage"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"

export default {
  title: "page/ProfilePage",
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = args => (
  <ProfilePage {...args} />
)

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]
export const Dark = Template.bind({})

Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]
