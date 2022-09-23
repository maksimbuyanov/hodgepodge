import type { FC } from "react"
import type { LinkProps } from "react-router-dom"
import { Link } from "react-router-dom"
import cls from "./AppLink.module.scss"
import { classNames } from "@/shared/lib"

export const enum AppLinkTheme {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

type AppLinkProps = {
  className?: string
  theme?: AppLinkTheme
} & LinkProps

export const AppLink: FC<AppLinkProps> = props => {
  const {
    className = "",
    children,
    to,
    theme = AppLinkTheme.PRIMARY,
    ...otherProps
  } = props
  return (
    <Link
      className={classNames(cls.AppLink, {}, [className, cls[theme]])}
      to={to}
      {...otherProps}
    >
      {children}
    </Link>
  )
}
