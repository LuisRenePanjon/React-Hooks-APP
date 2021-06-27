import React from 'react'
import { useForm } from '../../hooks/useForm';


export const TodoAdd = ({ handleAddTodo }) => {
    const[{ description }, handleInputChange, reset] = useForm({
        description : ''
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if( description.trim() <= 2 ){
            return;
        }

        const newTodo = {
            id : new Date().getTime(),
            desc : description,
            done: false
        };

        handleAddTodo( newTodo );
        reset();
    }
    
    return (
        <>
         <h4>Agregar ToDo</h4>
        <hr/>
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                className="form-control"
                autocomplete="off"
                name="description"
                placeholder="Escribe una tarea"
                onChange={handleInputChange}
                value={description}
            />
            <div className="d-grid gap-2">
                <button
                    type="submit"
                    className="btn-block btn btn-outline-primary mt-2"
                >
                    Agregar
                </button>
            </div>
        </form>   
        </>
    )
}
