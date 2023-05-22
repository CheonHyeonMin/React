import React from 'react'
import { useContext } from 'react'
import { DarkContext } from '../context/Ex03DarkContext'

const Ex03Main = () => {
  const{IsDark, setIsDark, setTextColor, setDarkColor} = useContext(DarkContext)
  return (
    <div>

      <button onClick={()=>{
        IsDark == false ?  setIsDark(true) : setIsDark (false);
        if(IsDark){
          setTextColor ("black");
          setDarkColor ("white");
        }
        else{
          
          setTextColor("white");
          setDarkColor ("black");
        }

      }}
      >다크모드</button>
    </div>
  )
}

export default Ex03Main