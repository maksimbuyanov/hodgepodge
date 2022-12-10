import { DetailedHTMLProps, FC, HTMLAttributes, ReactNode } from "react"
import cls from "./Flex.module.scss"
import { classNames, Mods } from "@/shared/lib"

export type FlexJustify =
  | "center"
  | "between"
  | "around"
  | "start"
  | "end"
  | "evenly"
export type FlexAlign = "start" | "end" | "center" | "stretch" | "baseLine"
export type FlexDirection = "row" | "column"
export type FlexGap = "4" | "8" | "16" | "32"

const justifyClasses: Record<FlexJustify, string> = {
  center: cls.justifyCenter,
  around: cls.justifyAround,
  end: cls.justifyEnd,
  between: cls.justifyBetween,
  evenly: cls.justifyEvenly,
  start: cls.justifyStart,
}

const alignClasses: Record<FlexAlign, string> = {
  center: cls.alignCenter,
  end: cls.alignEnd,
  start: cls.alignStart,
  stretch: cls.alignStretch,
  baseLine: cls.alignBaseline,
}

const directionClasses: Record<FlexDirection, string> = {
  row: cls.directionRow,
  column: cls.directionColumn,
}

const gapClasses: Record<FlexGap, string> = {
  "8": cls.gap8,
  "4": cls.gap4,
  "16": cls.gap16,
  "32": cls.gap32,
}

type DivProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>

export interface FlexProps extends DivProps {
  className?: string
  children: ReactNode
  justify?: FlexJustify
  align?: FlexAlign
  direction?: FlexDirection
  gap?: FlexGap
  max?: boolean
}

export const Flex: FC<FlexProps> = props => {
  const {
    className = "",
    children,
    justify = "start",
    direction = "row",
    align = "center",
    gap,
    max,
  } = props
  const mods: Mods = {
    [cls.max]: max,
  }
  const classes = [
    className,
    justifyClasses[justify],
    alignClasses[align],
    directionClasses[direction],
    gap && gapClasses[gap],
  ]
  return <div className={classNames(cls.Flex, mods, classes)}>{children}</div>
}
