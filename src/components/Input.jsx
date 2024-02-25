import React from 'react'
import { useWeather } from '../context/Weather'


const Input =() => {
       const weather  = useWeather();
       
     

  return (
    <input className='input-field'
    placeholder='Search Here'
    value={weather.searchCity}
    
    onChange={(e)=>{ 
      weather.suggestPlaces(e.target.value)
      weather.suggestedData(e.target.value) 
      weather.currentSearchValue(e.target.value)
    }}
    
    />
  )
}

export default Input
