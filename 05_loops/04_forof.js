const arr = [1,2,3,4,5]
const obj = {1 : 'a',
            2 :'b',
            3 :'c'}

            for(const key of arr)
            {
              console.log(key, "you can use for of for array also");
            }
// const newArr = arr.map(function(value){
//   console.log(value)
// })
const newAr = arr.map((value) => console.log(value))
 const newObj = Object.entries(obj).map(([key, value]) =>({key, value}))

// console.log(newObj)

const str = "tanushrimujwar";
const araay   = str.split('')
const newStr= araay.map((char) => char)
// console.log(newStr, "i  am a converted string")
// console.log(araay)
// console.log(str)



//  for of loops for array andd string
// for in loops for object 
//can,t use map inside for of with object

const one = "tanu soni"; 
for(let i = 0; i<one.length; i++)
  {
if(one[i] == " ")
  {
   continue;
    }
    // console.log(one[i]);
  } 

  const map = new Map();
map.set('js', "javascript");
map.set('html', "hyper text markup language");
map.set('css', "cascading style sheets");
// console.log(map, typeof map)


const str1 = 'Tanushri Mujwar';

for(let value of str1)
  {
    // if ( value === " ")
    // {continue;}
    // console.log(value)
  }

const array = [1,2,3,4,5,6]
for(let value of array)
  {
    // console.log(value)
  }

// map for forreach method for array for if you want to use it you have to convert object to  array and then implement it.

// for of means value and value are only in string and array
