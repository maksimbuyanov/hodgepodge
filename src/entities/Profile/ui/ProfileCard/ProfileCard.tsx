import { FC } from "react"
import cls from "./ProfileCard.module.scss"
import { classNames } from "@/shared/lib"
import { useSelector } from "react-redux"
import { getProfileData } from "@/entities/Profile/model/selectors/getProfileData/getProfileData"
import { getProfileError } from "@/entities/Profile/model/selectors/getProfileError/getProfileError"
import { getProfileIsloading } from "@/entities/Profile/model/selectors/getProfileIsloading/getProfileIsloading"
import { useTranslation } from "react-i18next"
import { Button, ButtonTheme, Input, Text, TextTheme } from "@/shared/ui"

interface ProfileCardProps {
  className?: string
}

export const ProfileCard: FC<ProfileCardProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation("profile")
  const data = useSelector(getProfileData)
  const error = useSelector(getProfileError)
  const isLoading = useSelector(getProfileIsloading)
  if (error) {
    return (
      <div className={classNames(cls.ProfileCard, {}, [className])}>
        <Text theme={TextTheme.Error} title={error} />
      </div>
    )
  }
  return (
    <div className={classNames(cls.ProfileCard, {}, [className])}>
      <div className={cls.header}>
        <Text theme={TextTheme.Primary} title={t("Профиль")} />
        <Button theme={ButtonTheme.OUTLINE}>{t("Редактировать")}</Button>
      </div>
      <div className={cls.data}>
        <Input
          value={data?.username}
          placeholder={t("Ваше имя")}
          className={cls.input}
        />
        <Input
          value={data?.lastname}
          placeholder={t("Ваша фамилия")}
          className={cls.input}
        />
      </div>
    </div>
  )
}
