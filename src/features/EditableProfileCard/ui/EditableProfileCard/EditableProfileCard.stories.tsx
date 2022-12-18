import { ComponentStory, ComponentMeta } from "@storybook/react"
import { StoreDecorator } from "@/shared/config/storybook/StoreDecorator/StoreDecorator"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { EditableProfileCard } from "./EditableProfileCard"

export default {
  title: "features/EditableProfileCard",
  component: EditableProfileCard,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {},
  decorators: [StoreDecorator({})],
} as ComponentMeta<typeof EditableProfileCard>

const Template: ComponentStory<typeof EditableProfileCard> = args => (
  <EditableProfileCard {...args} />
)

export const Light = Template.bind({})
Light.args = {}
export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
