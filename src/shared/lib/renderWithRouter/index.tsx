import { ReactNode } from "react"
import { render } from "@testing-library/react"
import { MemoryRouter } from "react-router-dom"

interface renderWithRouterOptions {
  route: string
}

export function renderWithRouter(
  component: ReactNode,
  options: renderWithRouterOptions
): ReactNode {
  const { route } = options
  return render(
    <MemoryRouter initialEntries={[route]}>{component}</MemoryRouter>
  )
}
