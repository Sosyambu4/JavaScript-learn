"use strict";


/* const personalMovieDB = {
    count: 0,
    movies:{},
    actors:{},
    genres:[],
    privat: false,
    start: function () {
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', "");
    
        while (personalMovieDB.count == "" || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
    
        }
    },
    rememberMyFilms: function() {
        for ( let i = 0; i < 1; i++) {
            const a = prompt('Один из последих просмотреных фильмов?',"").trim(),
                  b = prompt('На сколько оцените его?',"");
        
            if (a != null && b !=null && a != '' && b !='' && a.length < 50){
              personalMovieDB.movies[a] = b;
              console.log('done');  
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function() {
        if(personalMovieDB.count < 10) {
            console.log('Просмотрено довольно мало фильмов');
        } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30){
            console.log('Вы классный зритель');
        } else if (personalMovieDB.count <= 30){
            console.log('Вы киноман');}
        else {
            console.log('Error 404');
        }
    },
    showMyDB: function (hidden) {
        if(!hidden) {
            console.log(personalMovieDB);
        }
    },
    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat ){
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },
    writeYourGenres: function (){
    for ( let i = 1; i < 4; i++){
        let genre = prompt(`Ваш любимый жaнр под номером ${i}`);

        if( genre == '' || genre == null) {
            console.log('Вы ввели не кореректные данные или не ввели их вовсе');
            i--;
        } else {
        personalMovieDB.genres[i - 1] = genre;
        }
        }
        personalMovieDB.genres.forEach((item,i) => {
            console.log(`Любимый жaнр ${i + 1} - это ${item}`);
        });
    }
}; */

const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam'];

function sortStudentsByGroups() {
    let array = 3;
    let subarray = [];
    for ( let i = 0; i <students.length; i += array){
        students.sort();
        subarray.push(students.slice(i, i + array));
    }
console.log(subarray);

}
 console.log(sortStudentsByGroups());



