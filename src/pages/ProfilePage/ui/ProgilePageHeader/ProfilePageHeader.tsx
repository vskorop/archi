import React, { memo, useCallback } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Text } from 'shared/ui/Text';
import { Button, ButtonTheme } from 'shared/ui/Button';
import { useSelector } from 'react-redux';
import { getProfileReadOnly, profileActions, updateProfileData } from 'entities/Profile';
import { useAppDispatch } from 'shared/lib/hooks/useAppDispatch/useAppDispatch';

import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;
}
export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const mods: Mods = {};
    const readOnly = useSelector(getProfileReadOnly);
    const dispatch = useAppDispatch();

    const onEdit = useCallback(() => {
        dispatch(profileActions.setReadOnly(false));
    }, [dispatch]);

    const onCancelEdit = useCallback(() => {
        dispatch(profileActions.onCancelEdit());
    }, [dispatch]);

    const onSave = useCallback(() => {
        dispatch(updateProfileData());
    }, [dispatch]);

    return (
        <div className={classNames(cls.profileHeader, mods, [className])}>
            <Text title={t('Профиль')} />
            {readOnly ? (
                <Button
                    className={cls.editBtn}
                    theme={ButtonTheme.BACKGROUND_INVERTED}
                    onClick={onEdit}
                >
                    {t('Редактировать')}
                </Button>
            ) : (
                <div>
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.CANCEL}
                        onClick={onCancelEdit}

                    >
                        {t('Отменить')}
                    </Button>
                    <Button
                        className={cls.editBtn}
                        theme={ButtonTheme.SUCCESS}
                        onClick={onSave}

                    >
                        {t('Сохранить')}
                    </Button>
                </div>
            )}
        </div>
    );
});
