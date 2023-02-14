import { classNames } from 'shared/lib/classNames/classNames';
import { ButtonHTMLAttributes, FC } from 'react';
import cls from './Button.module.scss';

export enum ThemeButton {
    themeSwitcherButton = 'themeSwitcherButton',
    sideBarButton = 'sideBarButton',
    languageSwitcher = 'languageSwitcher',
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
            type="button"
            className={classNames(cls.button, { [cls[theme]]: true }, [className])}
            {...other}
        >
            {children}
        </button>
    );
};
