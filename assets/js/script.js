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
    savings: true,
    chooseExpenses: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        alert("Ежедневный бюджет:" +appData.moneyPerDay);    
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("Минимальный уровень достатка");
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("Средний уровень достатка");
        } else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень дохода")
        } else {
            console.log("Произошла ошибка")
        }    
    },
    checkSavings: function() {
        if (appData.savings == true) {
            let save = +prompt("Введите сумму накоплений", "20000"),
                percent = +prompt("Под какой процент?", "12.9");
    
            appData.monthIncome = save / 100 / 12 * percent;
            alert("Доход в месяц с вашего депозита" + appData.monthIncome);    
        }
    },
    chooseOptExpenses: function() {
        for (let i = 0; i < 3; i++) {
            let answer = prompt("Статья необязательных расходов?", "Подарки");
    
            if ((typeof(answer)) === "string" && answer != '' && answer != null) {
                appData.optionalExpenses[i+1] = answer;
                console.log(typeof(answer));
            } else {
                i--;
                console.log("Ошибка ввода статьи расходов");
            }
        }
    },
    chooseIncome: function() {
        let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        if ((typeof(items)) === 'string' && items != null && items != '') {
            appData.income = items.split(', ');
            appData.income.push(prompt("Может что-то ещё?", ""));
            appData.income.sort();
        } else {
            appData.chooseIncome();
        };

        appData.income.forEach(function(item, i, mass) {
            alert("Способы доп. заработка: " + (i+1) + " - " + item);
        });
    }
};

console.log("Наша программа включает в себя данные: ");
    for (let key in appData) {
        console.log(key + " - " + appData[key]);
    };
