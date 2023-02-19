import { classNames } from 'shared/lib/classNames/classNames';
import { Theme, useTheme } from 'app/providers/ThemeProvider';
import { Button, ButtonTheme } from 'shared/ui/Button/';

import LanguageIcon from 'shared/assets/icons/language.svg';
import { useTranslation } from 'react-i18next';
import cls from './LangSwitcher.module.scss';

interface LangSwitcherProps {
    className?: string;
}

export function LangSwitcher({ className }: LangSwitcherProps) {
    const { theme } = useTheme();
    const { i18n } = useTranslation();

    const languageSwitcher = async () => {
        i18n.changeLanguage(i18n.language === 'ru' ? 'en' : 'ru');
    };
    return (
        <Button
            theme={ButtonTheme.CLEAR}
            className={classNames(cls.langSwitcher, {}, [className])}
            onClick={languageSwitcher}
        >
            <LanguageIcon className={cls.icon} width={32} height={32} />
        </Button>
    );
}
