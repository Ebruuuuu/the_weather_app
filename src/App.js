import React, { useContext, useEffect, useState } from 'react'

import WeatherResults from './components/WeatherResults'

import './dist/css/App.css'
import './dist/css/media.css'
const getForecastDataFromLS = () => {
  const data = localStorage.getItem('resultForecasts')
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}
const getLocationDataFromLS = () => {
  const data = localStorage.getItem('resultLocations')
  if (data) {
    return JSON.parse(data)
  } else {
    return []
  }
}

const App = () => {
  const [resultForecasts, setResultForecasts] = useState(
    getForecastDataFromLS()
  )

  const [resultLocations, setResultLocations] = useState(
    getLocationDataFromLS()
  )

  const [error, setError] = useState(null)

  const API_Key = 'f6b506eb8a024853a6f124125221606'
  let value = ''

  const cityChangeHandler = (event) => {
    event.preventDefault()
    value = event.target.value
  }
  const fetchResultsHandler = async (value) => {
    setError(null)
    try {
      //GET Request
      const response = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_Key}&q=${value}&days=1&aqi=no&alerts=no`
      )

      if (!response.ok) {
        throw new Error('Something went wrong!')
      }
      const data = await response.json()
      const resultForecast = data.forecast.forecastday
      const resultLocation = data.location

      setResultForecasts([...resultForecasts, ...resultForecast])
      setResultLocations([...resultLocations, { ...resultLocation }])
    } catch (error) {
      setError(error.message)
    }
  }

  console.log(resultForecasts)
  console.log(resultLocations)

  let context = <p>Found no results.</p>

  if (resultForecasts.length > 0 && resultLocations.length > 0) {
    context = (
      <WeatherResults
        resultForecasts={resultForecasts}
        resultLocations={resultLocations}
      ></WeatherResults>
    )
  }

  if (error) {
    context = <p>{error}</p>
  }

  useEffect(() => {
    localStorage.setItem('resultForcasts', JSON.stringify(resultForecasts))
  }, [resultForecasts])

  useEffect(() => {
    localStorage.setItem('resultLocations', JSON.stringify(resultLocations))
  }, [resultLocations])
  return (
    <div id="result">
      <section id="city">
        <div className="search">
          <input
            onChange={cityChangeHandler}
            type="text"
            id="input"
            placeholder="Enter a city name..."
            autoComplete="on"
          ></input>
          <button
            onClick={() => fetchResultsHandler(value)}
            type="submit"
            id="button"
          >
            Search
          </button>
        </div>
      </section>
      <section>{context}</section>
    </div>
  )
}

export default App
