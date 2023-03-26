import { FC, memo } from "react"
import cls from "./Text.module.scss"
import { classNames } from "@/shared/lib"

export const TextTheme = {
  Primary: "primary",
  Error: "error",
  Bold: "bold",
  Inverted: "inverted",
} as const
type TextThemeType = valueOf<typeof TextTheme>

export const TextAlign = {
  RIGHT: "right",
  LEFT: "left",
  CENTER: "center",
} as const
type TextAlignType = valueOf<typeof TextAlign>

export const TextSize = {
  XL: "size_xl",
  M: "size_m",
  L: "size_l",
  S: "size_s",
} as const
type TextSizeType = valueOf<typeof TextSize>

type HeaderTagType = "h1" | "h2" | "h3" | "h4"

const mapSizeToHeaderTag: Record<TextSizeType, HeaderTagType> = {
  [TextSize.XL]: "h1",
  [TextSize.L]: "h2",
  [TextSize.M]: "h3",
  [TextSize.S]: "h4",
}

export interface TextProps {
  className?: string
  title?: string
  text?: string
  theme?: TextThemeType
  align?: TextAlignType
  size?: TextSizeType
  "data-testid"?: string
}

export const Text: FC<TextProps> = props => {
  const {
    className = "",
    title = "",
    text = "",
    theme = TextTheme.Primary,
    align = TextAlign.LEFT,
    size = TextSize.M,
    "data-testid": dataTestId = "Text",
  } = props

  const HeaderTag = mapSizeToHeaderTag[size]

  return (
    <div
      className={classNames(cls.Text, {}, [
        className,
        cls[theme],
        cls[align],
        cls[size],
      ])}
    >
      {title && (
        <HeaderTag className={cls.title} data-testid={`${dataTestId}.Header`}>
          {title}
        </HeaderTag>
      )}
      {text && (
        <p className={cls.text} data-testid={`${dataTestId}.Text`}>
          {text}
        </p>
      )}
    </div>
  )
}

export default memo(Text)
