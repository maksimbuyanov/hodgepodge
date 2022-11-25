import { FC, useMemo } from "react"
import { classNames } from "@/shared/lib"
import { TabItem, Tabs } from "@/shared/ui/Tabs/Tabs"
import { ArticleType } from "@/entities/Article/model/types/article"
import { useTranslation } from "react-i18next"

interface ArticleTabsProps {
  className?: string
  onChange: (tab: TabItem) => void
  value: string
}

export const ArticleTabs: FC<ArticleTabsProps> = props => {
  const { className = "", onChange, value } = props
  const { t } = useTranslation("article")
  const typeTabs = useMemo<TabItem[]>(() => {
    const arr: TabItem[] = [{ value: "ALL", content: t("Все статьи") }]
    Object.values(ArticleType).forEach(type => {
      arr.push({ value: type, content: t(type) })
    })
    return arr
  }, [t])

  return (
    <Tabs
      className={classNames("", {}, [className])}
      tabs={typeTabs}
      value={value}
      onTabClick={onChange}
    />
  )
}
