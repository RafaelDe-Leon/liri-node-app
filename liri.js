require("dotenv").config();


// Require the key.js file
var keys = require("./keys.js");

//Require the node Package manager for spotify, request, and moment
var Spotify = require('node-spotify-api');
var request = require('request');
var moment = require('moment');

//save key to a var
var spotify = new Spotify(keys.spotify);

// Include file system module
var fs = require ('fs');



// Make it so liri.js can take in one of the following commands:

// * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`


// Grab search command line argument
var liriCommands = process.argv[2];
// Joining the remaining arguments since an actor or tv show name may contain spaces
var inputSearch = process.argv.slice(3).join(" ");





switch (liriCommands) {
        case 'spotify-this-song':
            //name of function for spotify
            getMySpotify(inputSearch);
            break;

        default: 
        console.log("Liri can't do that yet.");
    }

// spotify search
function getMySpotify(inputSearch) {
 
spotify.search({ type: 'track', query: inputSearch }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
  console.log(data.tracks.items[0]); 

var songs = data.tracks.items;
for (var i = 0; i < songs.length; i++) {

    var albumObject = songs[i].album;
    var trackName = songs[i].name;
    var preview = songs[i].preview_url
    
    //store artists array to vars
    // var artistsInfo = albumObject.artists;
        console.log(i);
        console.log('\nartist(s): ' + albumObject.name);
        console.log('\nsong name: ' + trackName);
        console.log('\npreview song: ' + preview);
        console.log('\nalbum: ' + albumObject.name);
        console.log('\n');
    

}
  });
}



//---------------------------------------------

// //Assign data being used to a variable
// var info = data.tracks.items
// // console.log(info);

// //Loop through all the "items" array
// for (var i = 0; i < info.length; i++) {
//     //Store "album" object to variable
//     var albumObject = info[i].album;
//     var trackName = info[i].name
//     var preview = info[i].preview_url
//     //Store "artists" array to variable
//     var artistsInfo = albumObject.artists
//     //Loop through "artists" array
//     for (var j = 0; j < artistsInfo.length; j++) {
//         console.log("Artist: " + artistsInfo[j].name)
//         console.log("Song Name: " + trackName)
//         console.log("Preview of Song: " + preview)
//         console.log("Album Name: " + albumObject.name)
//         console.log("----------------")
//     }
// }
// })


// -----------------------------------------


// var runThis = function(argOne, argTwo) {
//     pick(argOne, argTwo)
// };

// runThis(process.argv[2], process.argv[3]);