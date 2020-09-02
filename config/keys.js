const password = require('./mongoPass').password;

module.exports = {
    mongoURI: `mongodb+srv://dbUser:${password}.@movie-db.mzbcr.gcp.mongodb.net/movies?retryWrites=true&w=majority`
}