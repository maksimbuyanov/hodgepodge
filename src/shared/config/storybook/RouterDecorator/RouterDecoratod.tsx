import {Story} from '@storybook/react';
import {JSXElementConstructor, ReactElement} from 'react';
import {BrowserRouter} from 'react-router-dom';

export const RouterDecoratod = (Storie:Story):ReactElement => {
    return (
        <BrowserRouter>
            < Storie />
        </BrowserRouter>
    )
}
