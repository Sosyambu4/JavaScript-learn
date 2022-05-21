"use strict";


const numberOfFilms = prompt(
    'Сколько фильмов вы уже посмотрели?');
console.log(numberOfFilms);


 


let personalMovieDB = {
    count:(numberOfFilms),
    movies:{},
    actors:{},
    genres:[],
    privat: false,
};

const  a = prompt('Одни из последних просмотреных фильмов?',''),
       b = prompt('Как вы оцениваете его?',''),
       c = prompt('Одни из последних просмотреных фильмов?',''),
       d = prompt('Как вы оцениваете его?','');

personalMovieDB.movies[a] = b;
personalMovieDB.movies[c] = d;

console.log(personalMovieDB);