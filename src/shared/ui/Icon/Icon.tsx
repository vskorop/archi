import React from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import cls from './Icon.module.scss';

interface IconProps {
    className?: string
    Svg: React.VFC<React.SVGProps<SVGSVGElement>>;
    size?: number
}
export const Icon = (props: IconProps) => {
    const { className, Svg, size = 16 } = props;
    return (
        <Svg className={classNames(cls.icon, {}, [className])} width={size} height={size} />
    );
};
