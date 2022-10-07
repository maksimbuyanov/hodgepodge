import { fireEvent, screen } from "@testing-library/react"
import { Sidebar } from "./Sidebar"
import { renderWithTranslations } from "@/shared/lib/renderWithTranslations"
renderwith

describe("Sidebar", () => {
  test("render", () => {
    renderWithTranslations(<Sidebar />)
    expect(screen.getByTestId("sidebar")).toBeInTheDocument()
  })
  test("render", () => {
    renderWithTranslations(<Sidebar />)
    const toggleButton = screen.getByTestId("sidebar-toggle")
    expect(screen.getByTestId("sidebar-toggle")).toBeInTheDocument()
    fireEvent.click(toggleButton)
    expect(screen.getByTestId("sidebar")).toHaveClass("collapsed")
  })
})
