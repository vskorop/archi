import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';

interface UseThemeResult {
    toggleTheme: () => void;
    theme: Theme;
}

export function useTheme(): UseThemeResult {
    const { theme, setTheme } = useContext(ThemeContext);

    const toggleTheme = () => {
        let newTheme: Theme;
        switch (theme) {
        case (Theme.DEFAULT):
            newTheme = Theme.DARK;
            break;
        case (Theme.DARK):
            newTheme = Theme.LIGHT_YELLOW;
            break;
        case (Theme.LIGHT_YELLOW):
            newTheme = Theme.DEFAULT;
            break;
        default: newTheme = Theme.DEFAULT;
            break;
        }

        // const newTheme = theme === Theme.DARK ? Theme.DEFAULT : Theme.DARK;
        setTheme?.(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };

    return {
        theme: theme || Theme.DEFAULT,
        toggleTheme,

    };
}
