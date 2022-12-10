import { FC, useCallback } from "react"
import cls from "./ProfilePage.module.scss"
import {
  classNames,
  DynamicModuleLoader,
  ReducersList,
  useAppDispatch,
  useInitialEffect,
} from "@/shared/lib"
import { useTranslation } from "react-i18next"
import {
  fetchProfileData,
  getProfileError,
  getProfileErrors,
  getProfileForm,
  getProfileIsloading,
  getProfileReadOnly,
  profileActions,
  ProfileCard,
  profileReducer,
} from "@/entities/Profile"
import { useSelector } from "react-redux"
import { ProfilePageHeader } from "./ProfilePageHeader/ProfilePageHeader"
import { Currency } from "@/entities/Currency"
import { Country } from "@/entities/Country"
import { Text, TextTheme, VStack } from "@/shared/ui"
import { useParams } from "react-router-dom"
import { Page } from "@/widgets/Page"

interface ProfilePageProps {
  className?: string
}

const reducers: ReducersList = { profile: profileReducer }

const ProfilePage: FC<ProfilePageProps> = props => {
  const { className = "" } = props
  const { t } = useTranslation("profile")
  const dispatch = useAppDispatch()
  const { id } = useParams<{ id: string }>()
  useInitialEffect(() => {
    if (id) {
      void dispatch(fetchProfileData(id))
    }
  })

  const formData = useSelector(getProfileForm)
  const readOnly = useSelector(getProfileReadOnly)
  const isLoading = useSelector(getProfileIsloading)
  const errors = useSelector(getProfileErrors)
  const error = useSelector(getProfileError)

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
    <DynamicModuleLoader reducers={reducers}>
      <Page className={classNames(cls.ProfilePage, {}, [className])}>
        <VStack gap={"8"} max={true}>
          {t("Страница профиля")}
          <ProfilePageHeader />
          {errors?.length &&
            errors.map(errorCode => (
              <Text
                theme={TextTheme.Error}
                text={t(errorCode)}
                key={errorCode}
              />
            ))}
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
        </VStack>
      </Page>
    </DynamicModuleLoader>
  )
}

export default ProfilePage
