import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { TextAlign, TextTheme } from 'shared/ui/Text/ui/Text';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;

}
export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className, error, isLoading, data,
    } = props;
    const { t } = useTranslation();

    if (isLoading) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.loading])}>
                <Loader black />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.profileCard, {}, [className, cls.error])}>
                <Text
                    align={TextAlign.CENTER}
                    title={t('Ошибка при загрузке профиля')}
                    text={t('Поробуйте обновить страницу')}
                    theme={TextTheme.ERROR}
                />
            </div>
        );
    }
    return (
        <div className={classNames(cls.profileCard, {}, [className])}>
            <div className={cls.header}>
                <Text title={t('Профиль')} />
                <Button theme={ButtonTheme.BACKGROUND_INVERTED}>
                    {t('Редактировать')}
                </Button>
            </div>
            <div className={cls.data}>
                <Input className={cls.input} value={data?.username} placeholder={t('Имя')} />
                <Input className={cls.input} value={data?.city} placeholder={t('Город')} />
            </div>
        </div>
    );
};
