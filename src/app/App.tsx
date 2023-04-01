import { Suspense, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';

import './styles/index.scss';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from 'entities/User/model/slice/userSlice';
import { getUserMounted } from 'entities/User';

function App() {
    const [isOpen, setIsOpen] = useState(false);

    const dispatch = useDispatch();
    const isMounted = useSelector(getUserMounted);
    useEffect(() => {
        dispatch(userActions.initAuthData());
    }, [dispatch]);

    return (
        <div className={classNames('app', {}, [])}>
            <Suspense fallback="">
                <Navbar />
                <div className="content-page">
                    <SideBar />
                    {isMounted && <AppRouter />}
                </div>
            </Suspense>
        </div>
    );
}

export default App;
