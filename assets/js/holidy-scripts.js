var country = 'US';
var year = '2022';
var month = '1';
var day = '1';
var display = document.querySelector(".base-section");
var apiKey = '6dc87409-6cac-4849-ad17-e0f4fc8a6deb'

// Xpert assistant help with setting up API 
var holidaysList = document.getElementById("test-me");
var searchButton = document.querySelector("#search-button");
/*

const url = `https://holidayapi.com/v1/holidays?pretty&key=6dc87409-6cac-4849-ad17-e0f4fc8a6deb&country=US&year=2022`;
console.log(url)

fetch(url)
  .then(response => response.json())
  .then(data => {
    // Process the response data
    holidayData = data

    console.log(holidayData.holidays);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
*/

function getCountry(){
countryInput = document.getElementById("country-input").value;
yearInput = document.getElementById("year-input").value;
console.log(countryInput);
console.log(yearInput);
}

searchButton.addEventListener("click", getCountry);
