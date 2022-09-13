import {FC, useMemo, useState} from 'react';
import {LOCAL_STORAGE_THEM_KEY, Theme,ThemeContext} from '../lib/ThemeContext';

const defaultTheme = localStorage.getItem(LOCAL_STORAGE_THEM_KEY) as Theme || Theme.LIGHT

const ThemeProvider:FC = (props) => {

    const {children} = props

    const[theme,setTheme] = useState<Theme>(defaultTheme)


    const def = useMemo(()=> {
        return ({
            theme,
            setTheme,
        })
    },[theme])

    return (
        <ThemeContext.Provider value={def}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeProvider;
