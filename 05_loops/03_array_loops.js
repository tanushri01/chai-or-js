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

