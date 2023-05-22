import React from 'react'
import { useContext } from 'react'
import { DarkContext } from '../context/Ex03DarkContext'

const Ex03Main = () => {
  const{setDarkColor} = useContext(DarkContext)
  return (
    <div>
      
      <button onClick={(e)=>{setDarkColor(e.target.style.backgroundColor);}}
      style={{
        backgroundColor : 'black'
      }}>다크모드</button>
      
    </div>
  )
}

export default Ex03Main