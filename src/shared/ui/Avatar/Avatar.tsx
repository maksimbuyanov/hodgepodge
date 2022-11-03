import { CSSProperties, FC, useMemo } from "react"
import cls from "./Avatar.module.scss"
import { classNames } from "@/shared/lib"

interface AvatarProps {
  className?: string
  src?: string
  size?: number
  alt?: string
}

export const Avatar: FC<AvatarProps> = props => {
  const { className = "", src, size = 50, alt } = props
  const styles = useMemo<CSSProperties>(() => {
    return {
      height: size,
      width: size,
    }
  }, [size])

  return (
    <img
      className={classNames(cls.Avatar, {}, [className])}
      src={src}
      style={styles}
      alt={alt}
    />
  )
}
