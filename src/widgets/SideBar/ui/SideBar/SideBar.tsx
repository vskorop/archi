import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'widgets/ThemsSwitcher';
import { Button, ThemeButton } from 'shared/ui/Button';
import SideBarIcon from 'shared/assets/icons/thin-chevron-round-right-icon.svg';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
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
        <div className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [className])}>
            <div className={classNames(cls.sidebarIcons, { [cls.openSideBar]: !collapsed })}>
                <Button
                    className={ThemeButton.sideBarButton}
                    onClick={onToggle}
                >
                    {theme === Theme.DEFAULT
                        ? (<SideBarIcon fill="white" width={48} className={iconsClasses} height={48} />)
                        : (<SideBarIcon fill="black" className={iconsClasses} width={48} height={48} />)}
                </Button>
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
