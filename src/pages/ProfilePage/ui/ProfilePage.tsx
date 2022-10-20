import { FC } from "react"
import cls from "./ProfilePage.module.scss"
import { classNames, DynamicModuleLoader, ReducersList } from "@/shared/lib"
import { useTranslation } from "react-i18next"
import { profileReducer } from "@/entities/Profile"

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = { profile: profileReducer }

const ProfilePage: FC<ProfilePageProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation("profile")
  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        {t("Страница профиля")}
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
