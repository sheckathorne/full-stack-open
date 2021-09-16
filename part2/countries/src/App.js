import React, { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [ filter, setFilter ] = useState('')
  const [ countries, setCountries ] = useState([])

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  const handleCountryClick = (e) => {
    setFilter(countries.find(country => country.alpha3Code === e.target.value).name)
  }

  useEffect(() => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }, [])

  const filteredCountries = ( filter.length === 0 ) ? countries : countries.filter(country => country.name.toLowerCase().includes(filter.toLowerCase()))
  
  return (
    <div>
      <Filter filter={filter} handleFilterChange={handleFilterChange} />
      <Countries countries={filteredCountries} handleCountryClick={handleCountryClick} />
    </div>
  )
}

const Filter = ({ filter, handleFilterChange }) => <form><div>find countries: <input value={filter} onChange={handleFilterChange} /></div></form>

const Countries = ({ countries, handleCountryClick }) => {
  if ( countries.length > 10 ) {
    return (
      <div>Too many matches, specify another filter...</div>
    )
  } else if ( countries.length > 1 && countries.length <= 10 ) {
    return (
      countries.map(country => <Country key={country.alpha3Code} country={country} handleCountryClick={handleCountryClick} />)
    )
  } else if ( countries.length === 1 ) {
    const weatherUrl = `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY}&query=${countries[0].capital},${countries[0].name}&units=f`
    console.log(countries[0].capital)
    return (
      <CountryDetail country={countries[0]} weatherUrl={weatherUrl} />
    )
  } else {
    return (
      <></>
    )
  }
}

const Country = ({ country, handleCountryClick }) => <div>{country.name}<button value={country.alpha3Code} onClick={handleCountryClick}>show</button></div>

const CountryDetail = ({ country, weatherUrl }) => {
  const [ weather, setWeather ] = useState({name: '', location: ''})

  useEffect(() => {
    axios
      .get(weatherUrl)
      .then(response => {
        setWeather(response.data)
      })
  }, [weatherUrl]) 

  console.log(weather)

  return (
    <div>
      <h1>{country.name}</h1>
      <p>Capital: {country.capital}</p>
      <p>Population: {country.population.toLocaleString("en-US")}</p>
      Spoken Languages: <ul>{country.languages.map(language => <Language key={language.iso639_2} language={language} />)}</ul>
      <img src={country.flag} alt='flag' height='100' width = '250' />
      <Weather weather={weather} />
    </div>
  )
}

const Language = ({ language }) => <li>{language.name}</li>

const Weather = ({ weather }) => {
  console.log(weather)
  return (
    <div>
      <h1>Weather in {weather.location.name}, {weather.location.country}</h1>
      <p>Temperature: {weather.current.temperature} degrees Fahrenheit</p>
      <img src={weather.current.weather_icons[0]} alt='weather icon' />
      <p>Wind: {weather.current.wind_speed}mph from {weather.current.wind_dir}</p>
    </div>
  )
}

export default App;
