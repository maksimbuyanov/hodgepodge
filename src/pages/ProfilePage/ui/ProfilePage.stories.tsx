import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import ProfilePage from "./ProfilePage"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"
import images from "@/shared/assets/forTests/user.png"

export default {
  title: "page/ProfilePage",
  component: ProfilePage,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof ProfilePage>

const Template: ComponentStory<typeof ProfilePage> = () => <ProfilePage />

export const Light = Template.bind({})
Light.decorators = [
  StoreDecorator({
    profile: {
      form: {
        city: "Tar-tarary",
        age: 100,
        username: "TwitterChief",
        lastname: "Mask",
        first: "Ilon",
        country: Country.AZ,
        currency: Currency.EUR,
        avatar: images,
      },
    },
  }),
]
export const ReadOnly = Template.bind({})
ReadOnly.decorators = [
  StoreDecorator({
    profile: {
      readonly: true,
      form: {
        city: "Tar-tarary",
        age: 100,
        username: "TwitterChief",
        lastname: "Mask",
        first: "Ilon",
        country: Country.AZ,
        currency: Currency.EUR,
        avatar: images,
      },
    },
  }),
]

export const IsLoading = Template.bind({})
IsLoading.decorators = [
  StoreDecorator({
    profile: {
      readonly: true,
      isLoading: true,
      form: {
        city: "Tar-tarary",
        age: 100,
        username: "TwitterChief",
        lastname: "Mask",
        first: "Ilon",
        country: Country.AZ,
        currency: Currency.EUR,
        avatar: images,
      },
    },
  }),
]

export const Error = Template.bind({})
Error.decorators = [
  StoreDecorator({
    profile: {
      readonly: true,
      error: "Some Error",
      form: {
        city: "Tar-tarary",
        age: 100,
        username: "TwitterChief",
        lastname: "Mask",
        first: "Ilon",
        country: Country.AZ,
        currency: Currency.EUR,
        avatar: images,
      },
    },
  }),
]

export const Dark = Template.bind({})
Dark.decorators = [
  ThemeDecorator(Theme.DARK),
  StoreDecorator({
    profile: {
      form: {
        city: "Tar-tarary",
        age: 100,
        username: "TwitterChief",
        lastname: "Mask",
        first: "Ilon",
        country: Country.AZ,
        currency: Currency.EUR,
        avatar: images,
      },
    },
  }),
]

export const Blood = Template.bind({})
Blood.decorators = [
  ThemeDecorator(Theme.BLOOD),
  StoreDecorator({
    profile: {
      form: {
        city: "Tar-tarary",
        age: 100,
        username: "TwitterChief",
        lastname: "Mask",
        first: "Ilon",
        country: Country.AZ,
        currency: Currency.EUR,
        avatar: images,
      },
    },
  }),
]
