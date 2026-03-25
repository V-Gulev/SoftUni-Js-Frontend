function solve(input) {
    const movies = [];
    for (let line of input) {
        const command = getCommand(line);

        switch (command) {
            case 'addMovie':
                addMovie(line);
                break;
            case 'directedBy':
                addDirector(line);
                break;
            case 'onDate':
                addDate(line);
                break;

        }
    }

    printMovies(movies);

    function getCommand(input) {
        if (input.includes('addMovie')) {
            return 'addMovie';
        }

        if (input.includes('directedBy')) {
            return 'directedBy';
        }

        if (input.includes('onDate')) {
            return 'onDate';
        }

        return null;
    }

    function addMovie(input) {
        const movieName = input.substring(9);

        const movie = {
            name: movieName,
            director: '',
            date: ''
        }

        movies.push(movie);
    }

    function addDirector(input) {
        const [movieName, directorName] = input.split(' directedBy ');
        const movie = movies.find(m => m.name === movieName);

        if (!movie) {
            return;
        }

        movie.director = directorName;
    }

    function addDate(input) {
        const [movieName, date] = input.split(' onDate ');
        const movie = movies.find(m => m.name === movieName);

        if (!movie) {
            return;
        }

        movie.date = date;
    }

    function printMovies(movies) {
        for (let movie of movies) {
            if (movie.director && movie.date) {
                console.log(JSON.stringify(movie))
            }
        }
    }
}

solve([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
]
);