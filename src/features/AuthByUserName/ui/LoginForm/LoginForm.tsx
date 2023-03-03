import React, { memo, useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';
import { getLoginState } from '../../model/selectors/getLoginState/getLoginState';

interface LoginFormProps {
    className?: string
}
export const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const {
        username, password, error, isLoading,
    } = useSelector(getLoginState);
    const onChangeUsername = useCallback((username: string) => {
        dispatch(loginActions.setUsername(username));
    }, [dispatch]);

    const onChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    return (
        <div className={classNames(cls.loginForm, {}, [className])}>
            <Text title={t('Форма Авторизации')} />
            <Input
                autofocus
                type="text"
                placeholder={t('Логин')}
                onChange={onChangeUsername}
                value={username}
            />
            <Input
                type="password"
                placeholder={t('Пароль')}
                onChange={onChangePassword}
                value={password}
            />
            {error && <Text theme={TextTheme.ERROR} text={error} />}

            <Button
                disabled={isLoading}
                theme={ButtonTheme.BACKGROUND_INVERTED}
                onClick={onLoginClick}
            >
                {t('Войти')}
            </Button>
        </div>
    );
});
