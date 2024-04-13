import { useTodo } from "../hooks";
import { TodoList, TodoAdd } from "./components";


export const TodoApp = () => {

    const {todos, todosCount, pendingTodos, handleDeleteTodo, handleNewTodo, handleToggleTodo} = useTodo();

    return (
        <>
            <h1>TodoApp: {todosCount}, <small>pendientes: {pendingTodos}</small> </h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        handleDeleteTodo={handleDeleteTodo}
                        handleToggleTodo={handleToggleTodo} />
                </div>
                <div className="col-5">
                    <TodoAdd onNewTodo={handleNewTodo} />
                </div>
            </div>
        </>
    )
}
