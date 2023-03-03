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
import { getUserData } from "@/entities/User"
import { editableProfileActions } from "../../model/slice/slice"
import { updateProfileData } from "../../model/services/updateProfileData/updateProfileData"
import { getProfileReadOnly } from "../../model/selectors/getReadOnly/getReadOnly"
import { getProfileData } from "../../model/selectors/getProfileData/getProfileData"

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
    dispatch(editableProfileActions.setReadOnly(false))
  }, [dispatch])
  const onCancelEdin = useCallback(() => {
    dispatch(editableProfileActions.cancelEdit())
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
              data-testid="EditableProfileCardHeader.EditButton"
            >
              {t("Редактировать")}
            </Button>
          ) : (
            <HStack gap={"8"}>
              <Button
                theme={ButtonTheme.OUTLINE_RED}
                onClick={onCancelEdin}
                size={ButtonSize.M}
                data-testid="EditableProfileCardHeader.CancelButton"
              >
                {t("Отменить редактирование")}
              </Button>
              <Button
                theme={ButtonTheme.OUTLINE}
                size={ButtonSize.M}
                onClick={onSave}
                data-testid="EditableProfileCardHeader.SaveButton"
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
