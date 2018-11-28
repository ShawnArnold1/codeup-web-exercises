"use strict";

alert("Welcome to my Website!");

console.log('Hello from External JS!');

var favoritecolor = prompt("What's your favorite color?");

alert("Great! " + favoritecolor + " is my favorite color too!");

var pricePerDay = 3;
var littleMermaidDays = prompt("How many days did you keep the Little Mermaid?");
var herculesDays = prompt("How many days did you keep Herculese?");
var brotherBearDays = prompt("how many days did you keep Brother Bear?");
var  TotalPrice = (littleMermaidDays * pricePerDay + herculesDays * pricePerDay + brotherBearDays * pricePerDay);
alert("Your total price is $" + TotalPrice.toFixed(2));

var googleRate = 400;
var amazonRate = 380;
var facebookRate = 350;
var facebookHours = 10;
var googleHours = 6;
var amazonHours = 4;
var total = googleRate * googleHours + amazonRate * amazonHours + facebookRate * facebookHours;
console.log(total);