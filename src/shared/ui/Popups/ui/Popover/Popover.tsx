import { FC, memo, ReactNode } from "react"
import cls from "./Popover.module.scss"
import { classNames } from "@/shared/lib"
import { DropdownDirection } from "@/shared/types/ui"
import popupCls from "../../styles/popups.module.scss"
import { Popover as BasePopover } from "@headlessui/react"

interface PopoverProps {
  className?: string
  trigger: ReactNode
  direction?: DropdownDirection
  children: ReactNode
}

const Popover: FC<PopoverProps> = props => {
  const {
    className = "",
    trigger,
    direction = "bottom right",
    children,
  } = props
  return (
    <BasePopover className={classNames(cls.Popover, {}, [className])}>
      <BasePopover.Button className={popupCls.trigger}>
        {trigger}
      </BasePopover.Button>
      <BasePopover.Panel
        className={classNames(cls.panel, {}, [popupCls[direction]])}
      >
        {children}
      </BasePopover.Panel>
    </BasePopover>
  )
}

export const MemoPopover = memo(Popover)
