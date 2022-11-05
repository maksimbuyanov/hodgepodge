import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { Modal } from "./Modal"

export default {
  title: "shared/Modal",
  component: Modal,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    isOpen: true,
    children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae dicta dolore,
  exercitationem itaque laudantium magnam modi natus necessitatibus neque nihil numquam possimus quod, reiciendis
  sequi tempore veritatis. Adipisci autem deserunt ex nam quia velit vitae. Architecto delectus distinctio doloremque
  fugiat iusto labore maxime officia pariatur perferendis, ratione sit tenetur! At, eum exercitationem id incidunt
  iure magni modi non odit quis sapiente tempore vel voluptas, voluptatibus. Accusantium amet, atque ea error
  exercitationem laboriosam rem! Doloribus eius eos error fuga inventore laboriosam laudantium, molestias quam quas
  tenetur. Aperiam architecto culpa eos expedita ipsam laboriosam, maxime minima possimus praesentium quos rerum.`,
  },
} as ComponentMeta<typeof Modal>

const Template: ComponentStory<typeof Modal> = args => <Modal {...args} />

export const Default = Template.bind({})

export const DefaultDark = Template.bind({})
DefaultDark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
