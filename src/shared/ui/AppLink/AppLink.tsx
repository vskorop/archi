import React, {FC} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';



import cls from  './appLink.module.scss'
import {Link, LinkProps} from "react-router-dom";


export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary'

}
interface AppLinkProps extends LinkProps{
    className?: string;
    theme: AppLinkTheme

}
export const AppLink: FC<AppLinkProps> = (props) => {
    const {to,
        className,
        children,
        theme = AppLinkTheme.PRIMARY,
        ...other
    } = props
    return (
        <Link
            className={classNames(cls.appLink, {},[className, cls[theme]])}
            to={to}
            {...other}>
            {children}
        </Link>
    );
};
