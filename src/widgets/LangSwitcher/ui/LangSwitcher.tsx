import {useTranslation} from 'react-i18next';
import React, {FC} from 'react';
import {Button, ThemeButton} from '@/shared/ui';
import {classNames} from '@/shared/lib';
import cls from "./LangSwitcher.module.scss"

interface LangSwitcherProps {
    className?:string
}

export const LangSwitcher:FC<LangSwitcherProps> = (props) => {
    const {className} = props
    const {t,i18n} = useTranslation()

    const toggle = () => {
        i18n.changeLanguage(i18n.language === "ru" ? "en" : "ru")
    }

    return (
        <Button theme={ThemeButton.CLEAR} onClick={toggle} className={classNames(cls.LangSwitcher,{},[className])}>
            {t("Язык")}
        </Button>
    )
}
