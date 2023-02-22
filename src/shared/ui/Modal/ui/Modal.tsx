import React, {
    ReactNode, useCallback, useEffect, useRef, useState,
} from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Portal } from 'widgets/Portal/Portal';
import cls from './Modal.module.scss';

interface ModalProps {
  children?: ReactNode;
  className?: string;
  isOpen?: boolean;
  onClose?: () => void;
}
const ANIMATION_DELAY = 300;
export const Modal = (props: ModalProps) => {
    const {
        isOpen, onClose, children, className,
    } = props;

    const [isClosing, setIsClosing] = useState<boolean>(false);
    const timeRef = useRef <ReturnType <typeof setTimeout>>(null);

    const onStopPropagation = (e: React.MouseEvent) => {
        e.stopPropagation();
    };
    const onCloseHandler = useCallback(() => {
        if (onClose) {
            setIsClosing(true);
            timeRef.current = setTimeout(() => {
                onClose();
                setIsClosing(false);
            }, ANIMATION_DELAY);
        }
    }, [onClose]);

    const onKeyDown = useCallback((e: KeyboardEvent) => {
        if (e.key === 'escape') {
            onCloseHandler();
        }
    }, [onCloseHandler]);

    useEffect(() => {
        if (isOpen) {
            window.addEventListener('keydown', onKeyDown);
        }

        return () => {
            clearTimeout(timeRef.current);
            window.removeEventListener('keydown', onKeyDown);
        };
    }, [isOpen, onKeyDown]);

    const mods: Record<string, boolean> = {
        [cls.opened]: isOpen,
        [cls.isClosing]: isClosing,
    };

    return (
        <Portal>
            <div className={classNames(cls.modal, mods, [className])}>
                <div className={classNames(cls.overlay)} onClick={onCloseHandler}>
                    <div className={classNames(cls.content)} onClick={onStopPropagation}>
                        {children}
                    </div>
                </div>
            </div>
        </Portal>
    );
};
