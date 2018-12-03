// (function() {
//     "use strict";
//
//     /**
//      * TODO:
//      * Create an array of 4 people's names and store it in a variable called
//      * 'names'.
//      */
//
//     // var names = [
//     //     "Tristan",
//     //     "Devin",
//     //     "MakeVio",
//     //     "God"
//     // ];ZZ¸¸¸
//
//
//
//
//         // console.log(names[0]);
//         // console.log(names[1]);
//         // console.log(names[2]);
//         // // console.log(names[3]);
//
//
//
//         // for (var i = 0; i < names.length; i++) {
//         //     console.log("The name at " + i + " is " + names[i]);
//         // }
//
//
//
//         // names.forEach(function (element)
//         // {
//         //     console.log(element);
//         // });
//
//
//
//
//         // for (var i = 0; i < names.length; i++)
//         // {
//         //     console.log(names[i]);
//         // }
//
//
//
//
//
//
//     var names  = [
//         "Margaret Hamilton",
//         "Sandi Metz",
//         "Admiral Dr. Grace Hopper",
//         "Ada Lovelace"
//     ]
//
//
//     console.log("The number of names on the array is " + names.length)
//
//     /**
//      * TODO:
//      * Create a log statement that will log the number of elements in the names
//      * array.
//      */
//     // console.log(names.length);
//
//
//     /**
//      * TODO:
//      * Create log statements that will print each of the names individually by
//      * accessing each element's index.
//      */
//
//
//     console.log(names[0]);
//     console.log(names[1]);
//     console.log(names[2]);
//     console.log(names[3]);
//
//     /**
//      * TODO:
//      * Write some code that uses a for loop to log every item in the names
//      * array.
//      */
//     //
//
//
//
//     names.forEach(function(name))
//     {
//         console.log(name);
//     }
//
//
//
//     /**
//      * TODO:
//      * Refactor your above code to use a `forEach` loop
//      */
//
//    //
//
//
//
//
//
//
//
//
//
//     /**
//      * TODO:
//      * Create the following three functions, each will accept an array and
//      * return an an element from it
//      * - first: returns the first item in the array
//      * - second: returns the second item in the array
//      * - last: returns the last item in the array
//      *
//      * Example:
//      *  > first([1, 2, 3, 4, 5]) // returns 1
//      *  > second([1, 2, 3, 4, 5]) // returns 2
//      *  > last([1, 2, 3, 4, 5]) // return 5
//      */
//
// })();
// //
//
// // console.log("------");
// //
// // function first(array)
// // {
// //     return array[0];
// // }
// //
// //
// // function second(array)
// // {
// //     return array[1];
// // }
// //
// //
// // function last(array)
// // {
// //     var arrL = array.lenth
// //     return array[arrL -1];
// // }
//
//
//
// //
// //
// //
// // function first(array1)
// // {
// //     var compare = array1;
// //     console.log(compare[0]);
// // }
// //
// //
// // function second(array2)
// // {
// //     var compare1 = array2;
// //     console.log(compare1[1]);
// // }
// //
// // function last(array3)
// // {
// //     var compare2 = array3.length;
// //     console.log(array3[compare2 -1]);
// // }
// //
// // first([1, 2, 3, 4, 5])
// // second([1, 2, 3, 4, 5])
// // last([1, 2, 3, 4, 5, 30, 70])
// // //
// // // function first(input)
// // // {
// // //     var frst = [1, 2, 3, 4, 5];
// // //     console.log(frst[0]);
// // //
// // // }
// // //
// // // first()
// // //
// // // function second(input)
// // // {
// // //     var secnd = [1, 2, 3, 4, 5];
// // //     console.log(secnd[1]);
// // //
// // // }
// // //
// // // second()
// // //
// // // function last(input)
// // // {
// // //     var lst = [1, 2, 3, 4, 5];
// // //     console.log(lst[4]);
// // //
// // // }
// // //
// // // last()
// //
// //
// //
// // //
// // // function oneHundred(x)
// // // {
// // //     var xL = x.length;
// // //
// // //    for (var i=0; i<=100; i++)
// // //    {
// // //        console.log(i);
// // //    }
// // // }
// // // oneHundred()
// // //
// // //
// //
// //
// // function oneHundo() {
// //     var array = [];
// //     var i;
// //     for (i = 0; i < 100; i+=1) {
// //         array.push((i + 1));
// //     }
// //
// //     return array;
// // }
// //
// // console.log(oneHundo());
// //
// // //
// // // var input = [1, 2, 3, 4, 5, 6, 7];
// // //
// // //
// // // function reverse(input) {
// // //     for (var i = 0; i < 100; i++)
// // //
// // //     {
// // //         console.log(input.Array.reverse());
// // //     }
// // // }
// // //
// // // reverse()
// //
// //
// // function temporarySwap(array)
// // {
// //     var left = null;
// //     var right = null;
// //     var length = array.length;
// //     for (left = 0, right = length - 1; left < right; left += 1, right -= 1)
// //     {
// //         var temporary = array[left];
// //         array[left] = array[right];
// //         array[right] = temporary;
// //     }
// //     return array;
// // }
// //
// // temporarySwap(["1, 2, 3, 4, 5, 6, 7, 8"])



function oneHundred() {
    var array = [];
        for (var i = 0; i <= 99; i++)
        {
            array[i] = i+1;
        }
            return array
}


// function reverse(input) {
//     var output = [];
//     for (var i = input.length - 1; i >= 0; i--) {
//         output.push(input[i]);
//     }
//     return output;
// }
//
// console.log(reverse(oneHundred(55)));
//
//
//
//

//
// function sumAll(numbers)
// {
//     var sum = 0;
//     numbers.forEach(function(number)
// {
//     sum = sum + number;
// });
//     return sum;
// }
//
// sumAll()




function multiplyAll(numbers)
{
    var product = 1;
    numbers.forEach(function(number)
    {
        product *= number;
    });
    return product;
}

console.log(multiplyAll(oneHundred()));











