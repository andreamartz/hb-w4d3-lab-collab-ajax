'use strict';

// PART 1: SHOW A FORTUNE

// select the div with id fortune-text
const fortuneDiv = document.querySelector('#fortune-text');

function showFortune(evt) {
  // send request to /fortune with fetch
  fetch('/fortune')
    .then((response) => response.text())
    .then((responseData) => {
      fortuneDiv.innerHTML = responseData;
    });
  // take the fortune returned and place it in the div with id fortune-text
}
const button = document.querySelector('#get-fortune-button');
button.addEventListener('click', showFortune);

// PART 2: SHOW WEATHER
const weatherDiv = document.querySelector('#weather-info');

function showWeather(evt) {
  evt.preventDefault();

  const url = '/weather.json';
  const zipcode = document.querySelector('#zipcode-field').value;

  // TODO: request weather with that URL and show the forecast in #weather-info
  fetch('/weather.json')
  .then((response) => response.json())
  .then((responseData) => {
    console.log(responseData);
    weatherDiv.innerHTML = responseData['forecast'];
  });
}

document.querySelector('#weather-form').addEventListener('submit', showWeather);

// PART 3: ORDER MELONS

function orderMelons(evt) {
  evt.preventDefault();

  // TODO: show the result message after your form
  // TODO: if the result code is ERROR, make it show up in red (see our CSS!)
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
