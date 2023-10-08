// @ts-uncheck
const apiKey = "?key=164d87e9b2364003ad69bc496d5e3d7f";
// TODO: add something to let the user know if the reponse returns 0 results
// TODO: add pages/previous next, etc
// COMMENT: fetch for gameListURL
function fetchGamesListURL(gameListURL) {
     $(".gameCardsDiv").empty();
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

// COMMENT: Function to fetch a game by it's Id number
function fetchGameIdURL(gameIdURL) {
     fetch(gameIdURL)
          .then((response) => {
               if (!response.ok) {
                    // TODO: Display text when the fetch fails, input is empty
                    throw new Error("HTTP error " + response.status);
               }
               return response.json();
          })
          .then((game) => {
               // TODO: add developers h3 ul li developers
               let singleGameCard = $("<div class='singleGameCard'>");
               singleGameCard.append(
                    $("<img>", { class: "backgroundImage", src: game.background_image, alt: "background image" })
               );
               singleGameCard.append($("<h2 class='gameName' id='gameId" + game.id + "'>").text(game.name));
               singleGameCard.append($("<h3 class='releaseDateHeader'>").text("Release Date:"));
               singleGameCard.append($("<ul class='releaseDate'>")).append($("<li>").text(game.released));
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
}

// TODO: create wish list for games that is stored locally

$(function () {
     function createCheckboxMenu(checkboxMenu, options) {
          let menu = $("<div>").attr("id", checkboxMenu).css({
               display: "none",
               position: "fixed",
               "background-color": "#f9f9f9",
               "box-shadow": "0px 8px 16px 0px rgba(0,0,0,0.2)",
               padding: "12px 16px",
               "z-index": "50",
               width: "80%",
               height: "30%",
               top: "50%",
               left: "50%",
               transform: "translate(-50%, -50%)",
               overflow: "auto",
          });
          let checkboxDiv = $("<div>").css({
               display: "grid",
               "grid-template-columns": "repeat(auto-fill, minmax(145px, 1fr))",
               gap: "10px",
          });
          options.forEach((option) => {
               let checkbox = $("<input>")
                    .attr("type", "checkbox")
                    .attr("value", option.value)
                    .on("click", function (event) {
                         event.stopPropagation();
                    });
               let label = $("<label>")
                    .attr("for", "checkbox" + option.value)
                    .css({ display: "flex", "align-items": "center", "white-space": "nowrap" })
                    .text(option.text)
                    .prepend(checkbox);
               checkboxDiv.append(label);
          });
          menu.append(checkboxDiv);
          let closeButton = $("<button>")
               .text("Close")
               .on("click", function (event) {
                    $("#" + checkboxMenu).hide();
                    event.stopPropagation();
               });
          let clearButton = $("<button>")
               .text("Clear All")
               .on("click", function (event) {
                    $("#" + checkboxMenu + " input[type='checkbox']").prop("checked", false);
                    event.stopPropagation();
               });
          let buttonDiv = $("<div>").css({ "text-align": "center" }).append(closeButton, clearButton);
          menu.append(buttonDiv);
          return menu;
     }

     platforms.sort((a, b) => (a.text > b.text ? 1 : -1));
     genres.sort((a, b) => (a.text > b.text ? 1 : -1));

     $("#genresCategory").append(createCheckboxMenu("genresMenu", genres));
     $("#platformsCategory").append(createCheckboxMenu("platformsMenu", platforms));

     $("#platformsCategory").on("click", function () {
          $("#platformsMenu").show();
     });

     $("#genresCategory").on("click", function () {
          $("#genresMenu").show();
     });

     // COMMENT: Fetches games by user input or returns a default order of list
     $("#searchInput").on("submit", (event) => {
          event.preventDefault();
          let userInput = $('#searchInput input[name="searchInput"]').val();
          let gameListURL = "https://api.rawg.io/api/games" + apiKey;
          let searchType = $("#searchType").val(); // get the selected search type
          if (searchType === "normal") {
               gameListURL += "&search=";
          } else if (searchType === "precise") {
               gameListURL += `&search_precise=true`;
          } else if (searchType === "exact") {
               gameListURL += `&search_exact=true`;
          }
          if (userInput) {
               gameListURL += `&search=${userInput}`;
          }
          let platformsArray = [];
          $("#platformsMenu input[type='checkbox']:checked").each(function () {
               platformsArray.push(this.value);
          });
          if (platformsArray.length > 0) {
               gameListURL += `&platforms=${platformsArray.join(",")}`;
          }
          let genresArray = [];
          $("#genresMenu input[type='checkbox']:checked").each(function () {
               genresArray.push(this.value);
          });
          if (genresArray.length > 0) {
               gameListURL += `&genres=${genresArray.join(",")}`;
          }

          console.log(gameListURL);
          fetchGamesListURL(gameListURL);
     });

     // COMMENT: Fetch all games when All Games is click in categories
     $("#fetchAllGames").on("click", function (event) {
          let gameListURL = "https://api.rawg.io/api/games" + apiKey;
          fetchGamesListURL(gameListURL);
     });

     // COMMENT: on-click to fetch the details of a single game when the game's name is clicked
     $("body").on("click", ".gameName", function () {
          let gameId = $(this).attr("id").replace("gameId", "");
          let gameIdURL = `https://api.rawg.io/api/games/${gameId}${apiKey}`;
          $(".gameCardsDiv").empty();
          fetchGameIdURL(gameIdURL);
     });
});

// fetch("https://api.rawg.io/api/genres" + apiKey)
//      .then((response) => {
//           if (!response.ok) {
//                $("#invalidEntry").show();
//                $("#invalidEntry").text("The response from the api failed. Please try again.");
//                throw new Error("HTTP error " + response.status);
//           }
//           return response.json();
//      })
//      .then((genres) => {
//           let genreArray = genres.results.map((genre) => {
//                return { text: genre.name, value: genre.id };
//           });
//           console.log(genreArray);
//      });
// console.log("https://api.rawg.io/api/genres" + apiKey);

// COMMENT: Genre URLS
// const genreURL = "https://api.rawg.io/api/genres" + apiKey;
// const genreIdURL = "https://api.rawg.io/api/genres/" + genreId + apiKey;
// COMMENT: Developers URLs
// const developersURL = "https://api.rawg.io/api/developers" + apiKey;
// const developerIdURL = "https://api.rawg.io/api/developers/" + developerId + apiKey;
// COMMENT: Platforms URLs and Platforms define
// const platformsURL = "https://api.rawg.io/api/platforms" + apiKey; // platforms are defined in dropdownVariables.js

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

// let fetchPlatformsButton = $("<button>")
//      .text("Search")
//      .on("click", function (event) {
//           // Get all checked checkboxes
//           let checkedPlatforms = $("#" + id + " input:checked")
//                .map(function () {
//                     return this.value;
//                })
//                .get();

//           // Append each platform to the URL
//           checkedPlatforms.forEach(function (platform) {
//                platformsURL += "&platforms=" + platform;
//           });
//           console.log(platformsURL);
//           // Fetch the updated URL
//           fetch(platformsURL)
//                .then((response) => response.json())
//                .then((data) => console.log(data))
//                .catch((error) => console.error("Error:", error));

//           event.stopPropagation();
//      });
