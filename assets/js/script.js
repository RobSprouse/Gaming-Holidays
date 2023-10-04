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
// gameID = gameList.results[i].id
// gameName = gameList.results[i].name
// platforms = gameList.results[i].platforms[j].platform.name
// releasedDate = results[i].released
// backgroundImg = results[i].background_image // (value is a URL)

// COMMENT: Game and their data.keys commented
const gameIdURL = "https://api.rawg.io/api/games/" + gameId + apiKey;
// after fetchGameIdURL (game)
// let gameName = game.name;
// let gameDeveloper = game.developers;
// let gameReleaseDate = game.released;
// let gameBackgroundImage = game.background_image;
// let gamePlatforms = game.platforms.name;

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

// fetch for gamesListURL
fetch("https://api.rawg.io/api/games?key=164d87e9b2364003ad69bc496d5e3d7f")
     .then((response) => {
          if (!response.ok) {
               $("#invalidEntry").show();
               $("#invalidEntry").text("The response from the weather api failed. Please try again.");
               throw new Error("HTTP error " + response.status);
          }
          return response.json();
     })
     .then((gameList) => {
          console.log(gameList);
          // TODO: create separate <div>'s with class="gameList", structure each to contain the contents within mock-up
          // backgroundImg = results[i].background_image // (value is a URL)
          // gameName = gameList.results[i].name
          // platforms = gameList.results[i].platforms[j].platform.name
          // releasedDate = results[i].released
          // gameID = gameList.results[i].id // used to pass to fetchGameIdURL, not displayed
     })
     .catch((error) => console.error("Error:", error));

// fetch for game by id
fetch("https://api.rawg.io/api/games/3498?key=164d87e9b2364003ad69bc496d5e3d7f")
     .then((response) => {
          if (!response.ok) {
               $("#invalidEntry").show();
               $("#invalidEntry").text("The response from the weather api failed. Please try again.");
               throw new Error("HTTP error " + response.status);
          }
          return response.json();
     })
     .then((game) => {
          console.log(game);
          // TODO: creat a <div> with class "gameData". structure it to contain the contents the way we want
     })
     .catch((error) => console.error("Error:", error));
