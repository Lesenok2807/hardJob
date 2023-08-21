'use strict';

const ru = "Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье";
const en = "Mondey, Tuesday, Wendnesday, Thudsday, Friday, Saturday, Sunday";
let lang = ru;
let namePerson = 'Александр'; 


if (lang == ru) {
    console.log(ru);
} else {
    console.log(en);
}


switch (lang) {
    case ru:
        console.log("Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье");
        break;
    case en:
        console.log("Mondey, Tuesday, Wendnesday, Thudsday, Friday, Saturday, Sunday");
        break;
    default:
        console.log("Что-то пошло не так");
}


lang === ru ? console.log(ru) : console.log(en);


namePerson == 'Артем' ? console.log("директор") : console.log("студент"); 
namePerson == 'Александр' ? console.log("преподаватель") : console.log("студент"); 