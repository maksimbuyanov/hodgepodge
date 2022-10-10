import { FC, useEffect, useState } from "react"
import { Button, ButtonTheme } from "@/shared/ui"

interface BudButtonProps {
  className?: string
}

export const BudButton: FC<BudButtonProps> = () => {
  const [error, setError] = useState(false)
  const throwFn = (): void => {
    setError(true)
  }
  useEffect(() => {
    if (error) {
      throw new Error("Ha Ha Ha")
    }
  }, [error])
  return (
    <Button theme={ButtonTheme.ERROR} onClick={throwFn}>
      #####
    </Button>
  )
}
