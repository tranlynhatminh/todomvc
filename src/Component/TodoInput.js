import { useState } from "react"

const TodoInput = (props) => {
    const {addTodo, isCheckAll} = props
    
    const [text, setText] = useState('')

    const handelKeyPress = (e) => {

        if(e.key === 'Enter') {
            addTodo ({
                id: new Date().valueOf(),
                text,
                isComleted: false
            })
            
            setText('')
        }
    }

    return (
        <div className="header">
            <h1>todo</h1>
            <input 
                className="new-todo"
                value={text}
                onKeyDown={(e) => handelKeyPress(e)} 
                onChange={(e) => setText(e.target.value)}
                checked={isCheckAll}
                placeholder="Add your task"
            />
        </div>
    )
}

export default TodoInput