import { FC, useCallback, useEffect } from "react"
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
  getProfileError,
  getProfileIsloading,
  getProfileData,
  ProfileCard,
  profileReducer,
  profileActions,
  getProfileReadOnly,
  getProfileForm,
} from "@/entities/Profile"
import { useSelector } from "react-redux"
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader"

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = { profile: profileReducer }

const ProfilePage: FC<ProfilePageProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation("profile")
  const dispatch = useAppDispatch()
  useEffect(() => {
    // TODO может убрать войд?
    void dispatch(fetchProfileData())
  }, [dispatch])

  const data = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const readOnly = useSelector(getProfileReadOnly)
  const isLoading = useSelector(getProfileIsloading) // TODO оставить если используется

  const onChangeFirstName = useCallback(
    (data?: string) => {
      dispatch(profileActions.updateProfile({ first: data ?? "" }))
    },
    [dispatch]
  )
  const onChangeLastName = useCallback(
    (data?: string) => {
      dispatch(profileActions.updateProfile({ lastname: data ?? "" }))
    },
    [dispatch]
  )

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        {t("Страница профиля")}
        <ProfilePageHeader />
        <ProfileCard
          data={data}
          isLoading={isLoading}
          readOnly={readOnly}
          error={error}
          onChangeFirstname={onChangeFirstName}
          onChangeLastname={onChangeLastName}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
