```markdown
# Examples from https://rawg.io/apidocs

GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7


const apiKey = "164d87e9b2364003ad69bc496d5e3d7f";
```

```markdown
# Get a list of video game genres.
https://api.rawg.io/api/genres

# to get details of genre
https://api.rawg.io/api/genres/{id}

```

```markdown
# to get list of game developers
https://api.rawg.io/api/developers

# details of developer
https://api.rawg.io/api/developers/{id}
```

```markdown
# platforms
https://api.rawg.io/api/platforms

# details of platform
https://api.rawg.io/api/platforms/{id}

```

```markdown
# to get a list of all games
https://api.rawg.io/api/games

# to get a specific game
https://api.rawg.io/api/games/{id}

# to get a specific game details

# Name

https://api.rawg.io/api/games/{id}.name

# Developers
https://api.rawg.io/api/games/{id}.developers

# release date
https://api.rawg.io/api/games/{id}.released

# background-image
https://api.rawg.io/api/games/{id}.background_image

#  game's platform
https://api.rawg.io/api/games/{id}.platforms.name

```
```
#  fun fact date
```