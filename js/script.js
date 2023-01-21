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
 * This function displays the weather by the minute.
 */

const getWeather = async (URLAddress) => {
  try {
    // Fetch
    const result = await fetch(URLAddress)
    const jsonData = await result.json()
    console.log(jsonData)

    //Variable for img
    const icon = jsonData.weather[0].icon
      const imageUrl = "http://openweathermap.org/img/wn/" + icon + "@2x.png"
    if (jsonData.weather[0].id) {
    document.getElementById("image").innerHTML = 
       '<img src="' + 
      imageUrl + 
      '" alt="Weather image" ' +
      '>'
    }
    else {
      console.log(err)
    }
    
    if (jsonData.main) {
      
      //Variables for weather
      const temp = jsonData.main.temp - 273.15
      const feel = jsonData.main.feels_like - 273.15
      const humidity = jsonData.main.humidity
      const weather = jsonData.weather[0].description

      //Output of the variables
     document.getElementById("temperature").innerHTML = "Temperature: " + temp.toFixed(0) + " °C" + "<br>" + "Feels Like: " + feel.toFixed(0) + " °C" + "<br>" 
 + "Humidity: " + humidity.toFixed(0) + "<br>" 
 + "Forecast: " + weather
  } else {
    console.log(error)
  }
    //error catch
  } catch (err) {
    console.log(err)
  }
}

getWeather("https://api.openweathermap.org/data/2.5/weather?lat=45.4211435&lon=-75.6900574&appid=fe1d80e1e103cff8c6afd190cad23fa5")
