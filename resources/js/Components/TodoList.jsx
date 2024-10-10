import { useState } from "react"
import TodoItem from "./TodoItem"

const TodoList = () => {

    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([])

    const handleChange = (event) => {
        setNewTodo((newTodo) => event.target.value)
    };

    const addTodo = (e) => {
        e.preventDefault()
        setTodos((todos) => [...todos, {
            title: newTodo,
            completed: false,
            date: Date.now()
        }])
        setNewTodo('')
    }

    const toggleTodoCompleted = (date) => {
        setTodos(todos.map(todo =>
            todo.date === date ? { ...todo, completed: !todo.completed } : todo
        ));
    };
    
    return (
        <>
            <form onSubmit={addTodo}>
                <fieldset role="group">
                    <input name="newTodo" placeholder="Ajouter une tache" value={newTodo} onChange={handleChange} />
                    <button>Ajouter</button>
                </fieldset>
            </form>
            <div>
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.date} toggleTodoCompleted={toggleTodoCompleted}></TodoItem>
                ))}
            </div>
        </>
    )
}

export default TodoList