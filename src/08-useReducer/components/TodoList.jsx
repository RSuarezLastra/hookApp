import { TodoItem } from "./TodoItem"

export const TodoList = ({ todos, handleDeleteTodo, handleToggleTodo }) => {
    return (
        <ul className="list-group">
            {
                todos?.map(todo => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onDeleteTodo={handleDeleteTodo}
                        onToggleTodo={handleToggleTodo}
                    />
                ))
            }
        </ul>
    )
}
