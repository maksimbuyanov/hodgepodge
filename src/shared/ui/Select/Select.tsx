import { ChangeEvent, FC, memo, useMemo } from "react"
import cls from "./Select.module.scss"
import { classNames, Mods } from "@/shared/lib"

export interface SelectOption {
  value: string
  content: string
}

interface SelectProps {
  className?: string
  label?: string
  options?: SelectOption[]
  value?: string
  onChange?: (value: string) => void
  readOnly?: boolean
}

export const Select: FC<SelectProps> = props => {
  const {
    className = "",
    label,
    options,
    value,
    onChange,
    readOnly = false,
  } = props
  const mods: Mods = {
    [cls.readOnly]: readOnly,
  }
  const optionsList = useMemo(() => {
    return options?.map(opt => {
      return (
        <option className={cls.options} value={opt.value} key={opt.value}>
          {opt.content}
        </option>
      )
    })
  }, [options])
  const onChangeHandler = (e: ChangeEvent<HTMLSelectElement>): void => {
    onChange?.(e.target.value)
  }
  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.lavel}>{label + " >"}</span>}
      <select
        className={cls.select}
        value={value}
        onChange={onChangeHandler}
        disabled={readOnly}
      >
        {optionsList}
      </select>
    </div>
  )
}
export default memo(Select)
