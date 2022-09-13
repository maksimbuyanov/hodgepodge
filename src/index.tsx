import {render} from 'react-dom';
import React from 'react';
import App from './App';
import {BrowserRouter} from 'react-router-dom';
import ThemeProvider from './theme/ThemeProvider';

const root = document.getElementById('root')

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
    ,root)
