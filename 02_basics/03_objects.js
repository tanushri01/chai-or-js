const mySymbol = Symbol("key1")
const jsUser = {name :'tanu',
[mySymbol] :  "myKey1 ",
 "full Name": "Tanushri Mujwar",
age : 24,
location : 'jaipur',
email : 'tanu@gmail.com',
isPresent : false,
weekend : ["sunday, saturday"]
}
console.log(jsUser["full Name"])
console.log(jsUser.location)

console.log(jsUser["email"])
console.log(jsUser[mySymbol]);

jsUser.name = "kartikey";
console.log(jsUser.name)
// Object.freeze(jsUser)

jsUser.greeting = function()
{
    console.log(`hi its Me ${this.name}`);
}
console.log(jsUser.greeting());