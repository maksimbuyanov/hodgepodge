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
  getProfileForm,
  getProfileIsloading,
  getProfileReadOnly,
  profileActions,
  ProfileCard,
  profileReducer,
} from "@/entities/Profile"
import { useSelector } from "react-redux"
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader"
import { Currency } from "@/entities/Currency/model/types/currency"
import { Country } from "@/entities/Country"

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = { profile: profileReducer }

const ProfilePage: FC<ProfilePageProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation("profile")
  const dispatch = useAppDispatch()
  useEffect(() => {
    void dispatch(fetchProfileData())
  }, [dispatch])

  const formData = useSelector(getProfileForm)
  const error = useSelector(getProfileError)
  const readOnly = useSelector(getProfileReadOnly)
  const isLoading = useSelector(getProfileIsloading)

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
  const onChangeCity = useCallback(
    (data?: string) => {
      dispatch(profileActions.updateProfile({ city: data ?? "" }))
    },
    [dispatch]
  )
  const onChangeAge = useCallback(
    (data?: string) => {
      if (!Number.isNaN(Number(data))) {
        dispatch(profileActions.updateProfile({ age: Number(data) ?? 0 }))
      }
    },
    [dispatch]
  )
  const onChangeCountry = useCallback(
    (data: Country) => {
      dispatch(profileActions.updateProfile({ country: data }))
    },
    [dispatch]
  )
  const onChangeCurrency = useCallback(
    (data: Currency) => {
      dispatch(profileActions.updateProfile({ currency: data }))
    },
    [dispatch]
  )
  const onChangeUsername = useCallback(
    (data?: string) => {
      dispatch(profileActions.updateProfile({ username: data ?? "" }))
    },
    [dispatch]
  )
  const onChangeAvatar = useCallback(
    (data?: string) => {
      dispatch(profileActions.updateProfile({ avatar: data ?? "" }))
    },
    [dispatch]
  )

  return (
    <DynamicModuleLoader reducers={reducers} removeAfterUnmount={true}>
      <div className={classNames(cls.ProfilePage, {}, [className])}>
        {t("Страница профиля")}
        <ProfilePageHeader />
        <ProfileCard
          data={formData}
          isLoading={isLoading}
          readOnly={readOnly}
          error={error}
          onChangeFirstname={onChangeFirstName}
          onChangeLastname={onChangeLastName}
          onChangeAge={onChangeAge}
          onChangeCity={onChangeCity}
          onChangeCountry={onChangeCountry}
          onChangeCurrency={onChangeCurrency}
          onChangeUsername={onChangeUsername}
          onChangeAvatar={onChangeAvatar}
        />
      </div>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
