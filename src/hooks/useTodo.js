import { useReducer, useEffect } from "react";
import { todoReducer } from "../08-useReducer/todoReducer";


const init = () => {
    return JSON.parse(localStorage.getItem('todos') || [])
}

export const useTodo = () => {

    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos));

    }, [todos]);

    const todosCount = todos.length;

    const pendingTodos = todos.filter(todo => !todo.done).length;

    const handleNewTodo = (todo) => {
        const action = {
            type: 'Add Todo',
            payload: todo
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        dispatch({
            type: 'Remove Todo',
            payload: id
        })
    }

    const handleToggleTodo = (id) => {
        dispatch({
            type: 'Toggle Todo',
            payload: id
        })
    }

    return {
        todos,
        todosCount,
        pendingTodos,
        handleNewTodo,
        handleDeleteTodo,
        handleToggleTodo,
    }

}