import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'widgets/ThemsSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import SideBarIcon from 'shared/assets/icons/thin-chevron-round-right-icon.svg';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { AppLink, AppLinkTheme } from 'shared/ui/AppLink';
import HomeIcon from 'shared/assets/icons/home-button-icon.svg';
import AboutIcon from 'shared/assets/icons/instruction-manuals-book-icon.svg';

import { RoutePath } from 'shared/config/routeConfig/routeConfig';
import LanguageIcon from 'shared/assets/icons/language.svg';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}

export function SideBar({ className }: SideBarProps) {
    const [collapsed, setCollapses] = React.useState<boolean>(true);
    const { theme } = useTheme();
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapses((prev) => !prev);
    };

    const iconsClasses = classNames(
        cls.icon,
        {
            [cls.closedSideBar]: collapsed,
            [cls.openedIcon]: !collapsed,
        },
    );

    return (

        <div
            data-testid="sidebar"
            className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={classNames(cls.sidebarIcons, { [cls.openSideBarIcon]: !collapsed })}>
                <Button
                    data-testid="sidebar-toggle"
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={onToggle}
                    size={ButtonSize.M}
                    hasIcon
                >
                    <SideBarIcon fill="white" className={cls.icon} width={48} height={48} />
                </Button>

            </div>
            <div className={cls.items}>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.main}
                    className={cls.item}
                >
                    <HomeIcon className={cls.icon} width={32} height={32} />
                    {!collapsed === true && <span className={cls.link}>{t('Главная')}</span>}
                </AppLink>
                <AppLink
                    theme={AppLinkTheme.SECONDARY}
                    to={RoutePath.about}
                    className={cls.item}
                >
                    <AboutIcon className={cls.icon} width={32} height={32} />
                    {!collapsed === true && <span className={cls.link}>{t('О сайте')}</span>}
                </AppLink>
            </div>
            <div className={classNames(cls.switchers, { [cls.collapsedIcons]: collapsed })}>
                <LangSwitcher />
                <ThemeSwitcher />
                <div className={cls.language}>
                    {t('Язык')}
                </div>

            </div>

        </div>

    );
}
