import {useForm } from '../../hooks'

export const TodoAdd = ({onNewTodo}) => {

    const { onInputChange , description, onResetForm } = useForm({
        description: '',
    })

    const handleSubmit = (e) => {
        e.preventDefault();
        if( description.trim() === '') return;
        
            const todo = {
                id: new Date().getTime(),
                description,
                done: false
            }

            onNewTodo(todo)
            onResetForm()
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                name="description"
                className="form-control"
                value={description}
                placeholder="¿Que hay que hacer?"
                onChange={onInputChange}
            />
            <button
                className="btn btn-outline-primary mt-2"
                type="submit">
                Agregar
            </button>
        </form>
    )
}
