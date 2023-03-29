import React, {
    InputHTMLAttributes,
    memo, useCallback,
    useEffect,
    useRef,
    useState,
} from 'react';
import { classNames, Mods } from 'shared/lib/classNames/classNames';

import cls from './Input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'onChange' | 'value' | 'readOnly'>

export interface InputProps extends HTMLInputProps {
    className?: string;
    value?: string;
    onChange?: (value: string)=> void
    type?: string;
    placeholder?:string;
    autofocus?: boolean;
    readonly?: boolean;
}

export const Input = memo((props: InputProps) => {
    const {
        className,
        value = '',
        onChange,
        placeholder,
        autofocus,
        type = 'text',
        readonly,
        ...otherProps
    } = props;
    const [_, setIsFocused] = useState(false);
    const ref = useRef<HTMLInputElement>(null);

    useEffect(() => {
        if (autofocus) {
            setIsFocused(true);
            ref.current?.focus();
        }
    }, [autofocus]);
    const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        onChange?.(e.target.value);
    };

    const onBlur = () => {
        setIsFocused(false);
    };

    const onFocus = () => {
        setIsFocused(true);
    };
    const mods: Mods = {
        [cls.readonly]: readonly,
    };
    return (
        <div className={classNames(cls.inputContainer, mods, [className])}>
            <input
                ref={ref}
                placeholder={placeholder}
                type={type}
                value={value}
                onChange={onChangeHandler}
                className={cls.input}
                onBlur={onBlur}
                onFocus={onFocus}
                readOnly={readonly}
                {...otherProps}
            />
        </div>
    );
});
