import { FC, useEffect } from "react"
import cls from "./ProfilePage.module.scss"
import {
  classNames,
  DynamicModuleLoader,
  ReducersList,
  useAppDispatch,
} from "@/shared/lib"
import { useTranslation } from "react-i18next"
import {
  fetchProfileData,
  ProfileCard,
  profileReducer,
} from "@/entities/Profile"

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = { profile: profileReducer }

const ProfilePage: FC<ProfilePageProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation("profile")
  const dispatch = useAppDispatch()
  useEffect(() => {
    // @ts-expect-error
    dispatch(fetchProfileData())
  }, [dispatch])

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        {t("Страница профиля")}
        <ProfileCard />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
