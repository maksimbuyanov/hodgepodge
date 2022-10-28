import {
  FC,
  InputHTMLAttributes,
  memo,
  useEffect,
  useRef,
  useState,
} from "react"
import cls from "./Input.module.scss"
import { classNames, Mods } from "@/shared/lib"

type HTMLInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "value" | "onChange" | "readOnly"
>

interface InputProps extends HTMLInputProps {
  className?: string
  value?: string | number
  onChange?: (value: string) => void
  placeholder?: string
  autoFocus?: boolean
  readOnly?: boolean
}

export const Input: FC<InputProps> = memo(function InputWithoutMemo(
  props: InputProps
) {
  const {
    className = "",
    value,
    onChange,
    type = "text",
    placeholder,
    autoFocus,
    readOnly = false,
    ...otherProps
  } = props

  const [isFocuser, setIsFocuser] = useState(false)

  const isCaretVisible = isFocuser && !readOnly

  const [caretPosition, setCaretPosition] = useState(0)
  const ref = useRef<HTMLInputElement>()

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    onChange?.(e.target.value)
    setCaretPosition(e.target.value.length)
  }

  useEffect(() => {
    if (autoFocus) {
      setIsFocuser(true)
      ref.current?.focus()
    }
  }, [autoFocus])

  const onBlur = (): void => {
    setIsFocuser(false)
  }
  const onFocus = (): void => {
    setIsFocuser(true)
  }
  const onSelect = (e: any): void => {
    setCaretPosition(e?.target?.selectionStart || 0)
  }

  const mods: Mods = {
    [cls.readOnly]: readOnly,
  }

  return (
    <div className={classNames(cls.InputWrapper, mods, [className])}>
      {placeholder && <div className={cls.placeholder}>{`${placeholder}`}</div>}
      <div className={cls.caretWrapper}>
        <input
          className={cls.input}
          value={value}
          onChange={onChangeHandler}
          type={type}
          onFocus={onFocus}
          onBlur={onBlur}
          onSelect={onSelect}
          autoFocus={autoFocus}
          ref={ref as any}
          readOnly={readOnly}
          {...otherProps}
        />
        {isCaretVisible && (
          <span
            className={cls.caret}
            style={{ left: `${caretPosition * 10}px` }} // TODO подобрать шрифт у коготоро все символы одной ширины (моноширинный)
          />
        )}
      </div>
    </div>
  )
})
