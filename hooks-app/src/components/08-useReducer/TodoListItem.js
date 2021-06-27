import React from 'react'

export const TodoListItem = ({todo, index, handleDelete, handleToggle}) => {
    return (
        <li 
            className="list-group-item"
        >
            <p 
                className={`${todo.done && 'complete'}`} 
                onClick={()=>handleToggle(todo.id)}
            >
                    {index+1}. {todo.desc}
            </p>
            <button 
                className="btn btn-danger m-2"
                onClick={Function => {
                    handleDelete(todo.id)
                } }
            >   
                Borrar 
            </button>
        </li>
    )
}
