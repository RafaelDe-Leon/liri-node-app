require("dotenv").config();

// Require the key.js file
var keys = require("./keys.js");

//Require the node Package manager for spotify, moment, axios
var Spotify = require("node-spotify-api");
var moment = require("moment");
var axios = require("axios");

//save key to a var
var spotify = new Spotify(keys.spotify);

// Include file system module
var fs = require("fs");

// Make it so liri.js can take in one of the following commands:

// * `concert-this`

// * `do-what-it-says`

// Grab search command line argument
var liriCommands = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var inputSearch = process.argv.slice(3).join(" ");

switch (liriCommands) {
  case "spotify-this-song":
    //name of function for spotify
    getMySpotify(inputSearch);
    break;

  case "movie-this":
    // name of the function for movies
    getMyMovie(inputSearch);
    break;

  case "concert-this":
    getMyConcert(inputSearch);
    break;

  case "do-what-it-says":
    getWhatItSays(inputSearch);
    break;

  default:
    console.log("Liri can't do that yet.");
}

// spotify search
function getMySpotify(inputSearch) {
  // if inputaSearch is left empty default will be "The Sign"
  if (inputSearch === "") {
    inputSearch = "The Sign";
  }

  spotify.search({ type: "track", query: inputSearch }, function(err, data) {
    if (err) {
      return console.log("Error occurred: " + err);
    }

    console.log(data.tracks.items[0]);

    var songs = data.tracks.items;
    for (var i = 0; i < songs.length; i++) {
      var albumObject = songs[i].album;
      var trackName = songs[i].name;
      var preview = songs[i].preview_url;

      //store artists array to vars
      // var artistsInfo = albumObject.artists;
      console.log(i);
      console.log("\nartist(s): " + albumObject.name);
      console.log("\nsong name: " + trackName);
      console.log("\npreview song: " + preview);
      console.log("\nalbum: " + albumObject.name);
      console.log("\n");
    }
  });
}

// movie function api
function getMyMovie(inputSearch) {
  // if inputSearch is left empty default movie will be "lord of the rings".
  if (inputSearch === "") {
    inputSearch = "Lord of the rings";
  }

  axios
    .get(
      "http://www.omdbapi.com/?t=" +
        inputSearch +
        "&y=&plot=short&apikey=" + keys.imdb.key
    )
    .then(function(response) {
      // console.log(response.data);

      var movieObject = response.data;
      var movieTitle = response.data.Title;
      var yearReleased = movieObject.Released;
      var imbRatings = movieObject.imdbRating;
      var country = movieObject.Country;
      var language = movieObject.Language;
      var plot = movieObject.Plot;
      var actors = movieObject.Actors;

      console.log("\nMovie Title: " + movieTitle);
      console.log("\nYear of Release: " + yearReleased);
      console.log("\nIMDB Rating: " + imbRatings);
      console.log("\nCountry: " + country);
      console.log("\nLanguage: " + language);
      console.log("\nPlot: " + plot);
      console.log("\nActors: " + actors);
    })
    .catch(function(err) {
      if (err) {
        console.log("---------------Data---------------");
        console.log(err.response.data);
        console.log("---------------Status---------------");
        console.log(err.response.status);
        console.log("---------------Status---------------");
        console.log(err.response.headers);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    });
}

//concert function api

function getMyConcert() {
  // if inputSearch is left empty default movie will be "lord of the rings".
  if (inputSearch === "") {
    console.log("Please enter an Artist/Band name");
  }


  // keys are hidden in a file
  axios
    .get(
      "https://rest.bandsintown.com/artists/" +
        inputSearch +
        "/events?app_id=" + keys.band.key
    )
    .then(function(response) {
      //   console.log(response.data);

      var bandRespon = response.data;

      //Moments formatter for date
      var date = moment(dateEvent).format("MMM Do YYYY");

      if (bandRespon < 1) {
        console.log("No Upcoming show your Artist/Band, try another again");
      } else {

        // loop to go through all the response in bandsintown api
        for (i = 0; i < bandRespon.length; i++) {
          var venueNam = bandRespon[i].venue.name;
          var venueLoc = bandRespon[i].venue.country;
          var dateEvent = bandRespon[i].datetime;

          console.log("\n");
          console.log("Venue Name: " + venueNam);
          console.log("Venue Location: " + venueLoc);
          console.log("Venue Date: " + date);
        }
      }
    })
    .catch(function(err) {
      if (err) {
        return console.log("Error occurred: " + err);
      } else if (err.request) {
        console.log(err.request);
      } else {
        console.log("Error", err.message);
      }
    });
}

function getWhatItSays() {
  fs.readFile("random.txt", "utf8", function(error, data) {
    if (error) {
      return console.log(error);
    }

    var dataArr = data.split(",");

    getMySpotify(dataArr[1]);

    // console.log(dataArr);
  });
}
// var runThis = function(argOne, argTwo) {
//     pick(argOne, argTwo)
// };

// runThis(process.argv[2], process.argv[3]);
