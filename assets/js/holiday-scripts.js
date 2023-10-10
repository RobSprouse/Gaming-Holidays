var holidayCountry = 'US';
var holidayYear = '2022';
var holidayMonth = '1';
var holidayDay = '1';
var display = document.querySelector(".base-section");
//var holidayApiKey = '6dc87409-6cac-4849-ad17-e0f4fc8a6deb'

// Xpert assistant help with setting up API 
var holidaysList = document.getElementById("test-me");
var holidaySearchButton = document.querySelector("#search-button");

function fetchHolidayURL(month, day, year, country){

    // Create variables for the section of the URL + the country
    var countryForURL = `&country=` + country;
    var yearForURL = `&year=` + year;
    var monthForURL = '&month=' + month;
    var dayForURL = '&day=' + day;

    // Create the url in an array
    /*
    const urlArray = ["`","https://holidayapi.com/v1/holidays?pretty&key=6dc87409-6cac-4849-ad17-e0f4fc8a6deb",countryForURL,yearForURL,monthForURL,"`"];
    */

    var urlArray = ["`","https://holidayapi.com/v1/holidays?pretty&key=6dc87409-6cac-4849-ad17-e0f4fc8a6deb","`"];

    // Add the various options to the array, allowing for specific inputs
    urlArray.splice(2,0, countryForURL);
    urlArray.splice(2,0, yearForURL);
    urlArray.splice(2,0, monthForURL);
    urlArray.splice(2,0, dayForURL);

    console.log(urlArray);

    // Turn the url into a string
    let holidayUrl = urlArray.join("");
    console.log(holidayUrl);
}

fetchHolidayURL();



/*
console.log(holidayUrl)

fetch(holidayUrl)
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
}/*
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
        
        function testMe(countries){countryData.countries.name
            return countryData.countries.name === "Canada";
        }
        console.log(countryData.countries.name.find(testMe));
        
        
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
console.log(holidayCountry);

holidaySearchButton.addEventListener("click", getOverrideInputs);
