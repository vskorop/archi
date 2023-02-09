import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';


import cls from './SideBar.module.scss'
import {ThemeSwitcher} from "widgets/ThemsSwitcher";
import {Button, ThemeButton} from "shared/ui/Button";
import SideBarIcon from 'shared/assets/icons/previous-icon.svg'
import {Theme, useTheme} from "app/providers/ThemeProvider";
interface SideBarProps {
    className?: string
}
export const SideBar = ({className}: SideBarProps) => {

    const [collapsed, setCollapses] = React.useState<boolean>(true)
    const { theme } = useTheme();

    const onToggle = () => {
        setCollapses(prev => !prev)
    }
    const iconsClasses =  classNames(cls.sideBarIcon, {[cls.closedSideBar]: collapsed} )
    return (
        <div className={classNames(cls.sideBar, {[cls.collapsed]: collapsed}, [className])}>
            <div className={cls.sidebarIcons}>
            <Button
                className={ThemeButton.sideBarButton}
                onClick={onToggle}
            >
                {theme === Theme.DEFAULT?
                    <SideBarIcon
                        fill="white"
                        width={32}
                        className={iconsClasses}
                        height={32}/> :
                    <SideBarIcon
                        fill="black"
                        className={iconsClasses}
                        width={32}
                        height={32}
                    />}
            </Button>
                </div>
            <div className={cls.switchers}>
            <ThemeSwitcher />

            </div>

        </div>
    );
};
