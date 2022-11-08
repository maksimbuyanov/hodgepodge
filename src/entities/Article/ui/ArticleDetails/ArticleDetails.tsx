import { FC, memo, ReactNode, useEffect } from "react"
import cls from "./ArticleDetails.module.scss"
import {
  classNames,
  DynamicModuleLoader,
  ReducersList,
  useAppDispatch,
} from "@/shared/lib"
import { articleDetailsReducer } from "../../model/slice/articleDetailsSlice"
import { fetchArticleById } from "../../model/services/fetchArticleById/fetchArticleById"
import { useSelector } from "react-redux"
import {
  getArticleDetailsData,
  getArticleDetailsError,
  getArticleDetailsIsLoading,
} from "../../model/selectors/articleDetails"
import { Skeleton, Text, TextAlign, TextTheme } from "@/shared/ui"
import { useTranslation } from "react-i18next"

interface ArticleDetailsProps {
  className?: string
  id: string
}

const reducers: ReducersList = {
  articleDetails: articleDetailsReducer,
}

export const ArticleDetails: FC<ArticleDetailsProps> = props => {
  const { className = "", id } = props
  const { t } = useTranslation("article")
  const dispatch = useAppDispatch()
  const isLoading = true
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)
  let content: ReactNode

  useEffect(() => {
    void dispatch(fetchArticleById(id))
  }, [dispatch, id])
  if (isLoading) {
    content = (
      <div className={cls.skeleton}>
        <Skeleton
          width={200}
          height={200}
          border={"50%"}
          className={cls.avatar}
        />
        <Skeleton width={300} height={32} className={cls.title} />
        <Skeleton width={600} height={24} />
        <Skeleton width={"100%"} height={200} />
        <Skeleton width={"100%"} height={200} />
      </div>
    )
  } else if (error) {
    content = (
      <Text
        text={t("Произошла ошибка при загрузке статьи")}
        align={TextAlign.CENTER}
        theme={TextTheme.Error}
      />
    )
  } else {
    content = <div> some text</div>
  }

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cls.ArticleDetails, {}, [className])}>
        {content}
      </div>
    </DynamicModuleLoader>
  )
}
export default memo(ArticleDetails)
