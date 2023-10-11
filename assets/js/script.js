// @ts-uncheck
const apiKey = "?key=164d87e9b2364003ad69bc496d5e3d7f";

// COMMENT: fetch function for gameListURL
function fetchGamesListURL(gameListURL) {
     $(".gameCardsDiv").empty();
     fetch(gameListURL)
          .then((response) => {
               if (!response.ok) {
                    $(".gameCardsDiv").append("<h1>").text("The api to search for games has failed. Please try again.");
                    throw new Error("HTTP error " + response.status);
               }
               return response.json();
          })
          .then((gameList) => {
               if (gameList.count === 0) {
                    $(".gameCardsDiv")
                         .append("<h1>")
                         .text(
                              "You're search has returned 0 results. Please widen the criteria to find the games you're looking for."
                         );
                    return;
               }
               displayWishlist();
               displayGameData(gameList, gameListURL);
          })
          .catch((error) => console.error("Error:", error));
}

// COMMENT: function to display the game data that is fetched by fetchGamesListURL
function displayGameData(gameList, gameListURL) {
     $("#holidayDates").hide();
     const totalPages = Math.ceil(gameList.count / 20);
     let url = new URL(gameListURL);
     let params = new URLSearchParams(url.search);
     let page = params.get("page");
     createPaginationButtons(page, totalPages, gameListURL);
     for (var i = 0; i < gameList.results.length; i++) {
          let minGameCard = $("<div class='minGameCard'>");
          let gameName = gameList.results[i].name;
          let gameId = gameList.results[i].id;
          let button = $("<button>").text("Add to Wishlist!");
          minGameCard.append($("<img>", { class: "smallBackgroundImage", src: gameList.results[i].background_image }));
          minGameCard.append($("<h2 class='gameName' id='gameId" + gameId + "'>").text(gameName));
          button.on("click", function (event) {
               localStorage.setItem(gameName, gameId);
          });
          minGameCard.append(button);
          minGameCard.append($("<h3 class='releaseDateHeader'>").text("Release Date:"));
          minGameCard.append($("<ul class='releaseDate'>").append($("<li>").text(gameList.results[i].released)));
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
}

// COMMENT: Function to fetch a game by it's Id number, called when clicked on a game name
function fetchGameIdURL(gameIdURL) {
     fetch(gameIdURL)
          .then((response) => {
               if (!response.ok) {
                    $(".gameCardsDiv").append("<h1>").text("The api to search for games has failed. Please try again.");
                    throw new Error("HTTP error " + response.status);
               }
               return response.json();
          })
          .then((game) => {
               displayWishlist();
               $("#holidayDates").show();
               let singleGameCard = $("<div class='singleGameCard'>");
               singleGameCard.append(
                    $("<img>", { class: "backgroundImage", src: game.background_image, alt: "background image" })
               );
               singleGameCard.append($("<h2 class='gameName' id='gameId" + game.id + "'>").text(game.name));
               singleGameCard.append($("<h3 class='releaseDateHeader'>").text("Release Date:"));
               singleGameCard.append($("<ul class='releaseDate'>")).append($("<li>").text(game.released));

               let releaseDate = new Date(game.released);
               let month = releaseDate.getMonth() + 1;
               let day = releaseDate.getDate();
               let year = 2022; // releaseDate.getFullYear(); // holiday api only allows for previous year for free accounts
               let country = "US"; // default country
               let holidayUrl = fetchHolidayURL(month, day, year, country);

               getHoliday(holidayUrl);

               singleGameCard.append("<h3>Developers:</h3>");
               singleGameCard.append(
                    $("<ul class='developerName'>").append(
                         $.map(game.developers, function (developers) {
                              return $("<li>").text(developers.name);
                         })
                    )
               );
               singleGameCard.append("<h3>Platforms:</h3>");
               singleGameCard.append(
                    $("<ul class='platformName'>").append(
                         $.map(game.platforms, function (platforms) {
                              return $("<li>").text(platforms.platform.name);
                         })
                    )
               );
               singleGameCard.append("<h3>Tags:</h3>");
               singleGameCard.append(
                    $("<ul class='tags'>").append(
                         $.map(game.tags, function (tags) {
                              return $("<li>").text("#" + tags.name + "  ");
                         })
                    )
               );
               $(".gameCardsDiv").append(singleGameCard);
          })
          .catch((error) => console.error("Error:", error));
}

// COMMENT: function to create a checkbox menu for the search params
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

// COMMENT: function to create a pagination button
function createButton(page, isActive = false, gameListURL) {
     const button = $("<button>");
     const buttonText = isActive ? `Current Page: ${page}` : `Page: ${page}`;
     const span = $("<span>").text(buttonText);
     button.append(span);

     if (isActive) {
          button.addClass("active");
     }
     button.addClass("pagination-button");
     button.data("url", gameListURL);

     return button;
}

// COMMENT: function for the pagination display
function createPaginationButtons(currentPage, totalPages, gameListURL) {
     currentPage = Number(currentPage);
     $(".pagination").empty();
     $(".pagination").append(createButton(1, currentPage === 1, gameListURL));
     if (currentPage > 2) {
          $(".pagination").append(createButton(currentPage - 1, false, gameListURL));
     }
     if (currentPage !== 1) {
          $(".pagination").append(createButton(currentPage, true, gameListURL));
     }
     if (currentPage + 1 <= totalPages) {
          $(".pagination").append(createButton(currentPage + 1, false, gameListURL));
     }
     if (totalPages > currentPage + 1 && totalPages !== currentPage + 1) {
          $(".pagination").append(createButton(totalPages, false, gameListURL));
     }
     $(".pagination-button").css({
          "margin-right": "2em",
     });
}

// COMMENT: Function to display the wishlist
function displayWishlist() {
     let ul = $(".wishlist");
     ul.empty();
     ul.css({
          display: "flex",
          "flex-direction": "column",
          "justify-content": "center",
          "align-items": "center",
     });

     for (let i = 0; i < localStorage.length; i++) {
          let gameName = localStorage.key(i);
          let gameId = localStorage.getItem(gameName);
          let li = $("<li class='gameName' id='gameId" + gameId + "'>").text(gameName);
          li.css({
               display: "flex",
               "flex-direction": "column",
               "justify-content": "center",
               "align-items": "center",
               width: "100%",
          });

          let button = $("<button>").text("Remove!");

          button.on("click", function () {
               localStorage.removeItem(gameName);
               li.remove();
          });
          li.append(button);
          ul.append(li);
     }
}

$(function () {
     $("#holidayDates").hide();
     // COMMENT: sort the search query parameters, run them through the function to create a menu from them, then append them
     platforms.sort((a, b) => (a.text > b.text ? 1 : -1));
     genres.sort((a, b) => (a.text > b.text ? 1 : -1));
     $("#genresCategory").append(createCheckboxMenu("genresMenu", genres));
     $("#platformsCategory").append(createCheckboxMenu("platformsMenu", platforms));

     // COMMENT: create a WishList div under Categories and append it
     let wishlistDiv = $("<div>").addClass("wishlistDiv");
     let wishlistUl = $("<ul>").addClass("wishlist");
     wishlistDiv.append($("<h2>").text("Wishlist"));
     wishlistDiv.append(wishlistUl);
     $(".categories").append(wishlistDiv);
     displayWishlist();

     // COMMENT: create a paginationDiv
     const paginationDiv = $("<div>").addClass("pagination");
     paginationDiv.css({
          display: "flex",
          "justify-content": "center",
          "align-items": "center",
     });
     $(".displayedResults").append(paginationDiv);

     // COMMENT: Event listeners to show the corresponding menus
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
          let searchType = $("#searchType").val();
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
          fetchGamesListURL(gameListURL + "&page=1");
     });

     // COMMENT: Fetch all games when All Games is click in categories
     $("#fetchAllGames").on("click", function (event) {
          let gameListURL = "https://api.rawg.io/api/games" + apiKey;
          fetchGamesListURL(gameListURL + "&page=1");
     });

     // COMMENT: on-click to fetch the details of a single game when the game's name is clicked
     $("body").on("click", ".gameName", function () {
          $(".pagination").empty();
          let gameId = $(this).attr("id").replace("gameId", "");
          let gameIdURL = `https://api.rawg.io/api/games/${gameId}${apiKey}`;
          $(".gameCardsDiv").empty();
          fetchGameIdURL(gameIdURL);
          // COMMENT: moved this because it doesn't always work in a on click for some reason
          //show the holiday card
          //showHoliday();
     });

     // COMMENT: fetches the page url when a page number is clicked
     $(".pagination").on("click", ".pagination-button", function () {
          $(".gameCardsDiv").empty();
          let buttonText = $(this).text();
          let page = buttonText.split(" ").pop();
          let gameListURL = $(this).data("url");
          let url = new URL(gameListURL);
          let params = new URLSearchParams(url.search);
          params.set("page", page);
          url.search = params.toString();
          gameListURL = url.toString();
          fetchGamesListURL(gameListURL);
     });
});

// TODO: display the api source/link on the webpage to conform to the api's terms of use, read over to confirm terms
