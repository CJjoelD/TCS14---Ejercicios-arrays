"use strict"

const nums = [0, 2, 4, 8];
let resultado = "";

for (let i = 0; i < nums.length; i++) {
  for (let j = i+1; j < nums.length; j++) {
    alert (nums[i]+""+ nums[j])
  }
}