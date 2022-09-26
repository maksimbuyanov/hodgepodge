import { FC } from "react"
import { Spinner, SpinnerStatusEnum } from "@/shared/ui"

export const Loader: FC = () => {
  return <Spinner status={SpinnerStatusEnum.on} />
}
