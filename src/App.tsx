import React, {Suspense} from 'react';
import {Counter} from './Components/Counter/Counter';
import "./styles/index.scss"
import {Link, Route, Routes} from 'react-router-dom';

import {AboutPageAsync} from './Pages/AboutPage/AboutPage.async';
import {MainPageAsync} from './Pages/MainPage/MainPage.async';
import {useTheme} from './theme/useTheme';
import {classNames} from './helpers/classnames/classnames';



const App = () => {
    const {theme,toggleTheme} = useTheme()

    return (
        <div className={classNames('app',{},[theme])}>

            <Link to={'/about'}>About</Link>
            <Link to={'/'}>main</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path={'/about'} element={<AboutPageAsync/>} />
                    <Route path={'/'} element={<MainPageAsync/>} />
                </Routes>
            </Suspense>
            <button onClick={toggleTheme} >Toggle</button>
            <Counter />
        </div>
    );
};

export default App;
