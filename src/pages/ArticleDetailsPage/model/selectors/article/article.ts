import { createSelector } from "@reduxjs/toolkit"
import { getArticleDetailsData } from "@/entities/Article"
import { getUserData } from "@/entities/User"

export const isUserOwnerArticle = createSelector(
  getArticleDetailsData,
  getUserData,
  (article, user) => {
    if (!article || !user) {
      return false
    }
    return article?.user.id === user?.id
  }
)
