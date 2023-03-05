import { FC, useCallback, useState } from 'react';

import { useTranslation } from 'react-i18next';
import { classNames } from 'shared/lib/classNames/classNames';

import { Button, ButtonSize, ButtonTheme } from 'shared/ui/Button';
import EnterIcon from 'shared/assets/icons/input-icon.svg';

import { LoginModal } from 'features/AuthByUserName';
import { useDispatch, useSelector } from 'react-redux';
import { getUserAuthData } from 'entities/User';
import { userActions } from 'entities/User/model/slice/userSlice';
import cls from './Navbar.module.scss';

interface NavbarProps {
    className?: string;

}
export const Navbar: FC<NavbarProps> = (props) => {
    const { t } = useTranslation();

    const [isAuthModal, setIsAuthModal] = useState(false);
    const authData = useSelector(getUserAuthData);
    const dispatch = useDispatch();

    const onCloseModal = useCallback(() => {
        setIsAuthModal(false);
    }, []);

    const onShowModal = useCallback(() => {
        setIsAuthModal(true);
    }, []);

    const onLogout = useCallback(() => {
        dispatch(userActions.logout());
        setIsAuthModal(false);
    }, [dispatch]);

    if (authData) {
        return (
            <div className={classNames(cls.navbar)}>
                <div className={cls.links}>
                    <Button
                        theme={ButtonTheme.CLEAR}
                        onClick={onLogout}
                        size={ButtonSize.M}
                    >
                        <div className={cls.loginContainer}>
                            <EnterIcon className={cls.link} height={32} width={32} />
                            {t('Выйти')}
                        </div>
                    </Button>
                </div>
            </div>
        );
    }
    return (
        <div className={classNames(cls.navbar)}>
            <div className={cls.links}>
                <Button
                    theme={ButtonTheme.CLEAR}
                    onClick={onShowModal}
                    size={ButtonSize.M}
                >

                    <div className={cls.loginContainer}>
                        <EnterIcon className={cls.link} height={32} width={32} />
                        {t('Войти')}
                    </div>
                </Button>
            </div>
            {isAuthModal && <LoginModal isOpen={isAuthModal} onClose={onCloseModal} />}
        </div>
    );
};
