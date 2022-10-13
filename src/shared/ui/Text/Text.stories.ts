import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { Text } from "./Text"
import { Modal } from "@/shared/ui/Modal/Modal"

export default {
  title: "shared/Text",
  component: Text,
  argTypes: {
    backgroundColor: { control: "color" },
  },
} as ComponentMeta<typeof Text>

// const Template: ComponentStory<typeof Text> = args => {
//    return <Text{...args}/>
// }
//
//
// export const Default = Template.bind({})
// Default.args = {
//   title: "lorem5 lorem5 lorem5",
//   text: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae dicta dolore,
//   exercitationem itaque laudantium magnam modi natus necessitatibus neque nihil numquam possimus quod.`,
// }
// export const onlyTitle = Template.bind({})
// onlyTitle.args = {
//   title: "lorem5 lorem5 lorem5",
// }
// export const onlyText = Template.bind({})
// onlyText.args = {
//   children: `Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium at beatae dicta dolore,
//   exercitationem itaque laudantium magnam modi natus necessitatibus neque nihil numquam possimus quod.`,
// }
