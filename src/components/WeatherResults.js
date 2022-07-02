import '../dist/css/WeatherResults.css'
import CityContext from '../store/city-context'
import Weather from './Weather'
import WeatherName from './WeatherName'

const WeatherResults = (props) => {
  return (
    <div>
      <ul className="results">
        {props.resultLocations.map((resultLocation) => (
          <WeatherName
            key={resultLocation.lat}
            name={resultLocation.name}
          ></WeatherName>
        ))}

        {props.resultForecasts.map((resultForecast) => (
          <Weather
            key={resultForecast.day.mintemp_c}
            date={resultForecast.date}
            minTemp_c={resultForecast.day.mintemp_c}
            maxTemp_c={resultForecast.day.maxtemp_c}
            chanceOfRain={resultForecast.day.daily_chance_of_rain}
            maxWind_kph={resultForecast.day.maxwind_kph}
          />
        ))}
      </ul>
    </div>
  )
}

export default WeatherResults
