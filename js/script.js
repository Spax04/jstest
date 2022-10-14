"use strict";

<<<<<<< HEAD
// CallBack functions
function langJS(lang,CallBack){
    console.log(`I'm studing ${lang}`);
    CallBack();
}

langJS("Javascript",function(){
    console.log("It's awesome");
});

// Objects and FOREACH of objects





=======
let numberOfFilms = +prompt("How many films you sew?");

const personalMovieDB = {

    count : numberOfFilms,
    movies : {},
    actors : {},
    genres : [],
    private : false
};

let lastMovieName = prompt("How names last movie you have seen?");
let lastMovieRate = prompt("How do you rate it?");

personalMovieDB.movies[lastMovieName] = lastMovieRate;

console.log(personalMovieDB);
>>>>>>> 019674f3f2c9d5d2ee4577ece6375631bd84e104
