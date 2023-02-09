import React from 'react';
import { useTheme } from './providers/ThemeProvider';
import './styles/index.scss';
import {classNames} from "shared/lib/classNames/classNames";
import {AppRouter} from "app/providers/router";
import {Navbar} from "widgets/Navbar";
import { SideBar } from 'widgets/SideBar';




const App = () => {
   const { theme } = useTheme();
    return (
        <div className={classNames('app', {}, [theme])}>
            <Navbar />
            <div className={'content-page'}>
                <SideBar />
                <AppRouter/>
            </div>
        </div>
    );
};

export default App;
