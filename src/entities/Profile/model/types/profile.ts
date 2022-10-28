import { Currency } from "@/entities/Currency/model/types/currency"
import { Country } from "@/entities/Country/model/types/country"

export interface Profile {
  first?: string
  lastname?: string
  age?: number
  city?: string
  username?: string
  avatar?: string
  currency?: Currency
  country?: Country
}

export interface ProfileSchema {
  data?: Profile
  form?: Profile
  isLoading: boolean
  error?: string
  readonly: boolean
}
