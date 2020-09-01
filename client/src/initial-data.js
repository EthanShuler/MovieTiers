const initialData = {
    movies: {
        'movie-1': {id: 'movie-1', title: 'LOTR', poster: 'http://image.tmdb.org/t/p/original/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg', year: 2005, rating: 10},
        'movie-2': {id: 'movie-2', title: 'StarWars', poster: 'http://image.tmdb.org/t/p/original/6FfCtAuVAW8XJjZ7eWeLibRLWTw.jpg', year: 1970, rating: 7},
        'movie-3': {id: 'movie-3', title: 'Sausage Party', poster: 'http://image.tmdb.org/t/p/original/6jjOY2Vgii2wbUOYNWkMLLqnpZB.jpg', year: 2015, rating: 1},
        'movie-4': {id: 'movie-4', title: 'Hereditary', poster: 'http://image.tmdb.org/t/p/original/lHV8HHlhwNup2VbpiACtlKzaGIQ.jpg', year: 2018, rating: 9},
    }, 
    rows: {
        'row-1': {
            id: 'row-1',
            title: 'S',
            color: 'Crimson',
            movieIds: ['movie-1'],
        },
        'row-2': {
            id: 'row-2',
            title: 'A',
            color: 'Coral',
            movieIds: ['movie-4'],
        },
        'row-3': {
            id: 'row-3',
            title: 'B',
            color: 'Gold',
            movieIds: [],
        },
        'row-4': {
            id: 'row-4',
            title: 'C',
            color: 'YellowGreen',
            movieIds: [],
        },
        'row-5': {
            id: 'row-5',
            title: 'D',
            color: 'DarkOliveGreen',
            movieIds: [],
        },
        'row-6': {
            id: 'row-6',
            color: 'Navy',
            title: 'F',
            movieIds: [ 'movie-3'],
        },
        'row-7': {
            id: 'row-7',
            color: 'White',
            title: 'New',
            movieIds: [],
        },
    },
    // Facilitate column reordering
    rowOrder: ['row-1', 'row-2', 'row-3', 'row-4', 'row-5', 'row-6', 'row-7'],
};

export default initialData;
