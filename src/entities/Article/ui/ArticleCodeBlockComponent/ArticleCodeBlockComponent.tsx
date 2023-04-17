import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { useTranslation } from 'react-i18next';
import { Code } from 'shared/ui/Code';
import cls from './ArticleCodeBlockComponent.module.scss';
import { ArticleCodeBlock } from '../../model/types/article';

interface ArticleCodeBlockComponentProps {
    className?: string
    block: ArticleCodeBlock
}
export const ArticleCodeBlockComponent = (props: ArticleCodeBlockComponentProps) => {
    const { className, block } = props;
    const { t } = useTranslation();
    return (
        <div className={classNames(cls.articleCodeBlockComponent, {}, [className])}>
            <Code text={block.code} />
        </div>
    );
};
