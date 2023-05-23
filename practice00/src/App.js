import logo from './logo.svg';
import './App.css';
import { TodoContext } from './context/Ex00TodoContext';
import { useState } from 'react';

function App() {
  
  const [todos, setTodos] = useState([{
    text : "React 복습하기 ", completed : false,
    text : "Spring 복습하기", completed : false
  }])


  return (
    <TodoContext.Provider value={{todos, setTodos}}>
    <div>
      
    </div>
    </TodoContext.Provider>
  );
}

export default App;
