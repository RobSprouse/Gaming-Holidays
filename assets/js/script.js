$(document).ready(function () {
     // TODO: add event listeners
});

// TODO: Define all URL's and object keys
const apiKey = "?key=164d87e9b2364003ad69bc496d5e3d7f";

let gameName = "";
let gameId = "";
let genreId = "";
let developerId = "";
let platformId = "";
let pageNum = "";
let pageSize = "";
let searchQuery = "";
let searchOrder = "";
let platforms = "";
let developers = "";
let genres = "";
let tags = "";
let releaseDates = "";
let metacritic = "";

// COMMENT: Game list and their data.keys commented
const gameListURL = "https://api.rawg.io/api/games" + apiKey;
// after fetchGameListURL (gameList)
// gameID = gameList.results[j].id // used to pass to fetchGameIdURL, not displayed
// gameName = gameList.results[j].name
// platforms = gameList.results[j].platforms[k].platform.name
// releasedDate = gameList[j].released
// backgroundImg = gameList[j].background_image // value is a URL
// shortScreenShots = gameList[j].short_screenshots[k].image // value is a URL
//  gameListTags = gameList[j].tags[k].name

// COMMENT: Game and their data.keys commented
const gameIdURL = "https://api.rawg.io/api/games/" + gameId + apiKey;
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
// TODO: Decide if we want to add a checkbox for local storage saved games

// COMMENT: Genre
const GenreURL = "https://api.rawg.io/api/genres" + apiKey;
const GenreIdURL = "https://api.rawg.io/api/genres/" + genreId + apiKey;
// COMMENT: Developers
const DevelopersURL = "https://api.rawg.io/api/developers" + apiKey;
const DeveloperIdURL = "https://api.rawg.io/api/developers/" + developerId + apiKey;
// COMMENT: Platforms
const PlatformsURL = "https://api.rawg.io/api/platforms" + apiKey;
const PlatformIdURL = "https://api.rawg.io/api/platforms/" + platformId + apiKey;

// COMMENT: Search Parameters for games
const pageNumParam = `&page=${pageNum}`;
const resultsPerPageParam = `&page_size=${pageSize}`;
const searchQueryParam = `&search=${searchQuery}`;
const platformsFilter = `&platforms=${platforms}`; // Filter by platforms, for example: 4,5.
const developersFilter = `&developers=${developers}`; // Filter by developers, for example: 1612,18893 or valve-software,feral-interactive.
const genresFilter = `&genres=${genres}`; // Filter by genres, for example: 4,51 or action,indie.
const tagsFilter = `&tags=${tags}`; // Filter by tags, for example: 31,7 or singlePlayer,multiplayer.
const datesFilter = `&dates=${releaseDates}`; // Filter by a release date, for example: 2010-01-01,2018-12-31.1960-01-01,1969-12-31.
const metacriticFilter = `&metacritic=${metacritic}`; //Filter by a metaCritic rating, for example: 80,100.
const searchOrderParam = `&ordering=${searchOrder}`; // Available fields: name, released, added, created, updated, rating, metacritic. You can reverse the sort order adding a hyphen, for example: -released.

// COMMENT: Element containers

// TODO: Get data and append it to the HTML document so it can be formatted
// // fetch for gamesListURL
// fetch("https://api.rawg.io/api/games?key=164d87e9b2364003ad69bc496d5e3d7f")
//      .then((response) => {
//           if (!response.ok) {
//                $("#invalidEntry").show();
//                $("#invalidEntry").text("The response from the weather api failed. Please try again.");
//                throw new Error("HTTP error " + response.status);
//           }
//           return response.json();
//      })
//      .then((gameList) => {
//           console.log(gameList);
//      })
//      .catch((error) => console.error("Error:", error));



fetch("https://api.rawg.io/api/games/3498?key=164d87e9b2364003ad69bc496d5e3d7f")
     .then((response) => response.json())
     .then((game) => {
          let singleGameCard = $("<div class='singleGameCard'>");
          singleGameCard.append(
               $("<img>", { class: "backgroundImage", src: game.background_image, alt: "background image" })
          );
          singleGameCard.append($("<h2 class='gameName'>").text(game.name));
          singleGameCard.append($("<p class='releasedDate'>").text(game.released));
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
          $(".gameCardsDiv").append(singleGameCard);
     })
     .catch((error) => console.error("Error:", error));
