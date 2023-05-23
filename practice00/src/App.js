import React from 'react';
import './App.css';

import { TodoContext } from './context/Ex00TodoContext';
import { useState } from 'react';
import Ex00ListItem from './components/Ex00ListItem';
import Ex00AddTodo from './components/Ex00AddTodo';
import Ex00List from './components/Ex00List';

function App() {
  
  const [todos, setTodos] = useState([
    {text : 'React 복습하기 ', completed : false},
    {text : 'Spring 복습하기', completed : false}
  ])
  const [newTodos, setnewTodos] = useState("");

  

  const handleTodoAddition = ()=>{
    setTodos([...todos,{text : newTodos, completed : false}]);
    setnewTodos("")
  }


  return (
    <TodoContext.Provider  value={{todos, setTodos, newTodos, setnewTodos,handleTodoAddition}}>
    <div>
      <Ex00List/>
      <Ex00AddTodo/>
    </div>
    </TodoContext.Provider>
  );
}

export default App;
