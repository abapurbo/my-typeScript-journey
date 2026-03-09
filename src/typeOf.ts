const favoriteMovie = 'Inception';

type movieType = typeof favoriteMovie; //string;

const movie = {
    title: 'The matrix',
    director: 'Apurbo sarker',
};

//Creating a type from a existing object
type MovieDetails = typeof movie;
const otherMovie: MovieDetails = {
    title: 'Avater',
    director: 'christorper nolan'
};
type detailedLog = {
    message: string;
    level: 'info' | 'warn' | 'error'
};

function logMessage(input: string | number | detailedLog) {
    if (typeof input === 'string') {
        console.log('simple log message:', input);
    }
    else if (typeof input === "number") {
        console.log('error code:', input)
    }else if('message' in input && "level" in input){
        console.log(`[${input.level.toUpperCase()}]`,input.message)
    }
}