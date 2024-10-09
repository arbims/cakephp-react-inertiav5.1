import { useState } from "react"
import TodoItem from "./TodoItem"

const Increment = () => {

    const [count, setCount] = useState(0)
    const [todos, setTodos] = useState([
        {
            title: "test",
            date: Date.now()
        }
    ])

    const IncrementCount = () => {
        setCount((count) => count + 1)
    }

    return (
        <>
            <fieldset role="group">
                <input name="newTodo" placeholder="Ajouter une tache"/>
                <button>Ajouter</button>
            </fieldset>
            <div>
                {todos.map(todo => (
                    <TodoItem todo={todo} key={todo.date}></TodoItem>
                ))}
            </div>
            <button onClick={IncrementCount}>Incrementer {count}</button>
        </>
    )
}

export default Increment