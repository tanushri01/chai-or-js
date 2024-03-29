// Original array
const myArr = [0, 1, 2, 3, 4, 5, 4, 7, 8, 9];

// Using slice() method to create a new array from index 1 to 5 (exclusive)
const newArray = myArr.slice(1, 6);
console.log("A", newArray);

// Using slice() method with negative indices to slice the last 3 elements
console.log(myArr.slice(-4, -1), "slice method");

// Using splice() method to replace 2 elements starting from index 1 with "raj"
myArr.splice(1, 2, "raj");
console.log(myArr);

// Using splice() method to delete 2 elements starting from index 1
myArr.splice(1, 2);
console.log(myArr);

// Deleting array elements by inserting elements at index 1 without removing any
// const myArr = [0, 1, 2, 3, 4, 5, 4, 7, 8, 9];
// myArr.splice(1, 0, "raj");
// console.log(myArr);

// Adding 11 to the end of the array
myArr.push(11);
console.log(myArr);

// Removing the last element of the array
myArr.pop();
console.log(myArr);

// Adding 1 to the beginning of the array
myArr.unshift(1);
console.log(myArr);

// Removing the first element of the array
myArr.shift();
console.log(myArr);

// Finding the index of the first occurrence of "4" in the array
const myArr1 = [0, 1, 2, 3, 4, 5, 4, 7, 8, 9];
const index = myArr1.indexOf("4");
console.log(index); // Output: 4 (index of the first occurrence of "4")
const array = [1,2,3,4]
const array2 = [5,6,7,8]
const concateArray = array.concat(array2)
const arraySum = [...array, ...array2]
console.log(arraySum, "spread operator")
console.log(concateArray, "concat")