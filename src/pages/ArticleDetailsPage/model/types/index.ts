import { ArticleDetailsPageRecommendationsSchema } from "./articleDetailsPageRecommendationsSchema"
import { ArticleDetailsCommentsSchema } from "./ArticleDetailsPage"

export interface ArticleDetailsPageSchema {
  comments: ArticleDetailsCommentsSchema
  recommendations: ArticleDetailsPageRecommendationsSchema
}
