import React from 'react'

const Ex04Board = ({path}) => {

    
  return (
    <div className='board-item'>
        <h3>나</h3>
        <img src={path}></img>
        <h4>현재 점수는?</h4>
        <h3>0</h3>       
    </div>
  )
}

export default Ex04Board