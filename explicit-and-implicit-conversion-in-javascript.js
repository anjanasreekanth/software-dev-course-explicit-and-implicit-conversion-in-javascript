/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


//Corrected Code with Comments.

let result = 5 - 2;// 5 is number so no need of " ".
console.log ("The result is: " + result);

let isValid = false; //If you simply want the variable to be false, assign the boolean literal directly without quotes
if (isValid) {
  console.log("This is valid!");
}
else {
  console.log ("This is invalid");
}

let age = 25; // since age is number no need to gibe in double quotes which makes it a string.
let totalAge = age + 5;
console.log("Total Age: " + totalAge);

//One example of implicit type conversion using null.

let firstNumber = 10;
let secondNumber = null;
let sum = firstNumber + secondNumber;
console.log(sum);

//One example of explicit type conversion.

let stringValue = "55"; //"55" is given as string
console.log(stringValue + 10);// output will be 5510 since "55" is defined as a string
let numericValue = Number(stringValue); // converts "55" to number 55.
console.log(numericValue);
 console.log(numericValue + 10);// output will be 65 since "55" is converted to number 55
 


