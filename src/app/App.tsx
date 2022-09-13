import React, {Suspense} from 'react';
import "./styles/index.scss"
import {Link, Route, Routes} from 'react-router-dom';

import {useTheme} from './providers/ThemeProvider';
import {AboutPage} from '@/pages/AboutPage';
import {MainPage} from '@/pages/MainPage';
import {classNames} from '@/shared/lib/classnames';

const App = () => {
    const {theme,toggleTheme} = useTheme()

    return (
        <div className={classNames('app',{},[theme])}>

            <Link to={'/about'}>About</Link>
            <Link to={'/'}>main</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPage/>} />
                    <Route path={'/'} element={<MainPage/>} />
                </Routes>
            </Suspense>
            <button onClick={toggleTheme} >Toggle</button>
        </div>
    );
};

export default App;
