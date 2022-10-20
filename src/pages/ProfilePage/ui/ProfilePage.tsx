import { FC } from "react"
import cls from "./ProfilePage.module.scss"
import { classNames } from "@/shared/lib"
import { useTranslation } from "react-i18next"

interface ProfilePageProps {
  className?: string
}

const ProfilePage: FC<ProfilePageProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation("profile")
  return (
    <div className={classNames(cls.ProfilePage, {}, [className])}>
      {t("Страница профиля")}
    </div>
  )
}

export default ProfilePage
