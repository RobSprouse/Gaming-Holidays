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

