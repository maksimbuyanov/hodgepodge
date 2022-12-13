import { FC, useCallback } from "react"
import { classNames, useAppDispatch } from "@/shared/lib"
import {
  Button,
  ButtonSize,
  ButtonTheme,
  HStack,
  Text,
  TextTheme,
} from "@/shared/ui"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import {
  getProfileData,
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from "@/entities/Profile"
import { getUserData } from "@/entities/User"

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = props => {
  const { className = "" } = props

  const { t } = useTranslation("profile")

  const readOnly = useSelector(getProfileReadOnly)
  const dispatch = useAppDispatch()
  const profileData = useSelector(getProfileData)
  const PROFILE_ID = profileData?.id
  const userData = useSelector(getUserData)
  const USER_ID = userData?.id
  const canEdit = PROFILE_ID === USER_ID // TODO может сделать реселект, и получать из него данные, совпадает пользователь и профиль или нет?

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false))
  }, [dispatch])
  const onCancelEdin = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])
  const onSave = useCallback(() => {
    if (PROFILE_ID) {
      void dispatch(updateProfileData(PROFILE_ID))
    }
  }, [PROFILE_ID, dispatch])
  return (
    <HStack
      justify={"between"}
      className={classNames("", {}, [className])}
      max={true}
    >
      <Text theme={TextTheme.Primary} title={t("Профиль")} />
      {canEdit && (
        <>
          {readOnly ? (
            <Button
              theme={ButtonTheme.OUTLINE}
              size={ButtonSize.M}
              onClick={onEdit}
            >
              {t("Редактировать")}
            </Button>
          ) : (
            <HStack gap={"8"}>
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                size={ButtonSize.M}
                onClick={onCancelEdin}
              >
                {t("Отменить редактирование")}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINE}
                size={ButtonSize.M}
                onClick={onSave}
              >
                {t("Сохранить")}
              </Button>
            </HStack>
          )}
        </>
      )}
    </HStack>
  )
}
