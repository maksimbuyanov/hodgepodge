import { Story } from "@storybook/react"
import { ReactElement } from "react"
import { BrowserRouter } from "react-router-dom"

export const RouterDecoratod = (Storie: Story): ReactElement => {
  return (
    <BrowserRouter>
      <Storie />
    </BrowserRouter>
  )
}
