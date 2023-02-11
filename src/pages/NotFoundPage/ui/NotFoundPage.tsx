import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import ErrorIcon from 'shared/assets/icons/error-svgrepo-com (1).svg';
import cls from './NotFoundPage.module.scss';

interface NotFoundPageProps {
    className?: string
}
export const NotFoundPage = ({ className }: NotFoundPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.notFoundPage, {}, [className])}>
            {t('Страница 404')}
            <ErrorIcon height={380} width={380} />
        </div>
    );
};
