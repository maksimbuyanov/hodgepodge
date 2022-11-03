import { FC, useCallback } from "react"
import cls from "./ProfilePageHeader.module.scss"
import { classNames, useAppDispatch } from "@/shared/lib"
import { Button, ButtonSize, ButtonTheme, Text, TextTheme } from "@/shared/ui"
import { useTranslation } from "react-i18next"
import { useSelector } from "react-redux"
import {
  getProfileReadOnly,
  profileActions,
  updateProfileData,
} from "@/entities/Profile"

interface ProfilePageHeaderProps {
  className?: string
}

export const ProfilePageHeader: FC<ProfilePageHeaderProps> = props => {
  const { className = "" } = props

  const { t } = useTranslation("profile")

  const readOnly = useSelector(getProfileReadOnly)
  const dispatch = useAppDispatch()

  const onEdit = useCallback(() => {
    dispatch(profileActions.setReadOnly(false))
  }, [dispatch])
  const onCancelEdin = useCallback(() => {
    dispatch(profileActions.cancelEdit())
  }, [dispatch])
  const onSave = useCallback(() => {
    void dispatch(updateProfileData())
  }, [dispatch])
  return (
    <div className={classNames(cls.ProfilePageHeader, {}, [className])}>
      <Text theme={TextTheme.Primary} title={t("Профиль")} />
      {readOnly ? (
        <Button
          theme={ButtonTheme.OUTLINE}
          className={cls.editButton}
          size={ButtonSize.M}
          onClick={onEdit}
        >
          {t("Редактировать")}
        </Button>
      ) : (
        <>
          <Button
            theme={ButtonTheme.OUTLINE_RED}
            className={cls.editButton}
            size={ButtonSize.M}
            onClick={onCancelEdin}
          >
            {t("Отменить редактирование")}
          </Button>
          <Button
            theme={ButtonTheme.OUTLINE}
            className={cls.saveButton}
            size={ButtonSize.M}
            onClick={onSave}
          >
            {t("Сохранить")}
          </Button>
        </>
      )}
    </div>
  )
}
