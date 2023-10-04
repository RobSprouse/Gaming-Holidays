var country = 'US';
var year = '2022';
var month = '1';
var day = '1';
var display = document.querySelector(".base-section");
var apiKey = '6dc87409-6cac-4849-ad17-e0f4fc8a6deb'

// Xpert assistant help with setting up API 
var holidaysList = document.getElementById("test-me");



const url = `https://holidayapi.com/v1/holidays?pretty&key=6dc87409-6cac-4849-ad17-e0f4fc8a6deb&country=US&year=2022`;
console.log(url)
fetch(url)
  .then(response => response.json())
  .then(data => {
    // Process the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });
