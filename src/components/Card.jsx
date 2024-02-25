import React from 'react'
import { useWeather } from '../context/Weather'


const Card = () => {
       const weather = useWeather()

  return (
    <div className='card'>
       <img src={weather?.data?.current?.condition?.icon} alt="" />
       {weather?.data?.current?.temp_c ? <h2 className='h1'>{weather?.data?.current?.temp_c}°C</h2> : <h3>Select your Location </h3>}

       <h4 className='h1'>{weather?.data?.location?.name},{weather?.data?.location?.region},{weather?.data?.location?.country}</h4>
    </div>
  )
}

export default Card
