import React, { useEffect, useReducer, useState } from 'react'
import CityContext from './city-context'

const CityContextProvider = (props) => {
  const [forecastState, setForecastState] = useState([])
  const [locationState, setLocationState] = useState({})

  const addForecast = (
    date,
    minTemp_c,
    maxTemp_c,
    chanceOfRain,
    maxWind_kph
  ) => {
    setForecastState([
      ...forecastState,
      [date, minTemp_c, maxTemp_c, chanceOfRain, maxWind_kph],
    ])
  }
  const addLocation = (name) => {
    setLocationState({ ...locationState, name })
  }

  return (
    <CityContext.Provider value={{}}>{props.children}</CityContext.Provider>
  )
}

export default CityContextProvider
