var holidayCountry = 'US';
var holidayYear = '2022';
var holidayMonth = '1';
var holidayDay = '1';
var holidayUrl;
var holidayData;
var display = document.querySelector(".base-section");
//var holidayApiKey = '6dc87409-6cac-4849-ad17-e0f4fc8a6deb'

// Xpert assistant help with setting up API 
var holidaysList = document.getElementById("test-me");
var holidaySearchButton = document.querySelector("#searchButton");

function fetchHolidayURL(month, day, year, country){

    // Create variables for the section of the URL + the country
    var countryForURL = `&country=` + country;
    var yearForURL = `&year=` + year;
    var monthForURL = '&month=' + month;
    var dayForURL = '&day=' + day;

    var urlArray = ["`","https://holidayapi.com/v1/holidays?pretty&key=6dc87409-6cac-4849-ad17-e0f4fc8a6deb","`"];

    // Add the various options to the array, allowing for specific inputs
    urlArray.splice(2,0, countryForURL);
    urlArray.splice(2,0, yearForURL);
    urlArray.splice(2,0, monthForURL);
    urlArray.splice(2,0, dayForURL);

    console.log(urlArray);

    // Turn the url into a string
    holidayUrl = urlArray.join("");

}

console.log(holidayUrl);

fetchHolidayURL(1,1,2023,"US");


fetch(`https://holidayapi.com/v1/holidays?pretty&key=6dc87409-6cac-4849-ad17-e0f4fc8a6deb&country=US&year=2022&day=1&month=1`)
  .then(response => response.json())
  .then(data => {
    // Process the response data
    holidayData = data

    console.log(holidayData.holidays[0].name);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
});



/*

 var testData;

const countryUrl = `https://holidayapi.com/v1/countries?pretty&key=6dc87409-6cac-4849-ad17-e0f4fc8a6deb`;
console.log(countryUrl);

function logData()
{
    getCountry()

}

function proData()
{
    console.log(testData);
}


function getCountry(){
    fetch(countryUrl)
    .then(response => response.json())
    .then(data => {
        // Process the response data
        countryData = data;
        testData = data;
        console.log(testData);
        testName = 'United States';
        
        
        countryData.countries.forEach((testValue, index)=>{let test = `array number ${testValue.name}`
        if (test === "United States") {
        let getStuff = `index ${index}`;
        console.log(getStuff);
        }
        else {
            console.log("this is not working :)")
        }
        });
        
        
        console.log(countryData.countries[0].code);
        proData();
    })
    .catch(error => {
        // Handle any errors
        console.error(error);
    });
}

logData();



*/

function getOverrideInputs(){
holidayCountry = document.getElementById("countryInput").value;
}

holidaySearchButton.addEventListener("click", getOverrideInputs);

console.log(holidayCountry);
