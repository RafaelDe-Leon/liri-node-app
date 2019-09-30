console.log('this is loaded');

exports.spotify = {
  id: process.env.SPOTIFY_ID,
  secret: process.env.SPOTIFY_SECRET
};

exports.band = {
    key: process.env.BAND_ID
}

exports.imdb = {
    key: process.env.IMDB_ID
}
