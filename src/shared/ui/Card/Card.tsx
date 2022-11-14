import { FC, HTMLAttributes } from "react"
import cls from "./Card.module.scss"
import { classNames } from "@/shared/lib"

interface CardProps extends HTMLAttributes<HTMLDivElement> {
  className?: string
}

export const Card: FC<CardProps> = props => {
  const { className = "", children, ...otherProps } = props
  return (
    <div className={classNames(cls.Card, {}, [className])} {...otherProps}>
      {children}
    </div>
  )
}
