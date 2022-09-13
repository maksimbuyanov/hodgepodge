import React from 'react';
import classes from "./Counter.module.scss"

export const Counter:React.FC = ()=> {
    const [count,setCount] = React.useState(0)

    const increment = ()=>{
        setCount(count+1)
    }

    return (
        <>
            <h1 className={classes.count}>{count}</h1>
            <button onClick={increment}>increment</button>
        </>
    )
}
