let a = +prompt('Введите первое число', 0);
let b = +prompt('Введите второе число', 0);
alert(a + b);

function readNumber() {
    let num;
    do {
        num = prompt("Введите число", 0);
    } while (!isFinite(num));
    if (num === '' || num === null) {
        return null;
    }
    return +num;
}
alert(`Число: ${readNumber()}`);

function random(min, max) {
    return min + Math.random() * (max - min);
}

function randomInteger(min, max) {
    return Math.floor(min + Math.random() * (max + 1 - min));
}

function ucFirst(str) {
    if (!str) return str;
    return str[0].toUpperCase() + str.slice(1);
}

function checkSpam(str) {
    if (str.toLowerCase().includes('viagra') || str.toLowerCase().includes('xxx')) return true;
    return false;
}

function truncate(str, maxlength) {
    if (str.length > maxlength) {
        return str.slice(0, maxlength - 1) + "…";
    }
    return str;
}

function extractCurrencyValue(str) {
    return +str.slice(1);
}

let styles = ["Джаз", "Блюз"];
styles.push("Рок-н-ролл");
styles[Math.floor((styles.length - 1) / 2)] = "Классика";
alert(styles.shift());
styles.unshift("Рэп", "Регги");

function sumInput() {
    let arr = [];
    while (true) {
    let value = prompt('Введите число', 0);
    if (!isFinite(value) || value === null || value === '') break;
    arr.push(+value);
    }
    let sum = 0;
    for (let nu of arr) {
        sum += nu;
    }
    return sum;
}

function getMaxSubSum(arr) {
    let sum0 = 0;
        for (let i = 0; i < arr.length; i++){
        let sum1 = 0;
        for (let j = i; j < arr.length; j++){
            sum1 += arr[j];
            sum0 = Math.max(sum1, sum0);
        }
    }
    return sum0;
}

function getMaxSubSum(arr) {
    let sum0 = 0;
    let sum1 = 0
    for (let num of arr){
        sum1 += num;
        sum0 = Math.max(sum1, sum0);
        if (sum1 < 0) sum1 = 0;
    }
    return sum0;
}

function camelize(str) {
    return str.split('-').map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1)).join('');
}

function filterRange(arr, a, b) {
    let filtered = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= a && arr[i] <= b) filtered.push(arr[i]);
    }
    return filtered;
}

function filterRange(arr, a, b) {
    return arr.filter(item => item >= a && item <= b);
}

function filterRangeInPlace(arr, a, b) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < a || arr[i] > b) {
            arr.slice(i, 1);
            i--;
        }
    }
}

function sort(arr) {
    return arr.sort((a, b) => b - a);
}

function copySorted(arr) {
    return arr.slice().sort((a, b) => a.localeCompare(b));
}

function Calculator() {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b
    };

    this.calculate = function(str){
        let arr = str.split(' '),
        a = +arr[0],
        op = arr[1],
        b = +arr[2]
        if (!this.methods[op] || isNaN(a) || isNaN(b)) {
            return NaN;
        }    
        return this.methods[op](a, b);
    };

    this.addMethod = function(name, func) {
        this.methods[name] = func;
    };
}


let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };
let users = [ vasya, petya, masha ];
let names = users.map(item => item.name);
alert( names );



let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };
let users = [ vasya, petya, masha ];
let usersMapped = users.map(item => ({fullName: `${item.name} ${item.surname}`, id: item.id}));

function sortByAge(users) {
    users.sort((a, b) => a.age - b.age);
}

function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
}

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
    }
}

function getAverageAge(users) {
    return users.reduce((sum, user) => sum + user.age, 0) / users.length;
}

function unique(arr) {
    let arr1 = [];
    for (let str of arr) {
        if (!arr1.includes(str)) {
            arr1.push(str);
        }
    }
    return arr1;
}

function groupById(arr) {
    return arr.reduce((obj, user) => {obj[user.id] = user; return obj;}, {});
}

function unique(arr) {
    let set = new Set(arr);
    return Array.from(set);
}

function aclean(arr) {
    let map = new Map();
    for (let str of arr) {
        let strSort = str.toLowerCase().split('').sort().join('');
        map.set(strSort, str);
    }
    return Array.from(map.values());    
}

let map = new Map();
map.set("name", "John");
let keys = Array.from(map.keys());
keys.push("more");


let readMessages = new WeakSet();
readMessages.add(messages[0]);

let readMap = new WeakMap();
readMap.set(messages[0], Date(2022, 1, 1));

function sumSalaries(salaries) {
    let sum = 0;
    for (let num of Object.values(salaries)){
        sum += num;
    }
    return sum;
}

function sumSalaries(salaries) {
    return Object.values(salaries).reduce((a, b) => a + b, 0);
}

function count(obj) {
    return Object.keys(obj).length;
}


let {name, years: age, isAdmin = false} = user;

function topSalary(salaries) {
    let max = 0;
    let maxName = null;
    for (let [name, salary] of Object.entries(salaries)){
        if (salary > max) {
            max = salary;
            maxName = name;
        }
    }
    return maxName;
}

let date = new Date(2012, 1, 20, 3, 12);
alert(date);

function getWeekDay(date) {
    let d = date.getDay();
    switch(d){
        case 0:
            return "ВС";
            break;
        case 1:
            return "ПН";
            break;
        case 2:
            return "ВТ";
            break;
        case 3:
            return "СР";
            break;
        case 4:
            return "ЧТ";
            break;
        case 5:
            return "ПТ";
            break;
        case 6:
            return "СБ";
            break;
    }
}

function getWeekDay(date) {
    let days = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];
    return days[date.getDay()];
}

function getLocalDay(date) {
    let days = [7, 1, 2, 3, 4, 5, 6];
    return days[date.getDay()];
}

**
function getLocalDay(date) {
    let day = date.getDay();
    if (day == 0) { // день недели 0 (воскресенье) в европейской нумерации будет 7
        day = 7;
    }
    return day;
}

function getDateAgo(date, days) {
    let dateLast = new Date(date.getFullYear(), date.getMonth(), date.getDate() - days);
    return dateLast.getDate();
}

function getDateAgo(date, days) {
    let dateLast = new Date(date);
    dateLast.setDate(date.getDate() - days);
    return dateLast.getDate();
}

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 1);
    return date.getDate(date.setDate(date.getDate() - 1));
}

function getLastDayOfMonth(year, month) {
    let date = new Date(year, month + 1, 0);
    return date.getDate();
}

function getSecondsToday() {
    let dateNow = new Date();
    let date = new Date(dateNow.getFullYear(), dateNow.getMonth(), dateNow.getDate());
    return Math.round((dateNow - date) / 1000); 
}

function getSecondsToday() {
    let d = new Date();
    return d.getHours() * 3600 + d.getMinutes() * 60 + d.getSeconds();
}

function getSecondsToTomorrow() {
    let now = new Date();
    let tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    return Math.round((tomorrow - now) / 1000);
}

function getSecondsToTomorrow() {
    let now = new Date();
    let hour = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let totalSecondsToday = (hour * 60 + minutes) * 60 + seconds;
    let totalSecondsInADay = 86400;
  
    return totalSecondsInADay - totalSecondsToday;
}

function formatDate(date) {
    let millisec = new Date() - date;
    let sec = Math.round(millisec / 1000);
    if (millisec < 1000) {
        return "прямо сейчас";
    } else if (millisec >= 1000 && sec < 60) {
        return sec + " сек. назад";
    } else if (sec >= 60 && sec < 3600) {
        let min = sec / 60;
        return min + " мин. назад";
    } else {
        let arr = [
            '0' + date.getDate(),
            '0' + (date.getMonth() + 1),
            '' + date.getFullYear(),
            '0' + date.getHours(),
            '0' + date.getMinutes()
        ].map(str => str.slice(-2));
        return arr.slice(0, 3).join('.') + ' ' + arr.slice(3).join(':');
    }
}

function formatDate(date) {
    let dayOfMonth = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let hour = date.getHours();
    let minutes = date.getMinutes();
    let diffMs = new Date() - date;
    let diffSec = Math.round(diffMs / 1000);
    let diffMin = diffSec / 60;
    let diffHour = diffMin / 60;
  
    // форматирование
    year = year.toString().slice(-2);
    month = month < 10 ? '0' + month : month;
    dayOfMonth = dayOfMonth < 10 ? '0' + dayOfMonth : dayOfMonth;
    hour = hour < 10 ? '0' + hour : hour;
    minutes = minutes < 10 ? '0' + minutes : minutes;
  
    if (diffSec < 1) {
      return 'прямо сейчас';
    } else if (diffMin < 1) {
      return `${diffSec} сек. назад`
    } else if (diffHour < 1) {
      return `${diffMin} мин. назад`
    } else {
      return `${dayOfMonth}.${month}.${year} ${hour}:${minutes}`
    }
}

let str = JSON.stringify(user);
let value = JSON.parse(str);


let room = {
    number: 23
  };
  
  let meetup = {
    title: "Совещание",
    occupiedBy: [{name: "Иванов"}, {name: "Петров"}],
    place: room
  };
  
  // цикличные ссылки
  room.occupiedBy = meetup;
  meetup.self = meetup;
  
  alert( JSON.stringify(meetup, function replacer(key, value) {
    return (key != "" && value == meetup) ? undefined : value;
    /* ваш код */
  }));