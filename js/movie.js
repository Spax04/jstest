'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: true,
    start: function(){
        this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        while(this.count == '' || this.count == null || isNaN(this.count) ){
            this.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },
    rememberMyFilms: function(){

        for (let i = 0; i < 2; i++) {
            const a = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  b = prompt('На сколько оцените его?', '').trim();

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },
    detectPersonalLevel: function(){
        if (personalMovieDB.count < 10) {
            console.log("Просмотрено довольно мало фильмов");
            } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
                console.log("Вы классический зритель");
            } else if (personalMovieDB.count >= 30) {
                console.log("Вы киноман");
            } else {
                console.log("Произошла ошибка");
            }
    },
    showMyDB:function(){
        if(this.privat){
            console.log('DB is private');
        }else{
            console.log(personalMovieDB);
        }
    },
    writeYourGenres: function(){
        for(let i = 0;i<3;i++){
            const a = prompt(`Ваш любимый жанр под номером ${i+1}`);
            while(a==null || a==""){
                const a = prompt(`Ваш любимый жанр под номером ${i+1}`);
            }
            personalMovieDB.genres[i] = a;
        }
        this.genres.forEach(function(item,i){
            console.log(`Любимый жанр #${i+1} - это ${item}`);
        });
    },
    toggleVisibleMyDB : function(){
        if(this.privat == false){
            this.privat= true;
        }else{
            this.privat = false;
        }
    }
};

const shoppingMallData = {
    shops: [
        {
            width: 10,
            length: 5
        },
        {
            width: 15,
            length: 7
        },
        {
            width: 20,
            length: 5
        },
        {
            width: 8,
            length: 10
        }
    ],
    height: 5,
    moneyPer1m3: 30,
    budget: 50000
};

function isBudgetEnough(data) {
    const {shops} = data;
    let result = "";
    let squer = 0;
     shops.forEach(function(item,i){
        squer += item.width * item.length;
    });
    let objom = squer * data.height;
    if(objom*data.moneyPer1m3 > data.budget){
        result = "Бюджета недостаточно";
    }else{
        result = "Бюджета достаточно";
    }
    return result;
};
