import { createContext, useContext,useDebugValue,useState ,useCallback} from 'react'
import { getWeatherDataForCity,getWeatherDataForLocation,suggestPlaces } from '../api'

const WeatherContext = createContext(null)

export const useWeather = () =>{
       return useContext(WeatherContext)
}

export const WeatherProvider = (props) =>{
       const [ data,setData]  = useState(null)
       const [searchCity,setSearchCity]  = useState(null)
       const [suggession,setSuggession] = useState('')
       const [currentValue,setCurrentValue] = useState('')

       const fetchData = async() =>{
              const response = await getWeatherDataForCity(searchCity)
              setData(response)
       }
     
         const fetchDatanull = useCallback(async() =>{
              const response = await getWeatherDataForCity('')
              setData(response)
       })

       const fetchCurrentUserLocationData = useCallback(async () => {
              navigator.geolocation.getCurrentPosition(async (position) => {
                const response = await getWeatherDataForLocation(position.coords.latitude,position.coords.longitude);
                setData(response);
              });
            }, []);

       const suggestedData = async (city) =>{
             const result  = await suggestPlaces(city)
             //console.log(result);
             setSuggession(result)
       }
       const currentSearchValue=(input)=>{
              console.log(input);
              setCurrentValue(input)
       }
       return (
              <WeatherContext.Provider value={{
                     data,
                     searchCity,
                     setSearchCity,
                     fetchData,
                     fetchCurrentUserLocationData,
                     fetchDatanull,
                     suggestPlaces,
                     suggestedData,
                     suggession,
                     setSuggession,
                     currentSearchValue,
                     currentValue
                     }}>
                     {props.children}
              </WeatherContext.Provider>
       )
}