'use strict';

const ru = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
const en = ['Mondey', 'Tuesday', 'Wendnesday', 'Thudsday', 'Friday', 'Saturday', 'Sunday'];
let lang = ru;
let namePerson = 'Александр'; 

if (lang == ru) {
    console.log(ru.join(', '));
} else {
    console.log(en.join(', '));
}

switch (lang) {
    case ru:
        console.log(ru.join(', '));
        break;
    case en:
        console.log(en.join(', '));
        break;
    default:
        console.log("Что-то пошло не так");
}

lang === ru ? console.log(ru.join(', ')) : console.log(en.join(', '));

namePerson == 'Артем' ? console.log("директор") : console.log("студент"); 
namePerson == 'Александр' ? console.log("преподаватель") : console.log("студент");
