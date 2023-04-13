import React, { memo } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import cls from './ArticlesPage.module.scss';

interface ArticlesPageProps {
    className?: string
}
const ArticlesPage = ({ className }: ArticlesPageProps) => {
    const { t } = useTranslation('articles');
    return (
        <div className={classNames(cls.articlesPage, {}, [className])}>
            /
        </div>
    );
};
export default memo(ArticlesPage);
