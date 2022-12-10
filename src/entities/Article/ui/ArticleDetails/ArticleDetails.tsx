import { FC, memo, ReactNode, useCallback, useEffect } from "react"
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
import {
  Avatar,
  HStack,
  Icon,
  Skeleton,
  Text,
  TextAlign,
  TextSize,
  TextTheme,
  VStack,
} from "@/shared/ui"
import { useTranslation } from "react-i18next"
import EyeIcon from "@/shared/assets/eye-20-20.svg"
import CalendarIcon from "@/shared/assets/calendar-20-20.svg"
import { ArticleBlock, ArticleBlockType } from "../../model/types/article"
import ArticleCodeBlockComponent from "../ArticleCodeBlockComponent/ArticleCodeBlockComponent"
import ArticleImageBlockComponent from "../ArticleImageBlockComponent/ArticleImageBlockComponent"
import ArticleTextBlockComponent from "../ArticleTextBlockComponent/ArticleTextBlockComponent"
import { parseViewers } from "../../model/lib/parseViewers/parseViewers"
import ArticleCopyrightBlockComponent from "../ArticleCopyrightBlockComponent/ArticleCopyrightBlockComponent"

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
  const isLoading = useSelector(getArticleDetailsIsLoading)
  const article = useSelector(getArticleDetailsData)
  const error = useSelector(getArticleDetailsError)

  const renderBlock = useCallback((block: ArticleBlock) => {
    switch (block.type) {
      case ArticleBlockType.CODE:
        return <ArticleCodeBlockComponent block={block} key={block.id} />
      case ArticleBlockType.IMAGE:
        return <ArticleImageBlockComponent block={block} key={block.id} />
      case ArticleBlockType.TEXT:
        return <ArticleTextBlockComponent block={block} key={block.id} />
      case ArticleBlockType.COPYRIGHT:
        return <ArticleCopyrightBlockComponent block={block} key={block.id} />
      default:
        return null
    }
  }, [])

  let content: ReactNode

  useEffect(() => {
    if (__PROJECT__ !== "storybook") void dispatch(fetchArticleById(id))
  }, [dispatch, id])
  if (isLoading) {
    content = (
      <>
        <Skeleton
          width={200}
          height={200}
          border={"50%"}
          className={cls.avatar}
        />
        <Skeleton width={300} height={40} />
        <Skeleton width={600} height={30} />
        <Skeleton width={"100%"} height={200} />
        <Skeleton width={"100%"} height={200} />
      </>
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
    content = (
      <>
        <Avatar
          src={article?.image}
          size={200}
          alt={article?.title}
          className={cls.avatar}
        />
        <VStack gap={"8"}>
          <Text
            title={article?.title}
            text={article?.subtitle}
            size={TextSize.L}
          />
          <HStack gap={"8"} align={"center"}>
            <Icon Svg={EyeIcon} />
            <Text text={parseViewers(article?.views)} />
          </HStack>
          <HStack gap={"8"} align={"center"}>
            <Icon Svg={CalendarIcon} />
            <Text text={article?.createdAt} />
          </HStack>
        </VStack>
        {article?.blocks.map(renderBlock)}
      </>
    )
  }

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack
        gap={"16"}
        max={true}
        className={classNames(cls.ArticleDetails, {}, [className])}
      >
        {content}
      </VStack>
    </DynamicModuleLoader>
  )
}
export default memo(ArticleDetails)
