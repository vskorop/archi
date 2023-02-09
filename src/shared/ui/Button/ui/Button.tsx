import { classNames } from 'shared/lib/classNames/classNames';
import cls from './Button.module.scss';
import {ButtonHTMLAttributes, FC} from "react";

export enum ThemeButton {
    themeSwitcherButton = 'themeSwitcherButton',
    sideBarButton = 'sideBarButton',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    className?: string;
    theme?: ThemeButton;
}

export const Button: FC<ButtonProps> = (props) => {
    const {
        className,
        children,
        theme,
        ...other
    } = props;
    return (
        <button
            className={classNames(cls.button, {[cls[theme]]: true}, [className])}
            {...other}
        >
            {children}
        </button>
    );
};

