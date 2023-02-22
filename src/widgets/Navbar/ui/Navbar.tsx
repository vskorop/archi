import { FC, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';
import { Modal } from 'shared/ui/Modal';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import EnterIcon from 'shared/assets/icons/input-icon.svg';

import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}
export const Navbar: FC<NavbarProps> = (props) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);

    const onToggleModal = useCallback(() => {
        setIsAuthModal(!isAuthModal);
    }, [isAuthModal]);

    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onToggleModal}
                    size={ButtonSize.M}
                >

                    <div className={cls.loginContainer}>
                        <EnterIcon className={cls.link} height={32} width={32} />
                        {t('Войти')}
                    </div>
                </Button>
            </div>
            <Modal isOpen={isAuthModal} onClose={onToggleModal}>
                {t('Войти')}
            </Modal>
        </div>
    );
};
