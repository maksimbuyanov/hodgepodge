import React, {FC} from 'react';
import cls from "./Navbar.module.scss"
import {classNames} from '@/shared/lib';
import {AppLink, AppLinkTheme} from '@/shared/ui';

interface NavbarProps {
    className?:string;
}

export const Navbar:FC<NavbarProps> = (props) => {
    const {className} = props
    return (
        <nav className={classNames(cls.Navbar,{},[className])}>
            <div className={classNames(cls.links)}>
                <AppLink to="/" className={classNames(cls.mainLink)}> to Main</AppLink>
                <AppLink to="/about" theme={AppLinkTheme.SECONDARY}> to About</AppLink>
            </div>
        </nav>
    );
};




