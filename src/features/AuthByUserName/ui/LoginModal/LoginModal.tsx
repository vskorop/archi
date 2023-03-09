import React, { Suspense } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';

import { Modal } from 'shared/ui/Modal';
import { Loader } from 'shared/ui/Loader/Loader';
import { LoginFormAsync } from '../LoginForm/LoginForm.async';

interface LoginModalProps {
    className?: string;
    isOpen?: boolean;
    onClose: ()=> void;
}
export const LoginModal = (props: LoginModalProps) => {
    const { className, isOpen, onClose } = props;
    return (
        <Modal lazy isOpen={isOpen} onClose={onClose} className={classNames('', {}, [className])}>
            <Suspense fallback={<Loader />}>
                <LoginFormAsync onSuccess={onClose} />
            </Suspense>
        </Modal>
    );
};
