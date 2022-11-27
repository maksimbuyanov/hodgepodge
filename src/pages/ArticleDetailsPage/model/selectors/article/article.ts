import { createSelector } from "@reduxjs/toolkit"
import { getArticleDetailsData } from "@/entities/Article"
import { getUserData } from "@/entities/User"

export const isUserOwnerArticle = createSelector(
  getArticleDetailsData,
  getUserData,
  (article, user) => {
    if (!article || !article.user || !user) {
      return false
    }
    const articleUserId = article?.user.id
    const userId = user?.id

    return articleUserId === userId
  }
)
