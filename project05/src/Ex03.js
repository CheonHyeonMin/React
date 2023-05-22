import React from 'react'
import Ex03Header from './components/Ex03Header'
import Ex03Main from './components/Ex03Main'
import { DarkContext } from './context/Ex03DarkContext'
import { useState } from 'react'

const Ex03 = () => {

  const [darkColor, setDarkColor] = useState('white');
  return (
    <DarkContext.Provider value={{darkColor, setDarkColor}}>
    <div>
        <Ex03Header/>
        <Ex03Main/>
    </div>
    </DarkContext.Provider>
  )
}

export default Ex03