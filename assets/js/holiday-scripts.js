var holidayUrl;
var holidayData;
var countryInput = 'Canada';
var country = 'CA';
var isReal = 0;
var display = document.querySelector(".base-section");
var holidayList = document.getElementById("holidayListItem");
var holidaySearchButton = document.getElementById("holidaySearchButton");

function selectCountry(){

    // Create variable to see if the country name matches the input
    // country selector to get country code from country name
    // itterate through all 250 countries
    for (let i = 0; i <= 250; i++) 
    {
        // get the index number of the country
        if (countriesList[i].name == countryInput){
        // set the country variable equal to the country code
        country = countriesList[i].code;
        // change isReal to 1, used to indicate if the user input is a valid country for error handling
        isReal = 1;
        }
    }

}


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

selectCountry();

fetchHolidayURL(1,1,2022,country);


function getHoliday(){
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
}

getHoliday();

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


// function that overrides the default country
function getOverrideInputs(){

    // remove child code from https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
    while (holidayList.firstChild) {
        holidayList.removeChild(holidayList.firstChild);
      }
    // get the country from the input box
    countryInput = document.getElementById("countryInput").value;
    countryInput = countryInput.toLowerCase();

    console.log(countryInput);
    // call the selectCountry function to use the imput to get the country code
    selectCountry();

    // if the country name does not match the options, enter no
    console.log(isReal);
    if (isReal == 0){
        window.alert("This is not a valid answer, please try again. Rememeber that the country name must be spelled correctly.")
    }

    console.log(country);
    // call the fetchHolidayURL to input the new country into the url
    fetchHolidayURL(1,1,2022,country);
    // call the API with the new URL to get the new holidays
    getHoliday();

}

// on click call the events needed to override the default country
holidaySearchButton.addEventListener("click", getOverrideInputs);




