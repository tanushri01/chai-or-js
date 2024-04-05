
// const num = [1,2,3]

// const newNum = num.reduce((acculator, currentValue) =>{return acculator +currentValue }, 1)

 // console.log(newNum);


 const shoppingCart = [{itemName :"css-course", price :12999},
 {itemName : "react-course", price : 13999},
 {itemName : "java-couse",price :12599}]
 
 
 const totalPrize = shoppingCart.reduce((acc, item)=>{return acc  + item.price}, 0)
 console.log(totalPrize)