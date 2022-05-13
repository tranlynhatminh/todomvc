const TodoItem = (props) => {

    const {todo, remove, markCompleted} = props

    return (

        <li className={`${todo.isCompleted ? 'completed' : ''}`}>

            <div className="view">

                <input 
                    className="toggle" 
                    type="checkbox" 
                    checked={todo.isCompleted}
                    onChange={ () => markCompleted(todo.id)}
                />
                
                <label>{todo.text}</label>
                <button className="destroy" onClick={() => remove(todo.id)}></button>
            </div>
        </li>
    )
}

export default TodoItem