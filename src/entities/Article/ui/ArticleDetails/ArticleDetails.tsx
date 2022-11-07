import { FC } from "react"
import cls from "./ArticleDetails.module.scss"
import { classNames, DynamicModuleLoader } from "@/shared/lib"
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice"

interface ArticleDetailsProps {
  className?: string
}

export const ArticleDetails: FC<ArticleDetailsProps> = props => {
  const { className = "" } = props
  return (
    <DynamicModuleLoader
      reducers={articleDetailsReducer}
      removeAfterUnmount={true}
    >
      <div className={classNames(cls.ArticleDetails, {}, [className])}></div>
    </DynamicModuleLoader>
  )
}
