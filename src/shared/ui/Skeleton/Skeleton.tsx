import { CSSProperties, FC, memo } from "react"
import cls from "./Skeleton.module.scss"
import { classNames } from "@/shared/lib"

interface SkeletonProps {
  className?: string
  height?: string | number
  width?: string | number
  border?: string
}

export const Skeleton: FC<SkeletonProps> = props => {
  const { className = "", height, width, border } = props
  const style: CSSProperties = {
    width,
    height,
    borderRadius: border,
  }
  return (
    <div className={classNames(cls.Skeleton, {}, [className])} style={style} />
  )
}

export default memo(Skeleton)
