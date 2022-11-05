import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ProfileCard } from "./ProfileCard"
import { ThemeDecorator, StoreDecorator } from "@/shared/config"
import { Theme } from "@/app/providers/ThemeProvider"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"
import images from "@/shared/assets/forTests/user.png"

export default {
  title: "entities/ProfileCard",
  component: ProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfileCard>

const Template: ComponentStory<typeof ProfileCard> = args => (
  <ProfileCard {...args} />
)

export const Light = Template.bind({})
Light.args = {
  data: {
    city: "Tar-tarary",
    age: 100,
    username: "TwitterChief",
    lastname: "Mask",
    first: "Ilon",
    country: Country.AZ,
    currency: Currency.EUR,
    avatar: images,
  },
}
export const IsLoading = Template.bind({})
IsLoading.args = {
  isLoading: true,
}
export const WithError = Template.bind({})
WithError.args = {
  error: "Some error",
}
// Light.decorators = [StoreDecorator({})]
export const Dark = Template.bind({})
Dark.args = {
  data: {
    city: "Tar-tarary",
    age: 100,
    username: "TwitterChief",
    lastname: "Mask",
    first: "Ilon",
    country: Country.AZ,
    currency: Currency.EUR,
  },
}

Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
