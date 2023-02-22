import { Suspense, useEffect, useState } from 'react';
import { classNames } from 'shared/lib/classNames/classNames';
import { AppRouter } from 'app/providers/router';
import { Navbar } from 'widgets/Navbar';
import { SideBar } from 'widgets/SideBar';
import { Modal } from 'shared/ui/Modal';

import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';

function App() {
    const { theme } = useTheme();
    const [isOpen, setIsOpen] = useState(false);
    const onToggle = () => {
        setIsOpen(!isOpen);
    };
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
