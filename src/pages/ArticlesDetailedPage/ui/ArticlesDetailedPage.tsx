import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import cls from './ArticlesDetailedPage.module.scss';

interface ArticlesDetailedPageProps {
    className?: string
}
export const ArticlesDetailedPage = ({ className }: ArticlesDetailedPageProps) => {
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.ArticlesDetailedPage, {}, [className])}>
            /
        </div>
    );
};
