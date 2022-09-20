import {render} from 'react-dom';
import React from 'react';
import App from './app/App';
import {BrowserRouter} from 'react-router-dom';
import {ThemeProvider} from '@/app/providers/ThemeProvider/';
import "@/shared/config/i18n"

const root = document.getElementById('root')

render(
    <BrowserRouter>
        <ThemeProvider>
            <App/>
        </ThemeProvider>
    </BrowserRouter>
    ,root)
