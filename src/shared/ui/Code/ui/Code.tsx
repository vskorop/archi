import React, { useCallback } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonTheme } from 'shared/ui/Button';
import { useTranslation } from 'react-i18next';
import Copy from 'shared/assets/icons/copied-icon.svg';
import { Icon } from 'shared/ui/Icon/Icon';
import cls from './Code.module.scss';

interface CodeProps {
    className?: string
    text: string
}
export const Code = (props: CodeProps) => {
    const { className, text } = props;
    const { t } = useTranslation();

    const onCopy = useCallback(() => {
        navigator.clipboard.writeText(text);
    }, [text]);

    return (
        <pre className={classNames(cls.code, {}, [className])}>
            <Button theme={ButtonTheme.BACKGROUND_INVERTED} className={cls.copyBtn} onClick={onCopy}>
                <Icon Svg={Copy} size={24} className={cls.icon} />
            </Button>
            <code>
                {text}
            </code>
        </pre>
    );
};
