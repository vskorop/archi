import React, { FC } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { AppLink, AppLinkTheme } from 'shared/ui/AppLink/ui/AppLink';
import { useTranslation } from 'react-i18next';
import { AppRoutes } from 'shared/config/routeConfig/routeConfig';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}
export const Navbar: FC<NavbarProps> = (props) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.links}>
                <AppLink className={cls.mainLink} to="/" theme={AppLinkTheme.PRIMARY}>{t('Главная')}</AppLink>
                <AppLink className={cls.aboutLink} to={AppRoutes.ABOUT} theme={AppLinkTheme.PRIMARY}>
                    {t('О сайте')}
                </AppLink>
            </div>
        </div>
    );
};
