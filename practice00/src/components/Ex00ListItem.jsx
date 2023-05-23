import React from 'react'
import { useContext } from 'react'
import { TodoContext } from '../context/Ex00TodoContext'

const Ex00ListItem = (todo) => {
    const{todos, setTodos} = useContext(TodoContext)
  return (
    <div>
        <h1>Todo List</h1>
        <input type="checkbox" />
        <label>{todo.text}</label>
        <button>삭제</button>
        
    </div>
  )
}

export default Ex00ListItem