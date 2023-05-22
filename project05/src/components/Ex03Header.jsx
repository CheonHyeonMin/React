import React from 'react'
import { useContext } from 'react'
import { DarkContext } from '../context/Ex03DarkContext'

const Ex03Header = () => {
  const{darkColor} = useContext(DarkContext)
  return (
    <div>
      <div style={{
        background : `${darkColor}`
      }}
      ></div>
    </div>
  )
}

export default Ex03Header