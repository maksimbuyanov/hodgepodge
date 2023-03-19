import { ReactNode } from "react"
import { MemoryRouter } from "react-router-dom"
import i18nForTest from "@/shared/config/i18n/i18nForTest"
import { I18nextProvider } from "react-i18next"
import { render, RenderResult } from "@testing-library/react"
import { StateSchema, StoreProvider } from "@/app/providers/StoreProvider"
import { ReducersMapObject } from "@reduxjs/toolkit"

interface componentRenderOptions {
  route: string
  initialState?: DeepPartial<StateSchema>
  asyncReducer?: DeepPartial<ReducersMapObject<StateSchema>>
}

export function componentRender(
  component: ReactNode,
  options: componentRenderOptions = { route: "/" }
): RenderResult {
  const { route, initialState, asyncReducer } = options
  return render(
    <MemoryRouter initialEntries={[route]}>
      <StoreProvider initialState={initialState} asyncReducers={asyncReducer}>
        <I18nextProvider i18n={i18nForTest}>{component}</I18nextProvider>
      </StoreProvider>
    </MemoryRouter>
  )
}
