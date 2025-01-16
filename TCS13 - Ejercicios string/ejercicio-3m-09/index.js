"use strict"
let phrase= "vida hay una sola.";
let numword= 2;
let count = 0;
let space = ' ';
let start = 0;
let end = 0;
for (let i=0; i< phrase.length; i++){
    if(phrase[i]==space){
        count++;
    
    if(count===numword-1){
        start = i;
    }
    if(count===numword){
        end = i;
    }
}}

alert (phrase.substring(start,end));