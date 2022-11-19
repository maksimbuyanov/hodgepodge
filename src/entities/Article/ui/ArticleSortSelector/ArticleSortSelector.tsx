import { FC, memo, useCallback, useMemo } from "react"
import cls from "./ArticleSortSelector.module.scss"
import { classNames } from "@/shared/lib"
import { Select, SelectOption } from "@/shared/ui"
import { useTranslation } from "react-i18next"
import { ArticleSortField } from "@/entities/Article"
import { SortOrder } from "@/shared/types"

interface ArticleSortSelectorProps {
  className?: string
  sort: ArticleSortField
  order: SortOrder
  onChangeOrder: (value: SortOrder) => void
  onChangeSort: (value: ArticleSortField) => void
}

export const ArticleSortSelector: FC<ArticleSortSelectorProps> = props => {
  const { className = "", onChangeSort, onChangeOrder, sort, order } = props
  const { t } = useTranslation("article")
  const orderOptions = useMemo<Array<SelectOption<SortOrder>>>(
    () => [
      {
        content: t("возрастанию"),
        value: "asc",
      },
      { value: "desc", content: t("убыванию") },
    ],
    [t]
  )
  const sortFieldOptions = useMemo<Array<SelectOption<ArticleSortField>>>(
    () => [
      {
        content: t("созданию"),
        value: ArticleSortField.CREATED,
      },
      {
        content: t("заголовку"),
        value: ArticleSortField.TITLE,
      },
      {
        content: t("просмотрам"),
        value: ArticleSortField.VIEWS,
      },
    ],
    [t]
  )

  return (
    <div className={classNames(cls.ArticleSortSelector, {}, [className])}>
      <Select<ArticleSortField>
        className={cls.sort}
        label={t("Сортировать ПО")}
        options={sortFieldOptions}
        value={sort}
        onChange={onChangeSort}
      />
      <Select<SortOrder>
        label={t("по")}
        options={orderOptions}
        value={order}
        onChange={onChangeOrder}
      />
    </div>
  )
}

export default memo(ArticleSortSelector)
