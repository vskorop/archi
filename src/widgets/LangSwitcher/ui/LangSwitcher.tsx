import {classNames} from 'shared/lib/classNames/classNames';
import cls from './LangSwitcher.module.scss';
import {Theme, useTheme} from "app/providers/ThemeProvider";
import {Button, ThemeButton} from "shared/ui/Button/";

import LanguageIcon from 'shared/assets/icons/language.svg'
import {useTranslation} from "react-i18next";

interface LangSwitcherProps {
    className?: string;
}

export const LangSwitcher = ({className}: LangSwitcherProps) => {
    const { theme } = useTheme()
    const { t, i18n } = useTranslation();

    const languageSwitcher = async ()  => {
    i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru')
    }
    return (
        <Button
            theme={ThemeButton.languageSwitcher}
            className={classNames(cls.themeSwitcher, {}, [className])}
            onClick={languageSwitcher}
        >
            {theme === Theme.DEFAULT?
                <LanguageIcon width={32} fill={'white'}  height={32}/>
                : <LanguageIcon width={32} height={32}/>
            }
        </Button>
    );
};


