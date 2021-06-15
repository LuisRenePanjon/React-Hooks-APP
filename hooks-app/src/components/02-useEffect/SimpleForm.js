import React, { useEffect, useState } from 'react'
import './effect.css'
import { Message } from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name : '',
        email: ''
    });

    const {name, email} = formState;
// Se ejecuta una vez al inicio
    useEffect( () => {
        console.log('hey!')
    }, [] );
// Cada vez que hay un cambio en email
    useEffect( () => {
        console.log('Cambio en email')
    }, [email] );

    const handleInputChange = ({target}) => {
        setFormState({
            ...formState,
            [target.name] : target.value}
        );
        console.log(formState);
    }
    
    return (
        <>
            <h1>useEffect</h1>
            <hr/>
            <div className="form-group">
                <input
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Enter your name"
                    autoComplete="off"
                    value= { name }
                    onChange= { handleInputChange }    
                />
            </div>
            <div className="form-group">
                <input
                    type="email"
                    name="email"
                    className="form-control"
                    placeholder="Enter your mail"
                    autoComplete="off"
                    value= { email }
                    onChange= { handleInputChange }    
                />
            </div>

            { name === '123'&& <Message />}
        </>
    );
}
