# Liri-Node-App
In this assignment, you will make LIRI. LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.


## How to use

Use node to run this program. Use node liri.js then run one of the following comands, then add search text:

* concert-this
* spotify-this-song
* movie-this

When running a command follow it by desired text/search.
Example: node liri.js movie-this underworld

## Concert-This
When concert-this command is used you will be provided with:
1. Name of the venue
1. Venue location
1. Date of the Event

### Before
![Alt Text](https://github.com/seanrichter/liri-node-app/blob/master/images/concert%20this%20before.PNG?raw=true)

### After
![Alt Text](https://github.com/seanrichter/liri-node-app/blob/master/images/concert%20this%20after.PNG?raw=true)

## Spotify-This-Song
When spotify-this-song command is used you will be provided with:
1. Artist(s)
1. The song's name
1. A preview link of the song from Spotify
1. The album that the song is from
1. If no song is provided then your program will default to "The Sign" by Ace of Base.

### Before
![Alt Text](https://github.com/seanrichter/liri-node-app/blob/master/images/spotify%20this%20song%20before.PNG?raw=true)

### After
![Alt Text](https://github.com/seanrichter/liri-node-app/blob/master/images/spotify%20this%20song%20after.PNG?raw=true)

## Movie-This
When movie-this command is used you will be provided with:
1. Title of the movie.
1. Year the movie came out.
1. IMDB Rating of the movie.
1. Rotten Tomatoes Rating of the movie.
1. Country where the movie was produced.
1. Language of the movie.
1. Plot of the movie.
1. Actors in the movie.

### Before
![Alt Text](https://github.com/seanrichter/liri-node-app/blob/master/images/move%20this%20before.PNG?raw=true)

### After
![Alt Text](https://github.com/seanrichter/liri-node-app/blob/master/images/movie%20this%20after.PNG?raw=true)

If the user doesn't type a movie in, the program will output data for the movie 'Mr. Nobody.
When do-what-it-says command:

A random.txt file with search for spotify-this-song "I want it that way." This will give you the spotify results of "I want it that way."

## Technologies Used
* JavaScript
* Node.js
* Spotify API
* Bands in Town API
* OMDB API

## Link to GitHub Repository
[GitHub](https://github.com/seanrichter/liri-node-app)
