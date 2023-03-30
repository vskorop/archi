import { Suspense, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';

import './styles/index.scss';
import { useDispatch } from 'react-redux';
import { userActions } from 'entities/User/model/slice/userSlice';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <SideBar />
                    <AppRouter />

                </div>
            </Suspense>
        </div>
    );
}

export default App;
