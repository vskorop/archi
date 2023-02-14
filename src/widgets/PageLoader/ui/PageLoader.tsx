import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { Loader } from 'shared/ui/Loader/Loader';

import cls from './pageLoader.module.scss';

interface PageLoaderProps {
    className?: string
}
export const PageLoader = ({ className }: PageLoaderProps) => (
    <div className={classNames(cls.pageLoader, {}, [className])}>
        <Loader />
    </div>
);
