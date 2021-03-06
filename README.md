# LIRI-BOT (a Language Interpretation and Recognition Interface)
LIRI is like iPhone's SIRI. However, while SIRI is a Speech Interpretation and Recognition Interface, LIRI is a Language Interpretation and Recognition Interface. LIRI will be a command line node app that takes in parameters and gives you back data.

## LIRI uses the following commands:
```
concert-this
```
```
spotify-this-song
```
```
movie-this
```
```
do-what-it-says
```

## Technologies used:

* Node.js
* Javascript

## npm packages: 
* [spotify](https://www.npmjs.com/package/node-spotify-api) - A simple to use API library for the Spotify REST API.
* [request](https://www.npmjs.com/package/request) - Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.
* [dotenv](https://www.npmjs.com/package/dotenv) - Dotenv is a zero-dependency module that loads environment variables from a .env file into process.env.
* [moment](https://www.npmjs.com/package/moment) - Moment is a useful tool to formatt dates given in data.

**install packages** -  with npm install in the terminal 

**create** - your own .env file

* Spotify API key needed

	* SPOTIFY_ID=?????????? **insert your own spotify key here** 
	* SPOTIFY_SECRET=??????? **insert your own secret id here**

* Band api key needed in .env 
	* BAND_ID=?????? **insert your own** 

* IMDB key needed in .env

	* IMDB_ID=???? **insert your own key here**

## How to Run LIRI-Bot

* Step One: write node liri concert-this ```<name of band/artist>``` .
	
	This will show you a list of the following.
	* Name of the venue
	* Venue Location
	* Date of the event
	
	Demo:

	![Concert-this demo](https://media.giphy.com/media/XAwhs9UB5Py5nrVvL7/source.gif)

* Step Two: node liri spotify-this-song ```<song name here>```.
	
	This will show the following information about the song in your terminal/bash window: 
	* Artist(s) 
	* The song's name 
	* A preview link of the song from Spotify 
	* The album that the song is from

	If no song is provided then the program will default to
	"The Sign".

	Demo:

	![spotify-this-song demo](https://media.giphy.com/media/TjG10kvUcICEKC5kbO/source.gif)

* Step Three: node liri.js movie-this ```<movie name here>```.
	
	This will output the following information to your terminal/bash window:
	* Title of the movie.
	* Year the movie came out.
	* IMDB Rating of the movie.
	* Country where the movie was produced.
	* Language of the movie.
	* Plot of the movie.
	* Actors in the movie.

	
	If the user doesn't type a movie in, the program will output data for the movie 'Lord of The Rings'.

	Demo:

	![movie-this demo](https://media.giphy.com/media/JRmocXZedNmEwHSvxo/source.gif)

* Step Four: node liri.js do-what-it-says

	This will output the command placed in random.txt file

	Demo:

	![movie-this demo](https://media.giphy.com/media/UVAQmMXBpjIjQoIKwY/source.gif)

