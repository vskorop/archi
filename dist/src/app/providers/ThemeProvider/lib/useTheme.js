import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, Theme, ThemeContext } from './ThemeContext';
export function useTheme() {
    var _a = useContext(ThemeContext), theme = _a.theme, setTheme = _a.setTheme;
    var toggleTheme = function () {
        var newTheme;
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
            default:
                newTheme = Theme.DEFAULT;
                break;
        }
        // const newTheme = theme === Theme.DARK ? Theme.DEFAULT : Theme.DARK;
        setTheme === null || setTheme === void 0 ? void 0 : setTheme(newTheme);
        localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
    };
    return {
        theme: theme || Theme.DEFAULT,
        toggleTheme: toggleTheme,
    };
}
