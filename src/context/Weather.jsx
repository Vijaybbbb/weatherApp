import { createContext, useContext,useDebugValue,useState ,useCallback} from 'react'
import { getWeatherDataForCity,getWeatherDataForLocation } from '../api'

const WeatherContext = createContext(null)

export const useWeather = () =>{
       return useContext(WeatherContext)
}

export const WeatherProvider = (props) =>{
       const [ data,setData]  = useState(null)
       const [searchCity,setSearchCity]  = useState(null)

       const fetchData = async() =>{
              const response = await getWeatherDataForCity(searchCity)
              setData(response)
       }
       const fetchCurrentUserLocationData = useCallback(async () => {
              navigator.geolocation.getCurrentPosition(async (position) => {
                const response = await getWeatherDataForLocation(position.coords.latitude,position.coords.longitude);
                setData(response);
              });
            }, []);

       
       return (
              <WeatherContext.Provider value={{data,searchCity,setSearchCity,fetchData,fetchCurrentUserLocationData}}>
                     {props.children}
              </WeatherContext.Provider>
       )
}