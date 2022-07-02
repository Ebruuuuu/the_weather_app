import React from 'react'

const CityContext = React.createContext({
  //Initial State
  forecastResults: [],
  locationResults: {},

  addForeCast: (forecast) => {},
  addLocation: (location) => {},
})

export default CityContext
