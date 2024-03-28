/*
there so many methods in to maniputae string
length, charAt, toUppercase, tolowercase, slice, substring, indexof, bind, replace, includes()
*/
let name = new String("Tanushree");
let surname = "Soni";
console.log(`my name is ${name.toUpperCase()} and my surname is ${surname.toLowerCase()}`)
console.log(name.length);
console.log(name.slice(2,6))
let anotherName = name.slice(-9, 5);
//same as substring but taking negative indexing
// 
 console.log(anotherName)
console.log(name.substring(2,6))
//same as slice but not taking negative indexing
let myEmail = "                                       tanushreemujwar@gmail.com"
console.log(myEmail.indexOf("s"));
console.log(myEmail.charAt(9));
console.log(myEmail.replace('@', '-'));
console.log(myEmail.includes('@'))
console.log(myEmail.length, myEmail)
console.log(myEmail.trim(), myEmail.trim().length)



let str = "abcdefghijklmnopqrstuvwxyz";
// revers it and also provide semcolor between them
let newStr = str.toUpperCase().split("").reverse().join("")
console.log(newStr)
console.log(str)
