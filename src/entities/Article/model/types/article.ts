export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock

export enum ArticleBlockType {
  CODE = "CODE",
  IMAGE = "IMAGE",
  TEXT = "TEXT",
}

export interface ArticleBlockBase {
  id: string
  type: ArticleBlockType
}
export interface ArticleCodeBlock extends ArticleBlockBase {
  type: ArticleBlockType.CODE
  code: string
}
export interface ArticleImageBlock extends ArticleBlockBase {
  type: ArticleBlockType.IMAGE
  src: string
  title: string
}
export interface ArticleTextBlock extends ArticleBlockBase {
  type: ArticleBlockType.TEXT
  title?: string
  paragraphs: string[]
}

export enum ArticleType {
  ПРО_МАЛЬЧИКА = "Про мальчика",
  ПРО_ДЕВОЧКУ = "Про девочку",
  ПРО_ЗВЕРЮШКУ = "Про зверешку",
  ПРО_ПРИРОДУ = "Про природу",
  СКАЗКА = "Сказка",
  РУССКАЯ = "Русская",
  ЗАРУБЕЖНАЯ = "Зарубежная",
}

export interface Article {
  id: string
  title: string
  image: string
  subtitle: string
  views: number
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}
