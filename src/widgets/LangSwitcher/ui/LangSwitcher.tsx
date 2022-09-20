import { useTranslation } from 'react-i18next'
import type { FC } from 'react'
import React from 'react'
import { Button, ThemeButton } from '@/shared/ui'
import { classNames } from '@/shared/lib'
import cls from './LangSwitcher.module.scss'

interface LangSwitcherProps {
  className?: string
}

export const LangSwitcher: FC<LangSwitcherProps> = props => {
  const { className } = props
  const { t, i18n } = useTranslation()

  const toggle = async () => {
    await i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
      .catch(e => {
        console.log(e.message)
      })
  }

  return (
    <Button theme={ThemeButton.CLEAR} onClick={toggle} className={classNames(cls.LangSwitcher, {}, [className])}>
      {t('Язык')}
    </Button>
  )
}
