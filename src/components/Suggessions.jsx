import React, { useEffect, useRef } from 'react'
import { useWeather } from '../context/Weather'

const Suggessions = () => {
       const weather  = useWeather();
       const box=useRef('')
       
//        const hideUnhideBox =()=>{
//         box.current.style.backgroundColor = 'green'
//  }
useEffect(() => {
  // Check if weather data is available before applying styles
  if (weather.currentValue !== '' && box.current) {
    box.current.style.display = 'block';
  }
  else{
    box.current.style.display ='none';
  }
}, [weather]); // Trigger effect when weather data changes

  return (
    <div className='dropdown' >
              <div className="dropdown-row" ref={box}>
                 {weather?.suggession}
                
              </div>
              
    </div>
  )
}

export default Suggessions
