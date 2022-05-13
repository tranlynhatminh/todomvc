import React from 'react';
import TodoInput from './Component/TodoInput';
import TodoList from './Component/TodoList';

import './App.css';
import './Css/Todo.css'
import TodoFooter from './Component/TodoFooter';

const isNotCheckedAll = (todos =[]) => todos.find(todo => !todo.isCompleted)

const filterStatus = (todos = [], status = '', id = '') => {
  switch (status) {
    case 'ACTIVE':
      return todos.filter(todo => !todo.isCompleted)
    case 'COMPLETED':
      return todos.filter(todo => todo.isCompleted)
    case 'REMOVE':
      return todos.filter(todo => todo.id !== id)
    default:
      return todos
  }
}

class App extends React.Component {

  state= {
    todoListItem:[{
      text: "todo 1",
      id: 1,
      isCompleted: true
    },{
      text: "todo 2",
      id: 2,
      isCompleted: false
    }],
    isCheckAll: false,
    status: "ALL"
  }
  
  addTodo = (todo = {}) => {
    this.setState(preState =>( {
      todoListItem: [...preState.todoListItem, todo]
    }))
  }

  remove = (id= '') => {
    const {todoListItem}= this.state
    this.setState ({
      todoListItem: filterStatus(todoListItem, 'REMOVE', id)
    })
  }

  markCompleted = (id = '') => {
    const {todoListItem} = this.state
    this.setState(a => ({
      todoListItem: todoListItem.map(todo => todo.id === id ? ({...todo, isCompleted: !todo.isCompleted}): todo),
      isCheckAll: !isNotCheckedAll(todoListItem.map(todo => todo.id === id ? ({...todo, isCompleted: !todo.isCompleted}): todo))
    }))
  }
  
  checkAll = () => {
    const {todoListItem, isCheckAll} = this.state
    this.setState(a => ({
      todoListItem: todoListItem.map(todo =>({...todo, isCompleted: !isCheckAll})),
      isCheckAll: !a.isCheckAll
    }))
  }

  componentDidMount() {
    this.setState({
      isCheckAll: !isNotCheckedAll(this.state.todoListItem)
    })
  }

  setFilter = (status ='') => {
    this.setState ({
      status
    })
  }

  clearCompleted = () => {
    this.setState({
      todoListItem: filterStatus(this.state.todoListItem, "ACTIVE")
    })
  }

  render() {

    return (
      <div className="todoapp">
        
          <TodoInput 
            addTodo={this.addTodo}
          />

          <TodoList 
            todoListItem={filterStatus(this.state.todoListItem, this.state.status)}
            remove={this.remove}
            markCompleted={this.markCompleted}
            checkAll={this.checkAll}
            isCheckAll={this.state.isCheckAll}
          />

          <TodoFooter 
            setFilter={this.setFilter}
            status={this.state.status}
            numOfTodo={filterStatus(this.state.todoListItem, "COMPLETED").length}
            numOfItemLeft={filterStatus(this.state.todoListItem, "ACTIVE").length}
            clearCompleted={this.clearCompleted}
          />
        </div>
      )
  }
}

export default App;
