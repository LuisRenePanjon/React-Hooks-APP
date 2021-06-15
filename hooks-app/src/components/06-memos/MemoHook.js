import React, { useMemo, useState } from 'react'
import { heavyProcess } from '../../helpers/heavyProcess';
import { useCounter } from '../../hooks/useCounter';

import '../02-useEffect/effect.css'
export const MemoHook = () => {
    const { counter, increment } = useCounter(5000);
    const [show, setShow] = useState(true);

    const memoHeavyProcess = useMemo(() => heavyProcess(counter), [counter]);
    // console.log(memoHeavyProcess);
    return (
        <div>
            <h1>Memo Hook</h1>
            <hr />
            <p>{ memoHeavyProcess }</p>
            <h3>Counter: <small> {counter} </small></h3>
            <button className="btn btn-primary" onClick={ increment }>Increment</button>
            <button className="btn btn-outline-primary ml-3" onClick={ () => {setShow(!show)}}>
                Show/Hide { JSON.stringify(show) }
            </button>
        </div>
    )
}
