import { Article, ArticleSortField, ArticleView } from "@/entities/Article"
import { EntityState } from "@reduxjs/toolkit"
import { SortOrder } from "@/shared/types"
import { ArticleType } from "@/entities/Article/model/types/article"

export type ArticleTabsType = ArticleType | "ALL"

export interface ArticlesPageSchema extends EntityState<Article> {
  isLoading?: boolean
  error?: string

  // pagination
  page: number
  limit?: number
  hasMore: boolean

  // filters
  order: SortOrder
  view: ArticleView
  sort: ArticleSortField
  search: string
  type: ArticleTabsType

  _inited: boolean
}
