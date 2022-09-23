import { FC } from "react"
import "./Spinner.scss"

const ___SPINNER_EFFECT_DURATION = 1000

export enum SpinnerStatusEnum {
  "off",
  "on",
  "success",
  "fail",
}

interface T_SpinnerProps {
  status: SpinnerStatusEnum
}

export const Spinner: FC<T_SpinnerProps> = props => {
  const { status } = props

  switch (status) {
    case SpinnerStatusEnum.off:
      return null
    case SpinnerStatusEnum.on:
      return <div className="spinner-dual-ring" />
    case SpinnerStatusEnum.fail:
      return (
        <div className="fail-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip" />
            <span className="icon-line line-long" />
            <div className="icon-circle" />
            <div className="icon-fix" />
          </div>
        </div>
      )
    case SpinnerStatusEnum.success:
      return (
        <div className="success-checkmark">
          <div className="check-icon">
            <span className="icon-line line-tip" />
            <span className="icon-line line-long" />
            <div className="icon-circle" />
            <div className="icon-fix" />
          </div>
        </div>
      )
    default:
      return null
  }
}
