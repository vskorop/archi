import React from 'react';
import {classNames} from 'shared/lib/classNames/classNames';


import cls from './Navbar.module.scss'
import {AppLink, AppLinkTheme} from "shared/ui/AppLink/AppLink";


interface NavbarProps {
    className?: string;

}
export const Navbar = () => {
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.links}>
            <AppLink  className={cls.mainLink} to={'/'} theme={AppLinkTheme.PRIMARY}>Главная</AppLink>
            <AppLink className={cls.aboutLink} to={'/about'} theme={AppLinkTheme.PRIMARY}>О сайте</AppLink>
            </div>
        </div>
    );
};


