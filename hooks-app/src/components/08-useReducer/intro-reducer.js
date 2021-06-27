const todolist = [{
    id: 1,
    todo: 'buy food',
    done: false
}];

const todoReducer = (state = todolist, action) => {
    if (action?.type === 'add'){
        return [...state, action.payload ];
    }
    return state;
};

let todos = todoReducer();

const newTodo = {
    id: 2,
    todo: 'Do React course',
    done: false
};

const addTodoAction = {
    type: 'add',
    payload: newTodo
}

todos = todoReducer( todos, addTodoAction );
console.log(todos); 