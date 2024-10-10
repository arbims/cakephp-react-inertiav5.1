import { useState } from "react"
import TodoItem from "./TodoItem"

const TodoList = () => {

    const [newTodo, setNewTodo] = useState('')
    const [todos, setTodos] = useState([])
    const [hideCompleted, setHideCompleted] = useState(false)
    const [hideTodos, setHideTodos] = useState([])
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
        setTodos((todos) => todos.sort((a, b) => a.completed > b.completed ? 1 : -1 ))
    }

    const toggleTodoCompleted = (date) => {
        
        setTodos((todos) => todos.map(todo =>
            todo.date === date ? { ...todo, completed: !todo.completed } : todo
        ));
        setTodos((todos) => todos.sort((a, b) => a.completed > b.completed ? 1 : -1 ))
    };
    
    const handlHideCompleted = () => {
        setHideCompleted((hideCompleted) => !hideCompleted)
        if (!hideCompleted === true) {
            setTodos(todos.filter(t => t.completed == false))
            setHideTodos(todos.filter(t => t.completed == true))
        } else {
            setTodos((todos) => [ ...todos, ...hideTodos])
            setHideTodos([])
        }
    }

    return (
        <>
            <form onSubmit={addTodo}>
                <fieldset role="group">
                    <input name="newTodo" placeholder="Ajouter une tache" value={newTodo} onChange={handleChange} />
                    <button>Ajouter</button>
                </fieldset>
            </form>
            <div>
                <ul>
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.date} toggleTodoCompleted={toggleTodoCompleted}></TodoItem>
                ))}
                </ul>
                <label>
                    <input type="checkbox" checked={hideCompleted} onChange={handlHideCompleted}/>
                    Masquer les taches complete
                </label>
            </div>
        </>
    )
}

export default TodoList