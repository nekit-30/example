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

let a1 = prompt("Введите обязательную статью расходов в этом месяце", "Продукты"),
    a2 = prompt("Во сколько обойдется", "3000"),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", "Продукты"),
    a4 = prompt("Во сколько обойдется", "3000");

appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budget / 30);