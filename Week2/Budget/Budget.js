//Web114: Week 2 - Budget Activity
//Author: Rebecca Cathey
//Date: October 17th 2025

/*Monthly Variables*/
let money = 4000;
let housing = 1200;
let food = 300;
let monthlyUtilities = 150;

/*Calculate Total Income*/
let totalIncome = money;

/*Calculate Total Expenses*/
let totalExpenses = housing + food +monthlyUtilities;

/*Calculate Remaining Money*/
let remainingMoney = totalIncome - totalExpenses;

/*Calculate Percentages*/
let rentPercentage = (housing / totalIncome) * 100;
let groceriesPercentage = (food / totalIncome) * 100;

/*Output the Results*/
console.log("The total income was: " + totalIncome.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("The total rent was: " + housing.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("The total groceries cost was: " + food.toLocaleString("en-US", { style: "currency", currency: "USD" }));
console.log("The total monthly utilities were: " + monthlyUtilitiestoLocaleString("en-US", { style: "currency", currency: "USD" }));

console.log("Percentage spent on rent: " + rentPercentage.toFixed(2) + "%");
console.log("Percentage spent on groceries: " + groceriesPercentage.toFixed(2) + "%");

console.log("Remaining money after expenses: " + remainingMoney.toLocaleString("en-US", { style: "currency", currency: "USD" }));
