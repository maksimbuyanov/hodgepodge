import { rtkApi } from "@/shared/api/rtkApi"
import { Article } from "@/entities/Article"

const recommendationsApi = rtkApi.injectEndpoints({
  endpoints: build => {
    return {
      getArticleRecommendationsList: build.query<Article[], number>({
        query: limit => {
          return {
            url: "/articles",
            params: {
              _limit: limit,
            },
          }
        },
      }),
    }
  },
})
export const useArticleRecommendationsList =
  recommendationsApi.useGetArticleRecommendationsListQuery
