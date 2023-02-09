import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';


import cls from './SideBar.module.scss'
import {ThemeSwitcher} from "widgets/ThemsSwitcher";

interface SideBarProps {
    className?: string
}
export const SideBar = ({className}: SideBarProps) => {

    const [collapsed, setCollapses] = React.useState<boolean>(false)
    const onToggle = () => {
        setCollapses(prev => !prev)
    }
    return (
        <div className={classNames(cls.sideBar, {[cls.collapsed]: collapsed}, [className])}>
            <button onClick={onToggle}> toggle</button>
            <div className={cls.switchers}>
            <ThemeSwitcher />

            </div>

        </div>
    );
};
