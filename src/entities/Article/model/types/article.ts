import { User } from "@/entities/User"

export enum ArticleSortField {
  VIEWS = "views",
  TITLE = "title",
  CREATED = "createdAt",
}

export type ArticleBlock =
  | ArticleCodeBlock
  | ArticleImageBlock
  | ArticleTextBlock
  | ArticleCopyrightBlock

export enum ArticleBlockType {
  CODE = "CODE",
  IMAGE = "IMAGE",
  TEXT = "TEXT",
  COPYRIGHT = "COPYRIGHT",
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
export interface ArticleCopyrightBlock extends ArticleBlockBase {
  type: ArticleBlockType.COPYRIGHT
  text?: string
  url?: string
}

export enum ArticleType {
  ABOUT_BOY = "Про мальчика",
  ABOUT_GIRL = "Про девочку",
  ABOUT_ANIMAL = "Про зверешку",
  ABOUT_FAUNA = "Про природу",
  DREAM = "Сказка",
  RUSSIAN = "Русская",
  NO_RUSSIAN = "Зарубежная",
  WEB_DEV = "Разработка веб-сайтов",
  JS = "JavaScript",
  TS = "TypeScriptttt",
}

export interface Article {
  id: string
  title: string
  image: string
  subtitle: string
  views: number
  user: User
  createdAt: string
  type: ArticleType[]
  blocks: ArticleBlock[]
}

export enum ArticleView {
  COLUMN = "column",
  GRID = "grid",
}
