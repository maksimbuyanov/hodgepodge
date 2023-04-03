import { FC, Fragment, memo, ReactNode } from "react"
import cls from "./Dropdown.module.scss"
import { classNames } from "@/shared/lib"
import { Menu } from "@headlessui/react"
import { DropdownDirection } from "@/shared/types/ui"
import { AppLink } from "@/shared/ui"
import popupCls from "../../styles/popups.module.scss"

export interface DropDownItem {
  disabled?: boolean
  onClick?: () => void
  content?: ReactNode
  href?: string
}

interface DropdownProps {
  className?: string
  items: DropDownItem[]
  trigger: ReactNode
  direction?: DropdownDirection
}

const Dropdown: FC<DropdownProps> = props => {
  const { className = "", trigger, items, direction = "bottom right" } = props
  return (
    <Menu as={"div"} className={classNames(cls.Dropdown, {}, [className])}>
      <Menu.Button className={popupCls.trigger}>{trigger}</Menu.Button>
      <Menu.Items
        className={classNames(cls.options, {}, [popupCls[direction]])}
      >
        {items.map((item, index) => {
          if (item.href) {
            return (
              <Menu.Item
                as={AppLink}
                to={item.href}
                key={index}
                disabled={item.disabled}
              >
                {itemProps => {
                  const { disabled, active } = itemProps
                  return (
                    <li
                      onClick={item.onClick}
                      className={classNames(cls.option, {
                        [popupCls.active]: active,
                        [popupCls.disabled]: disabled,
                      })}
                    >
                      {item.content}
                    </li>
                  )
                }}
              </Menu.Item>
            )
          }
          return (
            <Menu.Item as={Fragment} key={index} disabled={item.disabled}>
              {itemProps => {
                const { disabled, active } = itemProps
                return (
                  <li
                    onClick={item.onClick}
                    className={classNames(cls.option, {
                      [cls.active]: active,
                      [cls.disabled]: disabled,
                    })}
                  >
                    {item.content}
                  </li>
                )
              }}
            </Menu.Item>
          )
        })}
      </Menu.Items>
    </Menu>
  )
}

export const MemoDropdown = memo(Dropdown)
