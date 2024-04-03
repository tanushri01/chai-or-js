const number = [1,2,3,4]
const newNum = number.map((x)=>{return x + 2})
console.log(newNum)

// map return new array
// it doest effect old array



const number2 = [1,2,3,4,6]
const newNumber2 = [];
 number2.forEach((x) => 
 newNumber2.push(x *3));
console.log(newNumber2)

// foreach methos go and check every value of old array and it will affect old array so create an emplt array and new value store inside it and it return an array



const number3 = [1,2,3,45, 5,6,7]
const newArray3 = number3.filter((x) =>{return 
                                        x > 3})
console.log(newArray3)
// filter methos filter element who passes condition true and store it new variable and its 