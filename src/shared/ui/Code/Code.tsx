import { FC, memo, ReactNode } from "react"
import cls from "./Code.module.scss"
import { classNames } from "@/shared/lib"
import { Button } from "@/shared/ui"

interface CodeProps {
  className?: string
  children: ReactNode
}

export const Code: FC<CodeProps> = props => {
  const { className = "", children } = props
  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button className={cls.copy_button}>COPY</Button>
      <code>{children}</code>
    </pre>
  )
}

export default memo(Code)
