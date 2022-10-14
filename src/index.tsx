import React from "react"
import { render } from "react-dom"
import { BrowserRouter } from "react-router-dom"
import { ThemeProvider } from "@/app/providers/ThemeProvider/"
import App from "./app/App"
import "@/shared/config/i18n"
import { ErrorBoundary } from "@/app/providers/ErrorBoundary"
import { StoreProvider } from "@/app/providers/StoreProvider"

const root = document.getElementById("root")

render(
  <BrowserRouter>
    <ErrorBoundary>
      <StoreProvider>
        <ThemeProvider>
          <App />
        </ThemeProvider>
      </StoreProvider>
    </ErrorBoundary>
  </BrowserRouter>,
  root
)
