import { FC, HTMLAttributes } from "react"
import cls from "./Card.module.scss"
import { classNames } from "@/shared/lib"

export enum CardTheme {
  NORMAL = "normal",
  OUTLINED = "outlined",
}

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
  theme?: CardTheme
}

export const Card: FC<CardProps> = props => {
  const {
    className = "",
    theme = CardTheme.NORMAL,
    children,
    ...otherProps
  } = props
  return (
    <div
      className={classNames(cls.Card, {}, [className, cls[theme]])}
      {...otherProps}
    >
      {children}
    </div>
  )
}
