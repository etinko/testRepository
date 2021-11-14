// Weeks 3 Coding

//1.	Creating an array called ages 
let ages = [3, 9, 23, 64, 2, 8, 28, 93];


// a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array 

console.log(ages[ages.length - 1] - ages[0]);

// b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).

ages.push(20)

console.log(ages[ages.length - 1] - ages[0]);


//c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.

let sum = 0;

for (let i = 0; i < ages.length; i++) {

    sum += ages[i];
    
    average = sum / ages.length;
}

console.log(average);

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.

var names = ['sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// a.	Use a loop to iterate through the array and calculate the average number of letters per name.
var sum1 = 0;

for (let i = 0; i < names.length; i++) {
   
    sum1 = sum1 + names[i].length;

    averageNumber = sum1/names.length


}
//printing the average number of letter per names

console.log(averageNumber)


// b. concatenate all the names together, separated by spaces, and print the result to the console.
list = names.join(" ");

console.log(list);

// 3.	How do you access the last element of any array?

console.log(names[names.length - 1]);

// 4.	How do you access the first element of any array?
console.log(names[0]);

// 5.	Create a new array called nameLengths. 
nameLengths = [];

var sum1 = 0;

for (let i = 0; i < names.length; i++) {

    // adding elemts in  nameLenghts array

    nameLengths.push(names[i].length);

    //6. iterate through the array and calculate the sum number of letters per name

    sum1 = sum1 + names[i].length;


}
//printing the sum of all the  element in the array

console.log('sum Number is', sum1);

// printing the new array nameLengths

console.log('nameLenghts = ', nameLengths);

// 7- concanator function

function concanator(string, times) {

    var repeatedString = "";


    while (times > 0) {

        repeatedString += string;

        times--;
    }
    return repeatedString;

}

console.log(concanator('Ballon', 5));

// 8 - Function fullName to creat a full name

function fullName(firstName, lastName) {

    return (firstName + ' ' + lastName);
}
console.log(fullName('Etienne', 'Nkoume'));

//  9 - function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.



function compareArray(array) {

    let result = array.reduce((sum, current) => sum + current, 0);

    return result > 100;

}

//10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.




function averageArray(array) {

    let result = array.reduce((sum, current) => sum + current, 0);

    return (result / array.length);
}


//11.	Write a function that takes two arrays of numbers and returns true if the average 
// of the elements in the first array is greater than the average of the elements in the second array.

function compareAverageOfArray(avr1, avr2) {

    if (avr1 > avr2) {

        return 'true';
    }

}

const twoCompResult = compareAverageOfArray(averResult1, averResult2);

// 12.	Write a function called willBuyDrink that takes a boolean isHotOutside, 
// and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket 
//is greater than 10.50.

function willBuyDrink(isHotOutside, moneyInPocket) {

    return isHotOutside && moneyInPocket >= 10.50;
}

// 13.	Create a function of your own that solves a problem. 
// In comments, write what the function does and why you created it.

function cubi(x){

  return x * x * x;
}

// example
console.log(cubi(3));


// this function take a number and return the cube root of that number
//The cube root of a number is the factor that we multiply by itself three times to get that number