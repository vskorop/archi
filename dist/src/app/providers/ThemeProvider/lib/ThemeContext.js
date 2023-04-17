import { createContext } from 'react';
export var Theme;
(function (Theme) {
    Theme["DEFAULT"] = "app_default_theme";
    Theme["DARK"] = "app_dark_theme";
    Theme["LIGHT_YELLOW"] = "app_light_yellow_theme";
})(Theme || (Theme = {}));
export var ThemeContext = createContext({});
export var LOCAL_STORAGE_THEME_KEY = 'theme';
