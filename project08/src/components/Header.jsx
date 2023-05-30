import React from 'react'
import {Link, Route, Routes} from 'react-router-dom'
import Main from './Main';
const Header = () => {
    /*
    Mission!
    로고를 클릭 -> 메인창으로
    메인창을 클릭 -> 메인창으로
    목록을 클릭 -> ProductList
    */
  return (
    <div className='header-container'>
        
            <Link to="/Main">
                <div className="link-container">
                    idus
                </div>
            </Link>
            
            <div className="link-container">
                MainList
            </div>
            
            <div className="link-container">
                Login/Join
            </div>
            
        
    </div>
  )
}

export default Header