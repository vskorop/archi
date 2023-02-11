import React, {Suspense} from 'react';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import { SideBar } from 'widgets/SideBar';
import { useTranslation } from 'react-i18next';




const App = () => {
   const { theme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <Suspense fallback="">
            <Navbar />
            <div className={'content-page'}>
                <SideBar />
                <AppRouter/>
            </div>
            </Suspense>
        </div>
    );
};

export default App;
