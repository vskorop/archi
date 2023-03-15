import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
import { getProfileData } from 'entities/Profile/model/selectors/getProfileData/getProfileData';
import { getProfileIsLoading } from 'entities/Profile/model/selectors/getProfileIsLoading/getProfileIsLoading';
import { getProfileError } from 'entities/Profile/model/selectors/getProfileError/getProfileError';

import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { Input } from 'shared/ui/Input';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string
}
export const ProfileCard = ({ className }: ProfileCardProps) => {
    const data = useSelector(getProfileData);
    const error = useSelector(getProfileError);
    const isLoading = useSelector(getProfileIsLoading);
    console.log(data);
    const { t } = useTranslation();
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
