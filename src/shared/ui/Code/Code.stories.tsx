import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { Code } from "./Code"

export default {
  title: "shared/Code",
  component: Code,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    text: `import {FC} from 'react';
import {classNames} from '@/shared/lib';
import cls from '@/shared/ui/Code/Code.module.scss';
import {Button} from '@/shared/ui';

export const Code: FC<CodeProps> = props => {
  const { className = "", children } = props
  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copy_button}>COPY</Button>
      <code>{children}</code>
    </pre>
  )
}`,
  },
} as ComponentMeta<typeof Code>

const Template: ComponentStory<typeof Code> = args => <Code {...args} />

export const Light = Template.bind({})

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK)]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD)]
