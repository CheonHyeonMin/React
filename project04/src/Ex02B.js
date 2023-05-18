import React from 'react'
import menu from "./menu.json"
import MenuItem from './components/Ex02MenuItemB'

const Ex02B = () => {
    console.log('menu :', menu.list)
  return (

    <div>
        {menu.list.map(item =><MenuItem key={item.name} name={item.name}
        price={item.price} content={item.content} imgSrc={item.imgSrc} />)}
    </div>

  )
}

export default Ex02B