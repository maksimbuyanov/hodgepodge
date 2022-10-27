import { FC } from "react"
import cls from "./ProfileCard.module.scss"
import { classNames } from "@/shared/lib"
import { useTranslation } from "react-i18next"
import { Input, Text, TextAlign, TextTheme } from "@/shared/ui"
import { Profile } from "../../model/types/profile"
import { Loader } from "@/features/Loader"

interface ProfileCardProps {
  className?: string
  data?: Profile
  error?: string
  readOnly?: boolean
  isLoading?: boolean
  onChangeFirstname: (data?: string) => void
  onChangeLastname: (data?: string) => void
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
  } = props
  const { t } = useTranslation("profile")

  if (error) {
    return (
      // TODO Добавить интернациализацию
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
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.data}>
        <Input
          value={data?.username}
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
      </div>
    </div>
  )
}
