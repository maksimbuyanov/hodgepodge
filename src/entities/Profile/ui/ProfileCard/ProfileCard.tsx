import { FC } from "react"
import cls from "./ProfileCard.module.scss"
import { classNames, Mods } from "@/shared/lib"
import { useTranslation } from "react-i18next"
import { Avatar, Input, Text, TextAlign, TextTheme } from "@/shared/ui"
import { Profile } from "../../model/types/profile"
import { Loader } from "@/features/Loader"
import { CurrencySelect, Currency } from "@/entities/Currency"
import { Country, CountrySelect } from "@/entities/Country"

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  readOnly?: boolean
  isLoading?: boolean
  onChangeFirstname?: (data?: string) => void
  onChangeLastname?: (data?: string) => void
  onChangeCity?: (data?: string) => void
  onChangeCountry?: (data: Country) => void
  onChangeCurrency?: (data: Currency) => void
  onChangeAge?: (data?: string) => void
  onChangeUsername?: (data?: string) => void
  onChangeAvatar?: (data?: string) => void
}

export const ProfileCard: FC<ProfileCardProps> = props => {
  const {
    className = "",
    data,
    isLoading,
    error,
    readOnly,
    onChangeFirstname,
    onChangeLastname,
    onChangeAge,
    onChangeCity,
    onChangeCountry,
    onChangeCurrency,
    onChangeUsername,
    onChangeAvatar,
  } = props
  const { t } = useTranslation("profile")

  const mods: Mods = {
    [cls.editind]: !readOnly,
  }

  if (error) {
    return (
      // TODO Добавить интернационализацию, СТОИТ ЛИ ВООБЩЕ ОСТАВЛЯТЬ?!
      <div className={classNames(cls.ProfileCard, {}, [cls.error])}>
        <Text theme={TextTheme.Error} title={error} align={TextAlign.CENTER} />
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [cls.loading])}>
        <Loader />
      </div>
    )
  }
  return (
    <div className={classNames(cls.ProfileCard, mods, [className])}>
      <div className={cls.data}>
        {data?.avatar && (
          <div className={cls.avatarWrapper}>
            <Avatar
              size={150}
              src={data.avatar}
              alt={`Аватар ${data?.username ?? ""}`}
            />
          </div>
        )}
        <Input
          value={data?.username}
          placeholder={t("Имя пользователя")}
          className={cls.input}
          onChange={onChangeUsername}
          readOnly={readOnly}
        />
        <Input
          value={data?.first}
          placeholder={t("Ваше имя")}
          className={cls.input}
          onChange={onChangeFirstname}
          readOnly={readOnly}
        />
        <Input
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
          className={cls.input}
          onChange={onChangeLastname}
          readOnly={readOnly}
        />
        <Input
          value={data?.age}
          placeholder={t("Возраст")}
          className={cls.input}
          onChange={onChangeAge}
          readOnly={readOnly}
        />
        <CurrencySelect
          className={cls.input}
          readOnly={readOnly}
          value={data?.currency}
          onChange={onChangeCurrency}
        />
        <CountrySelect
          className={cls.input}
          readOnly={readOnly}
          value={data?.country}
          onChange={onChangeCountry}
        />
        <Input
          value={data?.city}
          placeholder={t("Город")}
          className={cls.input}
          onChange={onChangeCity}
          readOnly={readOnly}
        />
        <Input
          value={__PROJECT__ === "storybook" ? "storybook path" : data?.avatar}
          placeholder={t("Аватар")}
          className={cls.input}
          onChange={onChangeAvatar}
          readOnly={readOnly}
        />
      </div>
    </div>
  )
}
