$(document).ready(function () {
     function createDropdown(id, options) {
          let dropdown = $("<select>").attr("id", id);
          options.forEach((option) => {
               dropdown.append(new Option(option.text, option.value));
          });
          return dropdown;
     }

     $(".gameSearch").append(createDropdown("platformsDropdown", platforms));

     // TODO: creat a drowndown to handle how the submit works
     $("#searchInput").submit(function (event) {
          event.preventDefault();
          let platformValue = $("#platformsDropdown").val();
          let userInput = $('#searchInput input[name="searchInput"]').val();
          fetchGamesListURL(platformValue, userInput);
     });
     // TODO: get this to work
     $("body").on("click", ".gameName", function () {
          let fullId = $(this).attr("id"); // Get the full id, e.g., "gameId3505"
          let gameId = fullId.replace("gameId", ""); // Remove the 'gameId' prefix
          console.log(gameId);
          fetchGameIdURL(gameId); // Call the function with the game ID
     });
});

//  $('gameSearch').append(createDropdown('genresDropdown', genres));

// TODO: Define all URL's and object keys
const apiKey = "?key=164d87e9b2364003ad69bc496d5e3d7f";

let gameName = "";
let gameId = "";
let genreId = "";
let developerId = "";
let platformId = "";
let pageNum = "";
let pageSize = "";
let searchQuery = [];
let searchOrder = "";
let developers = "";
let genres = "";
let tags = "";
let releaseDates = "";

// COMMENT: Game list and their data.keys commented
// let gameListURL = "https://api.rawg.io/api/games" + apiKey;
// after fetchGameListURL (gameList)
// gameID = gameList.results[j].id // used to pass to fetchGameIdURL, not displayed
// gameName = gameList.results[j].name
// platforms = gameList.results[j].platforms[k].platform.name
// releasedDate = gameList[j].released
// backgroundImg = gameList[j].background_image // value is a URL
// shortScreenShots = gameList[j].short_screenshots[k].image // value is a URL
//  gameListTags = gameList[j].tags[k].name

// COMMENT: Game and their data.keys commented
// let gameIdURL = "https://api.rawg.io/api/games/" + gameId + apiKey;
// after fetchGameIdURL (game)
// let gameName = game.name;
// let gameDevelopers = game.developers[j].name;
// let gameReleaseDate = game.released;
// let gameBackgroundImage = game.background_image; // value is a URL
// let gamePlatforms = game.platforms[j].platform.name
// let gameDescription = game.description_raw;
// let gameGenres = game.genres[j].name
// let gameMetacritic = game.metacritic
// let alternativeNames = game.alternative_names // Example: "Grand Theft Auto V" is also "GTA V"

// TODO: Decide if we want to add a Wishlist as an option to store games locally

// COMMENT: Genre URLS
const genreURL = "https://api.rawg.io/api/genres" + apiKey;
const genreIdURL = "https://api.rawg.io/api/genres/" + genreId + apiKey;
// COMMENT: Developers URLs
const developersURL = "https://api.rawg.io/api/developers" + apiKey;
const developerIdURL = "https://api.rawg.io/api/developers/" + developerId + apiKey;
// COMMENT: Platforms URLs and Platforms define
const platformsURL = "https://api.rawg.io/api/platforms" + apiKey; // platforms are defined in dropdownVariables.js

// COMMENT: Search Parameters for games
// const pageNumParam = `&page=${pageNum}`;
// const resultsPerPageParam = `&page_size=${pageSize}`;
// const searchQueryParam = `&search=${searchQuery}`;
// const platformsFilter = `&platforms=${platforms}`; // Filter by platforms, for example: 4,5.
// const developersFilter = `&developers=${developers}`; // Filter by developers, for example: 1612,18893 or valve-software,feral-interactive.
// const genresFilter = `&genres=${genres}`; // Filter by genres, for example: 4,51 or action,indie.
// const tagsFilter = `&tags=${tags}`; // Filter by tags, for example: 31,7 or singlePlayer,multiplayer.
// const datesFilter = `&dates=${releaseDates}`; // Filter by a release date, for example: 2010-01-01,2018-12-31.1960-01-01,1969-12-31.
// const metacriticFilter = `&metacritic=${metacritic}`; //Filter by a metaCritic rating, for example: 80,100.
// const searchOrderParam = `&ordering=${searchOrder}`; // Available fields: name, released, added, created, updated, rating, metacritic. You can reverse the sort order adding a hyphen, for example: -released.

// TODO: Get data and append it to the HTML document so it can be formatted

// COMMENT: fetch for gameListURL
function fetchGamesListURL(platformValue, userInput) {
     $(".gameCardsDiv").empty();
     let gameListURL = "https://api.rawg.io/api/games" + apiKey;
     if (platformValue) {
          const platformsFilter = `&platforms=${platformValue}`;
          gameListURL += platformsFilter;
     }
     if (userInput) {
          const searchQueryParam = `&search=${userInput}`;
          gameListURL += searchQueryParam;
     }

     fetch(gameListURL)
          .then((response) => {
               if (!response.ok) {
                    $("#invalidEntry").show();
                    $("#invalidEntry").text("The response from the api failed. Please try again.");
                    throw new Error("HTTP error " + response.status);
               }
               return response.json();
          })
          .then((gameList) => {
               let gameListDiv = $("<div class='gameListDiv'>");
               $(".gardCardsDiv").append(gameListDiv);
               for (var i = 0; i < gameList.results.length; i++) {
                    let minGameCard = $("<div class='minGameCard'>");
                    minGameCard.append(
                         $("<img>", { class: "smallBackgroundImage", src: gameList.results[i].background_image })
                    );
                    minGameCard.append(
                         $("<h2 class='gameName' id='gameId" + gameList.results[i].id + "'>").text(
                              gameList.results[i].name
                         )
                    );
                    minGameCard.append($("<h3 class='releaseDateHeader'>").text("Release Date:"));
                    minGameCard.append(
                         $("<ul class='releaseDate'>").append($("<li>").text(gameList.results[i].released))
                    );
                    minGameCard.append($("<h3>Platforms</h3>"));
                    minGameCard.append(
                         $("<ul class='platformName'>").append(
                              $.map(gameList.results[i].platforms, function (platform) {
                                   return $("<li>").text(platform.platform.name);
                              })
                         )
                    );

                    $(".gameCardsDiv").append(minGameCard);
               }
          })
          .catch((error) => console.error("Error:", error));
}

// // TODO: Finish platforms function
// // fetch for platforms
// function fetchPlatformsURL(platformsURL) {
//      fetch(platformsURL)
//           .then((response) => {
//                if (!response.ok) {
//                     $("#invalidEntry").show();
//                     $("#invalidEntry").text("The response from the api failed. Please try again.");
//                     throw new Error("HTTP error " + response.status);
//                }
//                return response.json();
//           })
//           .then((platforms) => {
//                console.log(platforms);
//                for (var i = 0; i < platforms.results.length; i++) {
//                     console.log(
//                          "{ text: '" + platforms.results[i].name + "', value: '" + platforms.results[i].id + "' }"
//                     );
//                }
//           })
//           .catch((error) => console.error("Error:", error));
// }

// COMMENT: Function to fetch a game by it's Id number (see TODO)
function fetchGameIdURL(gameId) {
     $(".gameCardsDiv").empty();
     let gameIdURL = "https://api.rawg.io/api/games/" + gameId + apiKey;
     fetch(gameIdURL)
          .then((response) => {
               if (!response.ok) {
                    // TODO: Display text when the fetch fails, input is empty
                    throw new Error("HTTP error " + response.status);
               }
               return response.json();
          })
          .then((response) => response.json())
          .then((game) => {
               // TODO:add developers <h3> ul li developers
               let singleGameCard = $("<div class='singleGameCard'>");
               singleGameCard.append(
                    $("<img>", { class: "backgroundImage", src: game.background_image, alt: "background image" })
               );
               singleGameCard.append($("<h2 class='gameName'>").text(game.name));
               singleGameCard.append($("<h3 class='releaseDateHeader'").text("Release Date:"));
               minGameCard.append($("<ul class='releaseDate'>"));
               singleGameCard.append($("<li'>").text(game.released));
               singleGameCard.append("<h3>Platforms</h3>");
               singleGameCard.append(
                    $("<ul class='platformName'>").append(
                         $.map(game.platforms, function (platforms) {
                              return $("<li>").text(platforms.platform.name);
                         })
                    )
               );
               singleGameCard.append("<h3>Tags</h3>");
               singleGameCard.append(
                    $("<ul class = 'tags'>").append(
                         $.map(game.tags, function (tags) {
                              return $("<li>").text(tags.name);
                         })
                    )
               );
               $(".gameCardsDiv").empty;
               $(".gameCardsDiv").append(singleGameCard);
          })
          .catch((error) => console.error("Error:", error));
}

// event listener to click on miniGame div to grab gameId and fetchGameIdURL
// fetchGameIdURL(gameId)
//
//
//
// fetchGamesListURL(platformValue, userInput)
