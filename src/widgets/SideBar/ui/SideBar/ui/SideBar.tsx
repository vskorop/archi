import React, { memo, useMemo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { ThemeSwitcher } from 'widgets/ThemsSwitcher';
import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import SideBarIcon from 'shared/assets/icons/thin-chevron-round-right-icon.svg';
import { LangSwitcher } from 'widgets/LangSwitcher';
import { useTranslation } from 'react-i18next';
import { SideBarItemsList } from 'widgets/SideBar/model/items';
import { SideBarItem } from '../../SideBarItem/ui/SideBarItem';
import cls from './SideBar.module.scss';

interface SideBarProps {
    className?: string
}

export const SideBar = memo(({ className }: SideBarProps) => {
    const [collapsed, setCollapses] = React.useState<boolean>(true);
    const { t } = useTranslation();
    const onToggle = () => {
        setCollapses((prev) => !prev);
    };
    const itemsList = useMemo(() => SideBarItemsList.map((item) => (
        <SideBarItem
            item={item}
            collapsed={collapsed}
            key={item.path}
        />
    )), [collapsed]);
    return (
        <div
            data-testid="sidebar"
            className={classNames(cls.sideBar, { [cls.collapsed]: collapsed }, [className])}
        >
            <div className={classNames(cls.sidebarIcons, { [cls.openSideBarIcon]: !collapsed })}>
                <Button
                    data-testid="sidebar-toggle"
                    theme={ButtonTheme.CLEAR}
                    onClick={onToggle}
                    size={ButtonSize.M}
                >
                    <SideBarIcon fill="white" className={cls.icon} width={48} height={48} />
                </Button>

            </div>
            <div className={cls.items}>
                {itemsList}
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
});
