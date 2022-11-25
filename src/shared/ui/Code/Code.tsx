import { FC, memo, useCallback } from "react"
import cls from "./Code.module.scss"
import { classNames } from "@/shared/lib"
import { Button, ButtonTheme, Icon } from "@/shared/ui"
import CopyIcon from "@/shared/assets/copy.svg"

interface CodeProps {
  className?: string
  text: string
}

export const Code: FC<CodeProps> = props => {
  const { className = "", text } = props

  const onCopy = useCallback(() => {
    void navigator.clipboard.writeText(text)
  }, [text])
  return (
    <pre className={classNames(cls.Code, {}, [className])}>
      <Button
        className={cls.copy_button}
        theme={ButtonTheme.CLEAR}
        onClick={onCopy}
      >
        <Icon Svg={CopyIcon} className={cls.icon} />
      </Button>
      <code>{text}</code>
    </pre>
  )
}

export default memo(Code)
