import React from 'react'

import '../dist/css/Weather.css'

const Weather = (props) => {
  return (
    <li className="weather">
      <h2>Date: {props.date}</h2>
      <h3>MinTemp: {props.minTemp_c}</h3>
      <h3>MaxTemp: {props.maxTemp_c}</h3>
      <h3>ChangeOfRain: {props.chanceOfRain}</h3>
      <h3>MaxWind: {props.maxWind_kph}</h3>
    </li>
  )
}

export default Weather
