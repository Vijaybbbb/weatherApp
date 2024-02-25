import { useEffect, useState } from 'react'
import './App.css'
import Card from './components/Card'
import Input from './components/Input'
import Button from './components/Button'
import { useWeather } from './context/Weather'
import Suggessions from './components/Suggessions'
import RefreshBtn from './components/RefreshBtn'
import GetMylocBtn from './components/GetMylocBtn'


function App() {
  const weather = useWeather()
  useEffect(()=>{
   
  })

  return (
    <div className='App'>
        
        <img src="src/Cbd.gif" className='img1' alt=""  />
        <img src="src/Cbd.gif" className='img2' alt=""  />
        <img src="src/Cbd.gif" className='img3' alt=""  />


        <h1 className='h1'>Weather Forecast</h1>
        <Input/>
        <Button fetchData={weather.fetchData} setCurrentValue={weather.setCurrentValue} value="Search"/><br /><br />
        <Suggessions/>

        <Card /><br />
        <RefreshBtn  onClick={weather.fetchDatanull}/>
        <GetMylocBtn  onClick={weather.fetchCurrentUserLocationData}/>

       
        
    </div>
  )
}

export default App
