import React, { FC, memo } from "react"
import cls from "./Icon.module.scss"
import { classNames } from "@/shared/lib"

interface IconProps {
  className?: string
  Svg: React.VFC<React.SVGProps<SVGSVGElement>>
}

const Icon: FC<IconProps> = props => {
  const { className = "", Svg } = props
  return <Svg className={classNames(cls.Icon, {}, [className])} />
}

export default memo(Icon)
