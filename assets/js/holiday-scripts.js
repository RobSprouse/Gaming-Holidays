var holidayUrl;
var holidayData;
var countryInput = 'Canada';
var display = document.querySelector(".base-section");
var holidayList = document.getElementById("holidayListItem");


var holidaysList = document.getElementById("test-me");
var holidaySearchButton = document.querySelector("#searchButton");

function fetchHolidayURL(month, day, year, country){

    // Create variables for the section of the URL + the country
    var countryForURL = `&country=` + country;
    var yearForURL = `&year=` + year;
    var monthForURL = '&month=' + month;
    var dayForURL = '&day=' + day;

    // Create the url based on provided variables
    var createHoliday = "https://holidayapi.com/v1/holidays?pretty&key=6dc87409-6cac-4849-ad17-e0f4fc8a6deb" + countryForURL + yearForURL + monthForURL + dayForURL;

    // Log the url in the console
    console.log(createHoliday);

    // Assign url to golobal variable
    // NOTE - this step is necessary to prevent cors errors
    holidayUrl = createHoliday;
}


fetchHolidayURL(1,1,2022,"US");

// Xpert assistant provided the base for the fetch to avoid CORS errors
fetch(holidayUrl)
  .then(response => response.json())
  .then(data => {
    // Process the response data
    holidayData = data

    // get the number of holidays on a day, set that as i, then itterate through
    for (let i = 0; i < holidayData.holidays.length; i++) 
    {
    // use the previously defined index number to log the name of each holiday
    console.log(holidayData.holidays[i].name);

    // create local variable that adds list items to HTML
    var holidayItem = document.createElement('li');

    // loop through each item
    holidayItem.innerText = holidayData.holidays[i].name;

    // append list item to the section in the html
    holidayList.appendChild(holidayItem);
    }
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
});
var test;

/*
function getCountry(){
    fetch("https://holidayapi.com/v1/countries?pretty&key=6dc87409-6cac-4849-ad17-e0f4fc8a6deb")
    .then(response => response.json())
    .then(data => {
        // Process the response data
        countryData = data;

        
        // itterate through all 250 countries
        for (let i = 0; i <= 250; i++) 
        {
        // get the index number of the country
        if (countryData.countries[i].name == countryInput){
        console.log(countryData.countries[i].code);
        test = countryData.countries[i].code;
        }

        }
        
        
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });
}
*/


// itterate through all 250 countries
for (let i = 0; i <= 250; i++) 
{
// get the index number of the country
if (countriesList[i].name == countryInput){
console.log(countriesList[i].code);
}
}


/*

function getOverrideInputs(){
holidayCountry = document.getElementById("countryInput").value;
}

holidaySearchButton.addEventListener("click", getOverrideInputs);

console.log(holidayCountry);

*/
