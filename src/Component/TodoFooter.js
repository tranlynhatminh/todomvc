const TodoFooter = (props) => {
    
    const {setFilter, status, numOfItemLeft, numOfTodo, clearCompleted} = props
    
    const Btns =[{
        title: "All",
        link: "", 
        isActived: status === "ALL",
        onClick: () => setFilter("ALL"),
    },{
        title: "Active",
        link: "active",
        isActived: status === "ACTIVE",
        onClick : () => setFilter("ACTIVE"),
    },{
        title: "Completed",
        link: "completed",
        isActived: status === "COMPLETED",
        onClick : () => setFilter("COMPLETED"),
    }]
    return (
        <div className="footer">
            
            <span  className="todo-count">
                <strong>{numOfItemLeft}</strong>
                <span>{`${numOfItemLeft >1 ? "items" : " item"}`}</span>
                <span> left</span>
            </span>

            <ul className="filters">
                {Btns.map(Btn => 
                    <li><a 
                        href={`#/${Btn.link}`} 
                        class={`${Btn.isActived ? "selected" : ""}`}
                        onClick={Btn.onClick} 
                    >
                        {Btn.title}
                    </a></li>
                    )}
            </ul>

                    {numOfTodo >=1 ? <button className="clear-completed" onClick={clearCompleted}>clear Completed</button> : ""}
        </div>
    )
}

export default TodoFooter