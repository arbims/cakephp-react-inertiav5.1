const TodoItem = ({todo}) => {
    
    return(
        <div>
            <label>
                <input type="checkbox" />
            {todo.title}
            </label>
            
        </div>
    )
}

export default TodoItem