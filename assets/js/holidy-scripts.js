var country = 'US';
var year = '2022';
var month = '1';
var day = '1';
var display = document.querySelector(".base-section");


// Xpert assistant help with setting up API 
// Note, accessing data outside of using cors is not possible
$.ajax({
    url: 'https://holidayapi.com/v1/holidays',
    method: 'GET',
    data: {
      key: '6dc87409-6cac-4849-ad17-e0f4fc8a6deb',
      country: country,
      year: year,
      month: month,
      day: day
    },
    success: function(response) {
      // Handle the response data
      console.log(response);
      display.textContent = "Game Over";
    },
    error: function(xhr, status, error) {
      // Handle any errors
      console.error(error);
    }
  });
  