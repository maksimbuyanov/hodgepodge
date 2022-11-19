import { Article, ArticleSortField, ArticleView } from "@/entities/Article"
import { EntityState } from "@reduxjs/toolkit"
import { SortOrder } from "@/shared/types"

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

  _inited: boolean
}
