import TodoItem from "./TodoItem";

const TodoList = (props) => {

    const {todoListItem, isCheckedAll, checkAll} = props
    
    
    return (
        <main className="main">

            <input className="toggle-all" type="checkbox" checked={isCheckedAll} />
            <label htmlFor="toggle-all" onClick={checkAll} ></label>

            <ul className="todo-list">
                { todoListItem.map((todo) => <TodoItem {...{todo}} {...props}/>) }
            </ul>
        </main>
    )
}

export default TodoList