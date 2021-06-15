import React, { useEffect, useState } from 'react'

export const Message = () => {
    const [coords, setCoords] = useState({x: 0, y: 0})
    const {x, y} = coords;

    const mouseMove = (e) => {
        setCoords({x: e.x, y: e.y});
    };
    
    useEffect(() => {
        window.addEventListener('mousemove', mouseMove);
        
        
        return () => {
            console.log('component desmount');
            window.removeEventListener('mousemove', mouseMove);
        }
    }, []);
    
    return (
        <div>
            <h3>You are amazing!</h3>
            <h1>Coords</h1>
            <p>X:{x}    Y:{y}</p>
        </div>

    );
}
