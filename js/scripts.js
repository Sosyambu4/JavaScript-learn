"use strict";


let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', "");

    while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)){

    }
}
start();

const personalMovieDB = {
    count:numberOfFilms,
    movies:{},
    actors:{},
    genres:[],
    privat: false
};

function rememberMyFilms() {
    for ( let i = 0; i < 1; i++) {
        const a = prompt('Один из последих просмотреных фильмов?',""),
              b = prompt('На сколько оцените его?',"");
    
        if (a != null && b !=null && a != '' && b !='' && a.length < 50){
          personalMovieDB.movies[a] = b;
          console.log('done');  
        } else {
            console.log('error');
            i--;
        }
    }
}
rememberMyFilms();

function detectPersonalLevel() {
    if(personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
        console.log('Вы классный зритель');
    } else if (personalMovieDB.count <= 30){
        console.log('Вы киноман');}
    else {
        console.log('Error 404');
    }
}
detectPersonalLevel();

function writeYourGenres(){
    for ( let i = 1; i < 4; i++){
        const a = prompt(`Ваш любимый жaнр под номером ${i}`);
        personalMovieDB.genres[i - 1] = a; 
        
    }
};
 
writeYourGenres();


function showMyDB(hidden) {
    if(!hidden) {
        console.log(personalMovieDB);
    }
}
showMyDB(personalMovieDB.privat);




