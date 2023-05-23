import React from 'react'
import Ex04ListItem from './Ex04ListItem'
import { useContext } from 'react'
import { TodoContext } from '../context/Ex04TodoContext'

const Ex04List = () => {
    
    const{todos} = useContext(TodoContext);
    
  return (
    <div>
        {todos.map((item, idx) =>
            <Ex04ListItem todo={item} index={idx} key={item.text+idx}/>
        )}
        <p></p>
    </div>
  )
}

export default Ex04List