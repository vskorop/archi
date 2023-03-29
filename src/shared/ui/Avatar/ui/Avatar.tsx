import React, { useMemo } from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Avatar.module.scss';

export enum AvatarTheme {
    L = 'large',
    S= 'small',
    M = 'medium'
}
interface AvatarProps {
    className?: string
    src?: string;
    theme?: AvatarTheme
    alt?: string
    size?: number;
}

export const Avatar = (props: AvatarProps) => {
    const {
        className, src, alt, theme = AvatarTheme.S, size,
    } = props;
    const mods: Mods = {
        [cls[theme]]: true,
    };
    const styles = useMemo(() => ({
        height: size,
        width: size,
    }), [size]);

    return (
        <img
            src={src}
            alt={alt}
            style={styles}
            className={classNames(cls.avatar, mods, [className])}
        />
    );
};
