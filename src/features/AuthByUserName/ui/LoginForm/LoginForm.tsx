import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './LoginForm.module.scss';

interface LoginFormProps {
    className?: string
}
export const LoginForm = ({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Input autofocus type="text" placeholder={t('Логин')} />
            <Input type="password" placeholder={t('Пароль')} />
            <Button theme={ButtonTheme.BACKGROUND_INVERTED}>{t('Войти')}</Button>
        </div>
    );
};
