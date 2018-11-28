var i = 2;


while (i < 65536)
{
    i = i * 2
    console.log(i);
}


// This is how you get a random number between 50 and 100
var allCones = Math.floor(Math.random() * 50) + 50;
// This expression will generate a random number between 1 and 5'

console.log("I have " + allCones + " cones!");



do  {
    var customerDemand = Math.floor(Math.random() * 5) + 1;
        if (allCones < customerDemand){
            console.log("I don't have enough for you!")
        }
        else {
            allCones = allCones - customerDemand;
        }

        if (allCones == 0){
            console.log("Can\'t sell anymore cones!");
        }
            console.log("I want " + customerDemand + " cones");
            console.log("I currently have " + allCones + " left!");

} while (allCones > 0);



//
// function powersOfTwo(){
//     var num = 2;
//     while (num < 65537){
//         console.log(num);
//         num = num * 2;
//
//     }
//
// }
//
//



// var iceCream = function () {
//
//     var allCones = Math.floor(Math.random() * 50) + 50;
//     console.log("We are starting with " + allCones + " cones");
//
//     do{
//         // sell cones
//         var customerWants = Math.floor(Math.random() * 5) + 1;
//             if (allCones >= customerWants){
//                 allCones -= customerWants;
//                 console.log(customerWants + " cones sold...")
//             }
//                 else{
//                     console.log("Cannot sell you " + customerWants + " I only have, " + allCones + ".");
//             }
//     }
//     while (allCones > 0)
//         console.log("Yay, I've sold them all!");
// }
//
// iceCream()





















