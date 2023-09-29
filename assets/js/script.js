fetch("https://api.rawg.io/api/platforms?key=164d87e9b2364003ad69bc496d5e3d7f")
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => console.error("Error:", error));

fetch("https://api.rawg.io/api/platforms?key=164d87e9b2364003ad69bc496d5e3d7f")
  .then((response) => response.json())
  .then((data) => {
    // Select the element where you want to display the data
    const element = document.getElementById("output");

    // Iterate over the data and create HTML for each item
    data.results.forEach((item) => {
      const itemElement = document.createElement("div");
      itemElement.textContent = `Platform: ${item.name}, Games Count: ${item.games_count}`;
      element.appendChild(itemElement);
    });
  })
  .catch((error) => console.error("Error:", error));
