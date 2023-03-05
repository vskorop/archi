import React, { memo, useCallback, useEffect } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { useTranslation } from 'react-i18next';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { useDispatch, useSelector } from 'react-redux';
import { Text } from 'shared/ui/Text';
import { TextTheme } from 'shared/ui/Text/ui/Text';
import { DynamicModuleLoader, ReducersList } from 'shared/lib/components/DynamicModuleLoader/DynamicModuleLoader';
import { getLoginUsername } from '../../model/selectors/getLoginUsername/getLoginUsername';
import { getLoginPassword } from '../../model/selectors/getLoginPassword/getLoginPassword';
import { getLoginError } from '../../model/selectors/getLoginError/getLoginError';
import { getLoginIsLoading } from '../../model/selectors/getLoginIsLoading/getLoginIsLoading';
import { loginByUsername } from '../../model/services/loginByUsername/loginByUsername';
import { loginActions, loginReducer } from '../../model/slice/loginSlice';
import cls from './LoginForm.module.scss';

export interface LoginFormProps {
    className?: string
}
const initialReducers: ReducersList = {
    login: loginReducer,
};
const LoginForm = memo(({ className }: LoginFormProps) => {
    const { t } = useTranslation();
    const dispatch = useDispatch();
    const username = useSelector(getLoginUsername);
    const password = useSelector(getLoginPassword);
    const error = useSelector(getLoginError);
    const isLoading = useSelector(getLoginIsLoading);

    const onChangeUsername = useCallback((username: string) => {
        dispatch(loginActions.setUsername(username));
    }, [dispatch]);

    const onChangePassword = useCallback((password: string) => {
        dispatch(loginActions.setPassword(password));
    }, [dispatch]);

    const onLoginClick = useCallback(() => {
        dispatch(loginByUsername({ username, password }));
    }, [dispatch, password, username]);

    // логика для наджатия enter для формы
    const onEnterPress = useCallback((e: KeyboardEvent) => {
        if (e.key === 'Enter') {
            onLoginClick();
        }
    }, [onLoginClick]);

    useEffect(() => {
        window.addEventListener('keydown', onEnterPress);
        return () => {
            window.removeEventListener('keydown', onEnterPress);
        };
    }, [onEnterPress]);

    return (
        <DynamicModuleLoader
            removeAfterUnmount
            reducers={initialReducers}
        >
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
                {error && (
                    <Text
                        theme={TextTheme.ERROR}
                        text={t('Неверный логин или пароль')}
                    />
                )}

                <Button
                    disabled={isLoading}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={onLoginClick}
                >
                    {t('Войти')}
                </Button>
            </div>
        </DynamicModuleLoader>
    );
});
export default LoginForm;
