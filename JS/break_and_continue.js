/* create prompt that asks user for a number 1 - 50
create a loop that will print all numbers from 1 - 50
but exclude the number the user entered in prompt( most likey a stored variable)
 */

function isNumeric (num) {
    return (!isNaN(parseFloat(num)))
}


var userInput;
// do {
//     userInput = prompt("Please give me a number between 1-50");
//     userInput = parseFloat(userInput);
//     console.log(userInput);
// } while (!isNumeric(userInput) || userInput < 1 || userInput > 50)
//
// console.log(userInput);


do {
    userInput = prompt("Please give me a number between 1-50");
    userInput = parseFloat(userInput);
    console.log(userInput);
    if (isNumeric(userInput) || userInput < 1 || userInput > 50) break;

} while (true)


for (var i=1; i<=50; i+=2) {
    if (i === userInput)
        console.log("Get that digusting number " + userInput + " outta here!");
    continue;
}
console.log("Here is an odd number")
}