import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Code.module.scss';

interface CodeProps {
    className?: string
    text: string
}
export const Code = (props: CodeProps) => {
    const { className, text } = props;
    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <code>
                {text}
            </code>
        </pre>
    );
};
