const apiKey = 'bf2353fb41ac3150379626dc91b75408';
const imagePath = 'http://image.tmdb.org/t/p/original';

const MovieDb = {
    async search(term) {
        try {
            const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${term}&page=1&include_adult=false`, {
                headers: {
                    Authorization: `Bearer ${apiKey}`
                }
            });

            if (response.ok) {
                const jsonResponse = await response.json();
                if (jsonResponse.results) {
                    return jsonResponse.results.map(movie => {
                        return {
                            id: movie.original_title,
                            title: movie.original_title,
                            poster_path: movie.poster_path,
                            poster: imagePath+movie.poster_path,
                            date: movie.release_date,
                            year: 2001,
                            rating: 1
                        };
                    });
                }
            }
    } catch(error) {
        console.log(error);
    }
}
};

export default MovieDb;