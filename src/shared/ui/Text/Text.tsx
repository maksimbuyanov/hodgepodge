import { FC, memo } from "react"
import cls from "./Text.module.scss"
import { classNames } from "@/shared/lib"

export enum TextTheme {
  Primary = "primary",
  Error = "error",
}

export interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextTheme
  align?: TextAlign
}

export enum TextAlign {
  RIGHT = "right",
  LEFT = "left",
  CENTER = "center",
}

export const Text: FC<TextProps> = props => {
  const {
    className = "",
    title = "",
    text = "",
    theme = TextTheme.Primary,
    align = TextAlign.LEFT,
  } = props

  return (
    <div
      className={classNames(cls.Text, {}, [className, cls[theme], cls[align]])}
    >
      {title && <p className={cls.title}>{title}</p>}
      {text && <p className={cls.text}>{text}</p>}
    </div>
  )
}

export default memo(Text)
