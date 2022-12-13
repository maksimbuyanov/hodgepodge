import { FC } from "react"
import cls from "./ProfileCard.module.scss"
import { classNames, Mods } from "@/shared/lib"
import { useTranslation } from "react-i18next"
import {
  Avatar,
  HStack,
  Input,
  Text,
  TextAlign,
  TextTheme,
  VStack,
} from "@/shared/ui"
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
      <VStack
        align={"center"}
        justify={"center"}
        className={classNames(cls.ProfileCard, {}, [cls.error])}
      >
        <Text theme={TextTheme.Error} title={error} align={TextAlign.CENTER} />
      </VStack>
    )
  }

  if (isLoading) {
    return (
      <VStack
        align={"center"}
        justify={"center"}
        max={true}
        className={classNames(cls.ProfileCard, {}, [cls.loading])}
      >
        <Loader />
      </VStack>
    )
  }
  return (
    <VStack
      className={classNames(cls.ProfileCard, mods, [className])}
      max={true}
      gap={"8"}
    >
      {data?.avatar && (
        <HStack justify={"center"} max={true}>
          <Avatar
            size={150}
            src={data.avatar}
            alt={`Аватар ${data?.username ?? ""}`}
          />
        </HStack>
      )}
      <Input
        value={data?.username}
        placeholder={t("Имя пользователя")}
        onChange={onChangeUsername}
        readOnly={readOnly}
      />
      <Input
        value={data?.first}
        placeholder={t("Ваше имя")}
        onChange={onChangeFirstname}
        readOnly={readOnly}
      />
      <Input
        value={data?.lastname}
        placeholder={t("Ваша фамилия")}
        onChange={onChangeLastname}
        readOnly={readOnly}
      />
      <Input
        value={data?.age}
        placeholder={t("Возраст")}
        onChange={onChangeAge}
        readOnly={readOnly}
      />
      <CurrencySelect
        readOnly={readOnly}
        value={data?.currency}
        onChange={onChangeCurrency}
      />
      <CountrySelect
        readOnly={readOnly}
        value={data?.country}
        onChange={onChangeCountry}
      />
      <Input
        value={data?.city}
        placeholder={t("Город")}
        onChange={onChangeCity}
        readOnly={readOnly}
      />
      {!readOnly && (
        <Input
          value={__PROJECT__ === "storybook" ? "storybook path" : data?.avatar}
          placeholder={t("Аватар")}
          onChange={onChangeAvatar}
          readOnly={readOnly}
        />
      )}
    </VStack>
  )
}
