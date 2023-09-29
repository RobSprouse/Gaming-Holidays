

const countryCode = 'US'; // Replace with the desired country code
const year = 2022; // Replace with the desired year

// Note - fetch written with help from Xpert learning assistant
const apiKey = '6dc87409-6cac-4849-ad17-e0f4fc8a6deb';
// Make the HTTP GET request to the API endpoint
fetch(`https://holidayapi.com/v1/holidays?key=${apiKey}&country=${countryCode}&year=${year}`)
  .then(response => response.json())
  .then(data => {
    // Handle the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });