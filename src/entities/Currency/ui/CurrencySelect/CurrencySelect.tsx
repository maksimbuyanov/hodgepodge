import { FC, memo, useCallback, useMemo } from "react"
import { ListBox } from "@/shared/ui"
import { Currency } from "../../model/types/currency"
import { useTranslation } from "react-i18next"

interface CurrencySelectProps {
  className?: string
  value?: Currency
  onChange?: (value: Currency) => void
  readOnly?: boolean
}

export const CurrencySelect: FC<CurrencySelectProps> = props => {
  const { className = "", value, onChange, readOnly = false } = props
  const { t } = useTranslation("profile")
  const options = useMemo(() => {
    return [
      { value: Currency.RUB, content: "Rus" },
      { value: Currency.EUR, content: "Euro" },
      { value: Currency.USD, content: "US Dollar" },
    ]
  }, [])
  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Currency)
    },
    [onChange]
  )
  return (
    <ListBox
      className={className}
      readOnly={readOnly}
      onChange={onChangeHandler}
      options={options}
      value={value}
      defaultValue={t("Валюта")}
      label={t("Валюта")}
      direction={"top"}
    />
  )
}

export default memo(CurrencySelect)
