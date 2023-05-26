import React from 'react'
import './Ex05.css'
const Ex05 = () => {
    let weather ="https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}";

    let city = ['gwangju', 'seoul', 'busan', 'jeju'];
  return (
    <div className='weather-container'>
        <div className='weather-item'>
            <h1>날씨바라</h1>
            <div className='weather-data'>
                <img></img>
                <h1>온도</h1>
                <h3>지역</h3>
                <h4>흐림</h4>
            
            </div>

            {city.map(item => <button key={item}>{item}</button>)}
        </div>
    </div>
  )
}

export default Ex05