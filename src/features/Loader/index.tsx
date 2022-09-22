import { FC } from "react"
import { Spinner } from "@/shared/ui"
import { SpinnerStatusEnum } from "@/shared/ui/Spinner/Spinner"

export const Loader: FC = () => <Spinner status={SpinnerStatusEnum.on} />
