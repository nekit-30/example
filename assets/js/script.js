'use strict'

var money = +prompt("Ваш бюджет на месяц?", "10000");
var time = prompt("Введите дату в формате YYYY-MM-DD", "2018-02-13");

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false
};

for (let i = 0; i < 2; i++) {
    let a = prompt("Введите обязательную статью расходов в эотм месяце", "Питание"),
        b = prompt("Во сколько это обойдется", "12000");

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
        console.log("Ввод некорректных данных");
    }
};


/*
let i = 0;
while (i < 2) {
    let a = prompt("Введите обязательную статью расходов в эотм месяце", "Питание"),
    b = prompt("Во сколько это обойдется", "12000");
    i++;

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
        console.log("Ввод некорректных данных");
    }
};
*/

/*
let i = 0;
do {
    let a = prompt("Введите обязательную статью расходов в эотм месяце", "Питание"),
    b = prompt("Во сколько это обойдется", "12000");
    i++;

    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
        && a != "" && b != "" && a.length < 50) {
        console.log("done");
        appData.expenses[a] = b;
    } else {
        i--;
        console.log("Ввод некорректных данных");
    }
} while (i < 2);
*/

appData.moneyPerDay = appData.budget / 30;

alert("Ежедневный бюджет:" +appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
} else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("Средний уровень достатка");
} else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень дохода")
} else {
    console.log("Произошла ошибка")
};