import React, {FC} from 'react';
import cls from "./Navbar.module.scss"
import {classNames} from '@/shared/lib';
import {AppLink, AppLinkTheme} from '@/shared/ui';
import {ThemeSwitcher} from '@/widgets/ThemeSwitcher';

interface NavbarProps {
    className?:string;
}

export const Navbar:FC<NavbarProps> = (props) => {
    const {className} = props
    return (
        <nav className={classNames(cls.Navbar,{},[className])}>
            <ThemeSwitcher  />
            <div className={classNames(cls.links)}>
                <AppLink to="/" className={classNames(cls.mainLink)}> to Main</AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}> to About</AppLink>
            </div>

        </nav>
    );
};




