import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ThemeButton } from 'shared/ui/Button/';

import LightTheme from 'shared/assets/icons/day-sunny-svgrepo-com.svg';
import DarkTheme from 'shared/assets/icons/night-svgrepo-com.svg';
import cls from './ThemeSwitcher.module.scss';

interface ThemeSwitcherProps {
    className?: string;
}

export function ThemeSwitcher({ className }: ThemeSwitcherProps) {
    const { theme, toggleTheme } = useTheme();

    return (
        <Button
            theme={ThemeButton.themeSwitcherButton}
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={toggleTheme}
        >
            {theme === Theme.DEFAULT ? <LightTheme width={32} fill="white" height={32} /> : <DarkTheme width={32} height={32} />}
        </Button>
    );
}
