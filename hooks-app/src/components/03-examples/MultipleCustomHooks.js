import React from 'react'
import { useCounter } from '../../hooks/useCounter';
import { useFetch } from '../../hooks/useFetch';

import '../02-useEffect/effect.css'

export const MultipleCustomHooks = () => {
    const {counter, increment} = useCounter(1);
    const {loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);
    const { quote }  = !!data && data[0];
    const { author } = !!data && data[0];
    return (
        <div>
            <h1>Breaking Bad Quotes</h1>
            <hr/>
            {loading === true ? 
                (
                    <div className="alert alert-info text-center">
                        Loading...
                    </div>
                ) : 
                (
                    <blockquote className="blockquote text-center">
                        <p className="mb-4">{ quote }</p>
                        <footer className="blockquote-footer">{ author }</footer>
                    </blockquote>
                )
            }
            {loading === false  &&
                <div className="text-center">
                    <button className="btn btn-primary" onClick={increment} >Next Quote</button>
                </div>
            }
        </div>


    );
}
