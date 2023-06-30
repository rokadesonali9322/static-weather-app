import React from 'react'
import './Weather.css'
import WeatherLeft from './Weather_left'
import WeatherRight from './Weather_right'

function weather() {
  return (
    <div className="weather">
      <WeatherLeft />
      <WeatherRight />
    </div>
  )
}

export default weather
