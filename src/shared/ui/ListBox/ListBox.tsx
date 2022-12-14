import { FC, Fragment, ReactNode } from "react"
import cls from "./ListBox.module.scss"
import { classNames } from "@/shared/lib"
import { Listbox as HListBox } from "@headlessui/react"
import { Button, ButtonTheme, HStack } from "@/shared/ui"
import { DropdownDirection } from "../../types/ui"

export interface option {
  value: string
  content: ReactNode
  disabled?: boolean
}

interface ListBoxProps {
  className?: string
  options?: option[]
  value?: string
  defaultValue?: string
  onChange: <T extends string>(value: T) => void
  readOnly?: boolean
  direction?: DropdownDirection
  label?: string
}

export const ListBox: FC<ListBoxProps> = props => {
  const {
    className = "",
    options,
    defaultValue,
    value,
    onChange,
    readOnly = false,
    direction = "bottom right",
    label,
  } = props

  return (
    <HStack gap={"4"}>
      {label && <span className={cls.label}>{label + " >"}</span>}
      <HListBox
        as={"div"}
        onChange={onChange}
        value={value}
        className={classNames(cls.ListBox, {}, [className])}
        disabled={readOnly}
      >
        <HListBox.Button className={cls.trigger} disabled={readOnly}>
          <Button disabled={readOnly} theme={ButtonTheme.OUTLINE}>
            {value ?? defaultValue}
          </Button>
        </HListBox.Button>
        <HListBox.Options
          className={classNames(cls.options, {}, [cls[direction]])}
        >
          {options?.map(option => {
            return (
              <HListBox.Option
                value={option.value}
                key={option.value}
                as={Fragment}
                disabled={option.disabled}
              >
                {item => {
                  const { selected, active, disabled } = item
                  return (
                    <li
                      className={classNames(cls.item, {
                        [cls.active]: active,
                        [cls.selected]: selected,
                        [cls.disabled]: disabled,
                      })}
                    >
                      {option.content}
                    </li>
                  )
                }}
              </HListBox.Option>
            )
          })}
        </HListBox.Options>
      </HListBox>
    </HStack>
  )
}
