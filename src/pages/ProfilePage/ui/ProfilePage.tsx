import { FC } from "react"
import cls from "./ProfilePage.module.scss"
import { classNames } from "@/shared/lib"
import { useTranslation } from "react-i18next"
import { VStack } from "@/shared/ui"
import { Page } from "@/widgets/Page"
import { EditableProfileCard } from "@/features/EditableProfileCard"
import { useParams } from "react-router-dom"

interface ProfilePageProps {
  className?: string
}

const ProfilePage: FC<ProfilePageProps> = props => {
  const { className = "" } = props

  const { t } = useTranslation("profile")
  const { id } = useParams<{ id: string }>()

  if (!id) {
    return (
      <Page className={classNames(cls.ProfilePage, {}, [className])}>
        {t("Профиль с таким ID не существует")}
      </Page>
    )
  }

  return (
    <Page className={classNames(cls.ProfilePage, {}, [className])}>
      <VStack gap={"8"} max={true}>
        {t("Страница профиля")}
        <EditableProfileCard id={id} />
      </VStack>
    </Page>
  )
}

export default ProfilePage
