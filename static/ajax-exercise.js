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
  // prevent the default form submission behavior
  // ** create a JavaScript object containing the form input data
  // make a post request using fetch 
    // fetch takes two arguments: 
      // 1. the Flask route to submit to
      // ** 2. the request body (a JS object)
  evt.preventDefault();
  const formInput = {
    melon_type: document.querySelector("#melon-type-field").value,
    qty: document.querySelector("#qty-field").value,
  };
  
  console.log({
    method: 'POST',
    body: JSON.stringify(formInput),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  const orderStatus = document.querySelector("#order-status");

  // TODO: show the result message after your form
  fetch('/order-melons.json', {
      method: 'POST',
      body: JSON.stringify(formInput),
      headers: {
        'Content-Type': 'application/json',
      },
    })
    .then((response) => response.json())
    .then((responseDataJSON) => {
      console.log(responseDataJSON);
      // alert(responseDataJSON[msg]);
      orderStatus.insertAdjacentHTML('beforeend',responseDataJSON.msg);
      if (responseDataJSON.code === "ERROR") {
        orderStatus.classList.add("order-error");
      }
    });
}
document.querySelector('#order-form').addEventListener('submit', orderMelons);
