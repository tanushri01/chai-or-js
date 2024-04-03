const myArray = ['tanu', 'anu', 'megha']
for (const value of myArray) {
    // console.log(value)
}





const map = new Map()
map.set('IN', "India")
map.set('US', "United State")
map.set('lN', "London")
console.log(map)


for (const [key, value] of map) {
    console.log(key , ':-', value)
}

const myobj = {
    'game' : "football",
    'movie' : 'STOTY',
    'series' : 'vampire diaries'
}

for (const [key, value] of myobj) {
    console.log(key, value)
}
// not iteratable

// method creates a new array by applying a function to each element of the original array. It returns a new array with the same length as the original array, where each element is the result of the applied function.
let array = [1,2,3,4]
const newArray =  array.map((item) =>{ return item + 1})
console.log(newArray);
console.log(array)


// forEach perform every single data from the array and not returing a value 

let arrayForEach = [1,2,3,4]
let newArrayForEach = [];
let newArray2ForEach = [];
array.forEach((item) => {
    newArrayForEach.push(item + 1);
    newArray2ForEach.push(item * 5);
});


console.log(newArrayForEach);
console.log(newArray2ForEach);

// filter is used to select elements from an array based on a condition and return a new array with only the elements that satisfy the condition.
// It takes a function as an argument which returns true or false based on the condition.
// The result of the filter function is a new array containing only the elements for which the provided function returns true.
// filter does not modify the original array.

let arrayFilter = [1,2,3,4]
const evenNumb = arrayFilter.filter((x)=>{
  return (x % 2 === 0 ); 
})
console.log(evenNumb);