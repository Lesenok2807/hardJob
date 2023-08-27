'use strict';


const week = ['Воскресенье', 'Понедельник', 'Вторик', 'Среда', 'Четверг', 'Пятница', 'Суббота'];

let data = new Date();
let toDay = week[data.getDay()];

for (let i = 0; i < 7; i++) {
  week.push();

  if (week[i] === 'Суббота' || week[i] === 'Воскресенье') {
    document.write(`<p><i>${week[i]}</i></p>`);
  } else if (week[i] === toDay) {
    document.write(`<p><b>${week[i]}</b></p>`);
  } else {
    document.write(`<p>${week[i]}</p>`);
  }
}