'use strict'

let money,
    time;

function start() {
    money = +prompt("Ваш бюджет на месяц?", "10000");
    time = prompt("Введите дату в формате YYYY-MM-DD", "2018-02-13");

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt("Ваш бюджет на месяц?", "10000");
    }
}

start();

var appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
};

function chooseExpenses() {
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
    }
};

chooseExpenses();


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

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed(1);
    alert("Ежедневный бюджет:" +appData.moneyPerDay);
};

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень дохода")
    } else {
        console.log("Произошла ошибка")
    };
};

detectLevel();

function checkSavings(){
    if (appData.savings == true) {
        let save = +prompt("Введите сумму накоплений", "20000"),
            percent = +prompt("Под какой процент?", "12.9");

        appData.monthIncome = save / 100 / 12 * percent;
        alert("Доход в месяц с вашего депозита" + appData.monthIncome);
    }
};

checkSavings();

function chooseOptExpenses() {
    for (let i = 0; i < 3; i++) {
        let answer = prompt("Статья необязательных расходов?", "Подарки");

        if ((typeof(answer)) === "string" && answer != '' && answer != null) {
            appData.optionalExpenses[i+1] = answer;
            console.log(typeof(answer));
        } else {
            i--;
            console.log("Ошибка ввода статьи расходов");
        }; 
    }
};

chooseOptExpenses();
