import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'

import { useWeather } from './context/Weather'

function App() {
  const weather = useWeather()
  useEffect(()=>{
   
  })

  return (
    <div className='App'>
        <img src="src/Cbd.gif" alt="" style={{width:'200px',position:'absolute',right:'20px',top:'9px'}} />
        <h1 className='h1'>Weather Forecast</h1>
        <Input/><br />
        <Button onClick={weather.fetchData} value="Search"/><br />
        <Card />
        <Button value="Refresh"/>
        <Button value='get my location' onClick={()=>{weather.fetchCurrentUserLocationData()}}/>
        
    </div>
  )
}

export default App
