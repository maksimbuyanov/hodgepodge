import {
  classNames,
  DynamicModuleLoader,
  ReducersList,
  useAppDispatch,
  useInitialEffect,
} from "@/shared/lib"
import { useTranslation } from "react-i18next"
import cls from "./EditableProfileCard.module.scss"
import { FC, memo, useCallback } from "react"
import { useParams } from "react-router-dom"
import { useSelector } from "react-redux"
import { Country } from "@/entities/Country"
import { Currency } from "@/entities/Currency"
import { Text, TextTheme, VStack } from "@/shared/ui"
import { fetchProfileData } from "../../model/services/fetchProfileData/fetchProfileData"
import { getProfileForm } from "../../model/selectors/getProfileForm/getProfileForm"
import { getProfileReadOnly } from "../../model/selectors/getReadOnly/getReadOnly"
import { getProfileIsloading } from "../../model/selectors/getProfileIsloading/getProfileIsloading"
import { getProfileErrors } from "../../model/selectors/getProfileErrors/getProfileErrors"
import { getProfileError } from "../../model/selectors/getProfileError/getProfileError"
import {
  editableProfileActions,
  editableProfileReducer,
} from "../../model/slice/slice"
import { ProfileCard } from "@/entities/Profile"
import { ProfilePageHeader } from "@/features/EditableProfileCard/ui/EditableProfileCardHeader/ProfilePageHeader"

const reducers: ReducersList = { profile: editableProfileReducer }

interface EditableProfileCardProps {
  className?: string
  id: string
}

export const EditableProfileCard: FC<EditableProfileCardProps> = props => {
  const { className, id } = props
  const { t } = useTranslation("profile")
  const dispatch = useAppDispatch()
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
      dispatch(editableProfileActions.updateProfile({ first: data ?? "" }))
    },
    [dispatch]
  )
  const onChangeLastName = useCallback(
    (data?: string) => {
      dispatch(editableProfileActions.updateProfile({ lastname: data ?? "" }))
    },
    [dispatch]
  )
  const onChangeCity = useCallback(
    (data?: string) => {
      dispatch(editableProfileActions.updateProfile({ city: data ?? "" }))
    },
    [dispatch]
  )
  const onChangeAge = useCallback(
    (data?: string) => {
      if (!Number.isNaN(Number(data))) {
        dispatch(
          editableProfileActions.updateProfile({ age: Number(data) ?? 0 })
        )
      }
    },
    [dispatch]
  )
  const onChangeCountry = useCallback(
    (data: Country) => {
      dispatch(editableProfileActions.updateProfile({ country: data }))
    },
    [dispatch]
  )
  const onChangeCurrency = useCallback(
    (data: Currency) => {
      dispatch(editableProfileActions.updateProfile({ currency: data }))
    },
    [dispatch]
  )
  const onChangeUsername = useCallback(
    (data?: string) => {
      dispatch(editableProfileActions.updateProfile({ username: data ?? "" }))
    },
    [dispatch]
  )
  const onChangeAvatar = useCallback(
    (data?: string) => {
      dispatch(editableProfileActions.updateProfile({ avatar: data ?? "" }))
    },
    [dispatch]
  )

  return (
    <DynamicModuleLoader reducers={reducers}>
      <VStack className={classNames(cls.EditableProfileCard, {}, [className])}>
        <ProfilePageHeader />
        {errors?.length &&
          errors.map(errorCode => (
            <Text theme={TextTheme.Error} text={t(errorCode)} key={errorCode} />
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
    </DynamicModuleLoader>
  )
}
export default memo(EditableProfileCard)
