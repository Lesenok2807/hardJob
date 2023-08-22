'use strict';

const str = prompt('Введите текст');
const newStr = str.trim();
 
const changeStr = function() {
    const checkString = function() {
        if (typeof newStr != 'string') {
            return 'str - не строка';
         } else {
            return 'str - строка';
        }
    }; 

    const deleteElement = function() {
        if (newStr.length > 30) {
            return newStr.slice(0, newStr.length - 31).concat('(...)');
        }
    };  

    console.log(checkString());
    console.log(deleteElement());
};  

changeStr(newStr);