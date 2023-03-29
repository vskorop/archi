import React from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';

import { Text } from 'shared/ui/Text';
import { Input } from 'shared/ui/Input';
import { Profile } from 'entities/Profile';
import { Loader } from 'shared/ui/Loader/Loader';
import { TextAlign, TextTheme } from 'shared/ui/Text/ui/Text';
import { Avatar } from 'shared/ui/Avatar';
import { AvatarTheme } from 'shared/ui/Avatar/ui/Avatar';
import { Currency, CurrencySelect } from 'entities/Currency';

import { CountrySelect } from 'entities/Country';
import cls from './ProfileCard.module.scss';

interface ProfileCardProps {
    className?: string;
    data?: Profile;
    isLoading?: boolean;
    error?: string;
    readonly?: boolean;
    onChangeFirstName?: (value?: string) => void;
    onChangeLastName?: (value?: string) => void;
    onChangeAge?: (value?: string) => void;
    onChangeAvatar?: (value?: string) => void;
    onChangeCurrency?: (value?: Currency) => void;
    onChangeCity?: (value?: string) => void;
    onChangeCountry?: (value?: string) => void;

}
export const ProfileCard = (props: ProfileCardProps) => {
    const {
        className, error, isLoading, data,
        onChangeFirstName,
        onChangeLastName,
        onChangeAge,
        onChangeAvatar,
        onChangeCity,
        onChangeCurrency,
        onChangeCountry,
        readonly,
    } = props;
    const { t } = useTranslation();
    const mods: Mods = {
        [cls.editing]: !readonly,
    };
    if (isLoading) {
        return (
            <div className={classNames(cls.loading, {}, [className, cls.loading])}>
                <Loader black />
            </div>
        );
    }
    if (error) {
        return (
            <div className={classNames(cls.error, {}, [className, cls.error])}>
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
        <div className={classNames(cls.profileCard, mods, [className])}>
            {data?.avatar && <Avatar src={data?.avatar} alt={data?.avatar} theme={AvatarTheme.L} />}
            <div className={cls.data}>
                <Input
                    onChange={onChangeFirstName}
                    className={cls.input}
                    value={data?.first}
                    placeholder={t('Имя')}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeLastName}
                    className={cls.input}
                    value={data?.lastname}
                    placeholder={t('Фамилия')}
                    readonly={readonly}

                />
                <Input
                    onChange={onChangeAge}
                    className={cls.input}
                    value={String(data?.age)}
                    placeholder={t('Возраст')}
                    readonly={readonly}

                />
                <Input
                    onChange={onChangeCity}
                    className={cls.input}
                    value={String(data?.city)}
                    placeholder={t('Город')}
                    readonly={readonly}
                />
                <Input
                    onChange={onChangeAvatar}
                    className={cls.input}
                    value={data?.avatar}
                    placeholder={t('Фото')}
                    readonly={readonly}
                />
                <CountrySelect
                    onChange={onChangeCountry}
                    className={cls.input}
                    value={data?.country}
                    readonly={readonly}
                />
                <CurrencySelect
                    className={cls.input}
                    value={data?.currency}
                    onChange={onChangeCurrency}
                    readonly={readonly}
                />
            </div>
        </div>
    );
};
