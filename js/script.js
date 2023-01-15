// Created by: Alex Nelson
// Created on: Dec 2022
// This file contains the JS functions for index.html

"use strict"

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-UNIT6-03-API/sw.js", {
    scope: "/ICS2O-UNIT6-03-API/",
  })
}

/**
 * This function displays an alert.
 */
// fetch("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
// .then((res) => res.json())
// .then((data) => console.log(data))
// .catch((err) => console.error(err))


const getWeather = async (URLAddress) => {
  try {
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)
    if (jsonData.main) {
      const temp = jsonData.main.temp - 273.15
      const feel = jsonData.main.feels_like - 273.15
      const humidity = jsonData.main.humidity
     document.getElementById("temperature").innerHTML = "Temperature: " + temp.toFixed(0) + " °C" + "<br>" + "Feels Like: " + feel.toFixed(0) + " °C" + "<br>" 
 + "Humidity: " + humidity.toFixed(0)
  } else {
    console.log(error)
  }
  } catch (err) {
    console.log(err)
  }
}

getWeather("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")