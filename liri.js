require("dotenv").config();

var keys = require("./keys.js");
var Spotify = require('node-spotify-api');

var spotify = new Spotify(keys.spotify);



// Make it so liri.js can take in one of the following commands:

// * `concert-this`

// * `spotify-this-song`

// * `movie-this`

// * `do-what-it-says`


var pick = function (caseData, functionData) {
    switch (caseData) {
        case 'spotify-this-song':
            //name of function for spotify
            getMySpotify(functionData);
            break;

        default: 
        console.log("Liri can't do that yet.");
    }
}

var getArtistName = function(artist) {
    return artist.name
}

// spotify search
var getMySpotify = function(songName) {
 
spotify.search({ type: 'track', query: songName }, function(err, data) {
    if (err) {
      return console.log('Error occurred: ' + err);
    }
   
//   console.log(data.tracks.items[0]); 

var songs = data.tracks.items;
for (var i = 0; i < songs.length; i++) {

    var albumObject = songs[i].album;
    var trackName = songs[i].name;
    var preview = songs[i].preview_url
    
    //store artists array to vars

    var artistsInfo = albumObject.artists;

    for (var j = 0; j < artistsInfo.length; j++) {

    }

    console.log(i);
    console.log('\nartist(s): ' + songs[i].artist);
    console.log('\nsong name: ' + songs[i].name);
    console.log('\npreview song: ' + songs[i].preview_url);
    console.log('\nalbum: ' + songs[i].album.name);
    console.log('\n\n\n\n');
}
  });
}



//---------------------------------------------

//Assign data being used to a variable
var info = data.tracks.items
// console.log(info);

//Loop through all the "items" array
for (var i = 0; i < info.length; i++) {
    //Store "album" object to variable
    var albumObject = info[i].album;
    var trackName = info[i].name
    var preview = info[i].preview_url
    //Store "artists" array to variable
    var artistsInfo = albumObject.artists
    //Loop through "artists" array
    for (var j = 0; j < artistsInfo.length; j++) {
        console.log("Artist: " + artistsInfo[j].name)
        console.log("Song Name: " + trackName)
        console.log("Preview of Song: " + preview)
        console.log("Album Name: " + albumObject.name)
        console.log("----------------")
        //Append data to log.txt
        fs.appendFileSync("log.txt", "Artist: " + artistsInfo[j].name + "\nSong Name: " + trackName + "\nPreview of Song: " + preview + "\nAlbum Name: " + albumObject.name + "\n----------------\n", function (error) {
            if (error) {
                console.log(error);
            };
        });
    }
}
})


// -----------------------------------------


var runThis = function(argOne, argTwo) {
    pick(argOne, argTwo)
};

runThis(process.argv[2], process.argv[3]);