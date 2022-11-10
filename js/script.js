/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

"use strict";

// let numberOfFimls;

const personalMoovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function () {
        personalMoovieDB.count = +prompt('Напишіть, кількість фільмів, які ви вже подивилися.');

        while (personalMoovieDB.count == '' || personalMoovieDB.count == null || isNaN(personalMoovieDB.count)) {
            personalMoovieDB.count = +prompt('Яку кількість фільмів ви вже подивилися?');
        }
        // console.log(numberOfFimls);
    },
    rememberMyFilms: function () {
        for (let i = 0; i < 2; i++) {
            let a = prompt('Один з останніх переглянутих фільмів.').trim(),
                b = prompt('На скільки ви його оцінете?');

            if (a != null && b != null && a != '' && b != '' && a.length < 50) {
                personalMoovieDB.movies[a] = b;
                // console.log('done');
            } else {
                i--;
                // console.log('error');
            }
        }
    },
    detectPersonalLevel: function () {
        if (personalMoovieDB.count < 10) {
            alert('Переглянуто доволі мало фільмів.');
        } else if (personalMoovieDB.count >= 10 && personalMoovieDB.count < 30) {
            alert('Ви класичний глядач.');
        } else if (personalMoovieDB.count >= 30) {
            alert('Ви кіноман.');
        } else {
            alert('Виникла помилка.');
        }
    },
    writeYourGenres: function () {
        // for (let i = 1; i <= 3; i++) {
        //     let genre = prompt(`Ваш улюблений жанр під номером ${i}`);

        //     if (genre != null && genre != '') {
        //         personalMoovieDB.genres[i - 1] = genre;
        //     } else {
        //         console.log('Ви ввели некоректні дані');
        //         i--;
        //     }
        //     console.log(genre);
        // }

        for (let i = 1; i < 2; i++) {
            let genres = prompt(`Напишіть свої улюблені жанри через запятую`).toLowerCase();
            console.log(genres);

            if (genres != null && genres != '') {
                personalMoovieDB.genres = genres.split(', ');
            } else {
                console.log('Ви ввели некоректні дані');
                i--;
            }
         }

        personalMoovieDB.genres.forEach((item, i) => {
            console.log(`Улюбленний жанр #${i + 1} - це ${item} \n`);
        });

    },
    showMyDB: function (hidden) {
        if (!hidden) {
            console.log(personalMoovieDB);
        }
    },
    toggleVisibleMyDB: function () {
        if (personalMoovieDB.privat) {
            personalMoovieDB.privat = false;
        } else {
            personalMoovieDB.privat = true;
        }
        console.log(personalMoovieDB.privat);
    }
};

// personalMoovieDB.start();
// personalMoovieDB .rememberMyFilms();
// personalMoovieDB.detectPersonalLevel();
// personalMoovieDB.writeYourGenres();
// personalMoovieDB.toggleVisibleMyDB();

// personalMoovieDB.showMyDB(personalMoovieDB.privat);

// function start() {
//     numberOfFimls = +prompt('Сколько фильмов вы уже посмотрели?');

//     while (numberOfFimls == '' || numberOfFimls == null || isNaN(numberOfFimls)) {
//         numberOfFimls = +prompt('Сколько фильмов вы уже посмотрели?'); 
//     }
// }

// start();

// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         let a = prompt('Один из последних просмотренных фильмов?').trim(),
//             b = prompt('На сколько оцените его?');

//         if (a != null && b != null && a != '' && b != '' && a.length < 50) {
//             personalMoovieDB.movies[a] = b;
//             console.log('done');
//         } else {
//             i--;
//             console.log('error');
//         }
//     }
// }

//  rememberMyFilms();

// function detectPersonalLevel() {
//     if (personalMoovieDB.count < 10) {
//         alert('Просмотрено довольно мало фильмов');
//     } else if (personalMoovieDB.count >= 10 && personalMoovieDB.count < 30) {
//         alert('Вы классический зритель');
//     } else if (personalMoovieDB.count >= 30) {
//         alert('Вы киноман');
//     } else {
//         alert('Произошла ошибка');
//     }
// }

// detectPersonalLevel();

// function writeYourGenres() {
//     for (let i = 1; i <= 3; i++) {
//         let genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         // console.log(genre);
//         personalMoovieDB.genres[i - 1] = genre;
//     }
// }

// writeYourGenres();

// function showMyDB(hidden) {
//     if (!hidden) {
//         console.log(personalMoovieDB);
//     }
// }

//  showMyDB(personalMoovieDB.privat);

