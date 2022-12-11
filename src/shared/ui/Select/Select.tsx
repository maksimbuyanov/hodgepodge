import { ChangeEvent, useMemo } from "react"
import cls from "./Select.module.scss"
import { classNames, Mods } from "@/shared/lib"

export interface SelectOption<T extends string> {
  value: T
  content: string
}

interface SelectProps<T extends string> {
  className?: string
  label?: string
  options?: Array<SelectOption<T>>
  value?: T
  onChange?: (value: T) => void
  readOnly?: boolean
}

export const Select = <T extends string>(
  props: SelectProps<T>
): JSX.Element => {
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
    if (onChange) {
      onChange(e.target.value as T)
    }
  }
  return (
    <div className={classNames(cls.Wrapper, mods, [className])}>
      {label && <span className={cls.label}>{label + " >"}</span>}
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
