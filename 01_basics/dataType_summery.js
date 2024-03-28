// primitive data types means call by value 
// number, string, boolean, undefined, null, symbol, bigINT
let num = 22;
let str = "abc";
let booleanNum = true;
let number;
let tempreture = null;
let uniqueId = Symbol("123");
let uniqueId_02 = Symbol("123");
let bigIntNum = 12345678900n;

console.log(typeof num, num)
//output shoud be type number value 22
console.log(typeof str, str)
// type sting value abd
console.log(typeof booleanNum, booleanNum)
// type booleans value true
console.log(typeof number, number)
//type undefined value undefined
console.log(typeof tempreture, tempreture)
//type object value null

console.log(typeof uniqueId_02, uniqueId_02)
//type symbol value Symbol(123)
console.log(typeof bigIntNum, bigIntNum )
//type "bigint"  value 12345678900n


const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    console.log("Hello world");
}

console.log(typeof heros,heros );
console.log(typeof myObj,myObj );
console.log(typeof myFunction, myFunction );
/*memory allocation stack(primitive) heap(nonprimitive)
*/
let myname = "tanu";
let mysurname = myname;
mysurname = "soni"
console.log(myname)
console.log(mysurname)

let array = [1,3,4]
let newArray = array;
newArray[3] = 5;
console.log(array)
console.log(newArray)
