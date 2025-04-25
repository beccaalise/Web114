/* 
  Author: Rebecca Cathey
  Date: April 24, 2025
*/

const username = prompt("What is your name?");

let weeklyGas = parseFloat(prompt("Enter your first weekly gas total. Enter -1 to end."));

function calcGasAvg() {
  let count = 0;
  let total = 0;

  while (weeklyGas !== -1) {
    total += weeklyGas;
    count++;

    weeklyGas = parseFloat(prompt("Enter your next weekly gas total. Enter -1 to end."));
  }

  if (count === 0) {
    return 0;
  }

  return total / count;
}

const gas = calcGasAvg();

confirm(username + "'s average weekly gas bill is $" + gas.toFixed(2));
