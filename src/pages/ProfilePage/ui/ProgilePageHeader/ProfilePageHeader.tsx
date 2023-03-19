import React, { memo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import cls from './ProfilePageHeader.module.scss';

interface ProfilePageHeaderProps {
    className?: string;

}
export const ProfilePageHeader = memo((props: ProfilePageHeaderProps) => {
    const { className } = props;
    const { t } = useTranslation();
    const mods: Mods = {};
    return (
        <div className={classNames(cls.profileHeader, mods, [className])} />
    );
});
