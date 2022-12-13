import { FC } from "react"
import { Flex, FlexProps } from "../Fkex/Flex"

type HStackProps = Omit<FlexProps, "direction">
export const HStack: FC<HStackProps> = props => {
  return <Flex direction="row" {...props} />
}
