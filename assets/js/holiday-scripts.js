// COMMENT: the formatting in my vs code changed how some of this looks which made some of this show up as changed code
var holidayUrl;
var holidayData;
var countryInput = "United States";
var country; //= 'US'; // default country // COMMENT: out to see if selectcoutry works without it
var isReal; //= 0; // COMMENT: ^^ same
var dayInput;
var monthInput;
var holidayList = document.getElementById("holidayListItem");
var holidaySearchButton = document.getElementById("holidaySearchButton");
var errorFlag = document.getElementById("errorText");

// COMMENT: These functions do the same thing. If either are them are called, they both would just toggle the div hidden or shown
// COMMENT: changed script js to handle the showing of this div, will show only when a single game is shown
// COMMENT: when a list of games is shown, that fetch function will hide it
// // hide the holiday card from the main page
// function hideHoliday() {
//      var toggleStart = document.getElementById("holidayDates");
//      if (toggleStart.style.display === "none") {
//           toggleStart.style.display = "block";
//      } else {
//           toggleStart.style.display = "none";
//      }
// }

// hideHoliday();

// // show the holiday card when an individual game is clicked
// function showHoliday() {
//      var toggleStart = document.getElementById("holidayDates");
//      if (toggleStart.style.display === "block") {
//           toggleStart.style.display = "none";
//      } else {
//           toggleStart.style.display = "block";
//      }
// }

function selectCountry() {
     // Create variable to see if the country name matches the input
     // country selector to get country code from country name
     // iterate through all 250 countries
     for (let i = 0; i <= 250; i++) {
          // get the index number of the country
          if (countriesList[i].name.toLowerCase() == countryInput) {
               // set the country variable equal to the country code
               country = countriesList[i].code;
               // change isReal to 1, used to indicate if the user input is a valid country for error handling
               isReal = 1;
               // remove the error text from the error box
               while (errorFlag.firstChild) {
                    errorFlag.removeChild(errorFlag.firstChild);
               }
          }
     }
     return country; // return the country code
}

function fetchHolidayURL(month, day, year, country) {
     // Create variables for the section of the URL + the country
     var countryForURL = `&country=` + country;
     var yearForURL = `&year=` + year;
     var monthForURL = "&month=" + month;
     var dayForURL = "&day=" + day;

     // Create the url based on provided variables
     var createHoliday =
          "https://holidayapi.com/v1/holidays?pretty&key=6dc87409-6cac-4849-ad17-e0f4fc8a6deb" +
          countryForURL +
          yearForURL +
          monthForURL +
          dayForURL;

     // Assign url to global variable
     // NOTE - this step is necessary to prevent cors errors
     holidayUrl = createHoliday;
     return holidayUrl; // COMMENT: added to pass variable
}

// selectCountry(); // COMMENT: commented out for functions in game api code
// fetchHolidayURL(1,1,2022,country);

function getHoliday(holidayUrl) {
     holidayList.innerHTML = ""; // COMMENT: clears out the previously appended holidays
     // Xpert assistant provided the base for the fetch to avoid CORS errors
     fetch(holidayUrl)
          .then((response) => response.json())
          .then((data) => {
               // COMMENT: added this to fetch future dates if there isn't a holiday on that date. was worried the user would happen to pick games without a holiday, this way it adds some more functionality
               if (data.holidays.length === 0) {
                    holidayUrl = holidayUrl + "&upcoming=true";
                    return fetch(holidayUrl)
                         .then((response) => response.json())
                         .then((data) => {
                              holidayData = data;
                              // get the number of holidays on a day, set that as i, then iterate through
                              for (let i = 0; i < holidayData.holidays.length; i++) {
                                   // create local variable that adds list items to HTML
                                   var holidayItem = document.createElement("li");
                                   if (i === 0) {
                                        // COMMENT: for the first holiday displayed, gives text to let users know there wasn't a holiday on that particular release date
                                        holidayItem.innerText =
                                             "There wasn't a holiday on this date, but the closest holiday(s) in it's future is(are): " +
                                             holidayData.holidays[i].name;
                                   } else if (i > 0) {
                                        // COMMENT: displays the rest of the holidays if there's more than one
                                        holidayItem.innerText = ", " + holidayData.holidays[i].name;
                                   }

                                   // append list item to the section in the html
                                   holidayList.appendChild(holidayItem);
                              }
                         });
               } else {
                    // COMMENT: continues to handle the display of holiday data if the release date was on a holiday
                    for (let i = 0; i < data.holidays.length; i++) {
                         // create local variable that adds list items to HTML
                         var holidayItem = document.createElement("li");

                         // loop through each item
                         holidayItem.innerText = data.holidays[i].name;

                         // append list item to the section in the html
                         holidayList.appendChild(holidayItem);
                    }
               }
               
          })
          .catch(error => {
               // Handle any errors
               console.error(error);
           });
          
}

// getHoliday(); // COMMENT: commented out since handled differently

function getOverrideInputs(holidayUrl) { // COMMENT:passing holidayURL to this
     // remove child code from https://developer.mozilla.org/en-US/docs/Web/API/Node/removeChild
     while (holidayList.firstChild) { // COMMENT: I'm not sure if this is needed since i've changed it, will try to look at it later
          holidayList.removeChild(holidayList.firstChild);
     }

     // get the country from the input box
     countryInput = document.getElementById("countryInput").value;
     countryInput = countryInput.toLowerCase();

     // call the selectCountry function to use the input to get the country code
     selectCountry();

     // if the country name does not match the options, show error wording
     if (isReal == 0) {
          errorFlag.innerHTML =
               "This is not a valid answer, please try again. Remember that the country name must be spelled correctly.";
          return; // COMMENT: stop function if it's not a valid answer
     }

     // COMMENT: added this to pass the original URL to it if it added upcoming holidays in it
     // Remove '&upcoming=true' from holidayUrl if it exists
     holidayUrl = holidayUrl.replace("&upcoming=true", "");

     // COMMENT: added this to replace the country with the user's input is the country returned isReal
     // Replace the existing country in holidayUrl with the new country
     holidayUrl = holidayUrl.replace(/&country=[A-Z]{2}/, "&country=" + country);

     // call the API with the new URL to get the new holidays
     getHoliday(holidayUrl);

     // reset the isReal variable to allow proper error handling on each call
     isReal = 0;
}
// COMMENT: made it a function to pass the changed URL in getOverrideInputs 
// on click call the events needed to override the default country
holidaySearchButton.addEventListener("click", function () {
     getOverrideInputs(holidayUrl);
});
