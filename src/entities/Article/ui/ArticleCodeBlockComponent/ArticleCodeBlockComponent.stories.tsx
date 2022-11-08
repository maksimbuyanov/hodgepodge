import React from "react"
import { ComponentMeta, ComponentStory } from "@storybook/react"
import { ArticleCodeBlockComponent } from "./ArticleCodeBlockComponent"
import { ThemeDecorator } from "@/shared/config/storybook/styleDecorator/ThemeDecorator"
import { Theme } from "@/app/providers/ThemeProvider"
import { StoreDecorator } from "@/shared/config"
import { ArticleBlockType } from "@/entities/Article/model/types/article"

export default {
  title: "entities/ArticleCodeBlockComponent",
  component: ArticleCodeBlockComponent,
  argTypes: {
    backgroundColor: { control: "color" },
  },
  args: {
    block: {
      id: "0",
      type: ArticleBlockType.CODE,
      code:
        "`import {FC} from 'react';\n" +
        "import {classNames} from '@/shared/lib';\n" +
        "import cls from '@/shared/ui/Code/Code.module.scss';\n" +
        "import {Button} from '@/shared/ui';\n" +
        "\n" +
        "export const Code: FC<CodeProps> = props => {\n" +
        '  const { className = "", children } = props\n' +
        "  return (\n" +
        "    <pre className={classNames(cls.Code, {}, [className])}>\n" +
        "      <Button className={cls.copy_button}>COPY</Button>\n" +
        "      <code>{children}</code>\n" +
        "    </pre>\n" +
        "    </pre>\n" +
        "  )\n" +
        "}`,",
    },
  },
} as ComponentMeta<typeof ArticleCodeBlockComponent>

const Template: ComponentStory<typeof ArticleCodeBlockComponent> = args => (
  <ArticleCodeBlockComponent {...args} />
)

export const Light = Template.bind({})
Light.decorators = [StoreDecorator({})]

export const Dark = Template.bind({})
Dark.decorators = [ThemeDecorator(Theme.DARK), StoreDecorator({})]

export const Blood = Template.bind({})
Blood.decorators = [ThemeDecorator(Theme.BLOOD), StoreDecorator({})]
