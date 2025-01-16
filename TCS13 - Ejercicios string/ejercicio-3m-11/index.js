"use strict"

let nums = [2, 3, 2, 3, 5];
let cont = "";

for (let i = 0; i < nums.length; i++) {
    let desc = nums.length - 1 - i;
    cont += " " + i + " - " + desc + "\n";
}

alert(cont);