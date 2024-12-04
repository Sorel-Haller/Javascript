/**
 * Type casting
 * Implicit and explicit
 * */

//automatic type casting, because we are adding 2 different types: number + string
//mathematically this makes no sense,so JS willcast number to string

console.log( + "tere")

//this is manual type casting
//we cast the string to number string built in number function
console.log(5 + Number("tere"));

console.log(typeof 5);
console.log(typeof true);


