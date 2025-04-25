// Author: Rebecca Cathey
// Date: April 21, 2025

let username = prompt("What is your name?");

let proceed = confirm("Do you give permission to use your name on this web page?");

if (proceed) {
  console.log("Yes, I can use your name on this page.");
  console.log("Username:", username);
} else {
  console.log("No, you can not use my name on this web page. Privacy Please.");
}

let age = prompt("How old are you?");

alert(`Hi ${username}! You are ${age} years old.`);
