// const tinder = new Object() //its singleton user
 const tinderUser = {}
 tinderUser.id  = "123abc"
 tinderUser.name ="tanu"
//  console.log(tinderUser);

const nwObj = {
    email  :'tanu@gmail.com',
    fullname : {
        user : {
           name :"taniu",
            surname :'soni'
        }  
    }
}

console.log(nwObj.fullname)
console.log(nwObj.fullname.user.name)



const obj1 = { 1 :'a', 2 :"2"}
const obj2 = { 3 :'c', 4 :"d"}
const obj3  = {...obj1, ...obj2}
console.log(obj3)


// Define an array containing three objects
const array = [
    {
        name : 'tanu',
        surname : 'soni',
        mother :'seema',
    },
    {
        age : '24'
    },
    {
        email : 'tanu@gmail.com'
    }
];

// Log the value of the 'mother' property of the first object in the array
console.log(array[0].mother);


console.log(tinderUser);
console.log(Object.values(tinderUser));
console.log(Object.keys(tinderUser));
