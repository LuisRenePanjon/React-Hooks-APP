import React from 'react';
import { useCounter } from '../../hooks/useCounter';

import './counterApp.css';

export const CounterWithCustomHooks = () => {
    const {state, increment, decrement, reset} = useCounter(100);
    
    return (
        <>
        <h1>Counter with CustomHooks: { state }</h1>
        <hr/>
        <button onClick={() => increment()} className="btn btn-primary" >+1</button>
        <button onClick={ reset } className="btn btn-success">RESET</button>
        <button onClick={() => decrement()} className="btn btn-secondary">-1</button>    
        </>
    )
}
