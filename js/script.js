"use strict";

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