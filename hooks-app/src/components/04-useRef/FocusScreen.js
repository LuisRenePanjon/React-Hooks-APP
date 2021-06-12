import React, { useRef } from 'react'
import '../02-useEffect/effect.css'
export const FocusScreen = () => {
    
    const inputRef = useRef();

    const handleClick = () => {
        inputRef.current.select();
    }
    
    return (
        <div>
            <h1>Focus Screen</h1>
            <hr/>

            <input
                ref={ inputRef }
                className="form-control"
                placeholder="Your name"
            />
            <button className="btn btn-outline-secondary mt-3" onClick={ handleClick }>Focus</button>
        </div>
    );
}
