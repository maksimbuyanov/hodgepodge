import { FC, memo, useCallback, useMemo } from "react"
import { Country } from "../model/types/country"
import { useTranslation } from "react-i18next"
import { ListBox } from "@/shared/ui"

interface CountrySelectProps {
  className?: string
  value?: Country
  onChange?: (value: Country) => void
  readOnly?: boolean
}

export const CountrySelect: FC<CountrySelectProps> = props => {
  const { className = "", onChange, value, readOnly } = props
  const { t } = useTranslation("profile")
  const options = useMemo(() => {
    return [
      { value: Country.RU, content: "Rus" },
      { value: Country.AZ, content: "Azer" },
      { value: Country.BY, content: "Belarus" },
    ]
  }, [])
  const onChangeHandler = useCallback(
    (value: string) => {
      onChange?.(value as Country)
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
      defaultValue={t("Страна")}
      label={t("Страна")}
      direction={"top"}
    />
  )
  // return (
  //   <Select
  //     className={className}
  //     value={value}
  //     onChange={onChangeHandler}
  //     label={t("Страна")}
  //     options={options}
  //     readOnly={readOnly}
  //   />
  // )
}
export default memo(CountrySelect)
