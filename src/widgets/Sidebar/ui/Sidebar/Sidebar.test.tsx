import { fireEvent, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import { componentRender } from "@/shared/lib/componentRender"

describe("Sidebar", () => {
  test("render", () => {
    componentRender(<Sidebar />)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  })
  test("render", () => {
    componentRender(<Sidebar />)
    const toggleButton = screen.getByTestId("sidebar-toggle")
    expect(screen.getByTestId("sidebar-toggle")).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
  })
})
