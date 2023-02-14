import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Button } from 'shared/ui/Button';
import cls from './ErrorPage.module.scss';

interface ErrorPageProps {
    className?: string;
}

export const ErrorPage = ({ className }: ErrorPageProps) => {
    const { t } = useTranslation();
    const reload = () => {
        // eslint-disable-next-line no-restricted-globals
        location.reload();
    };
    return (
        <div className={classNames(cls.errorPage, {}, [className])}>
            {t('Произошла ошибка')}
            <Button className={cls.errorButton} onClick={reload}>
                {t('Обновить страницу')}
            </Button>
        </div>
    );
};
