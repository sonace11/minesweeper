// create a function that converys hours into seconds.

function convertHoursToSecond(hour = Int) {
    let seconds = hour * 60
    return seconds
}
console.log(convertHoursToSecond (5))

// create a function that calculates the area of rectangle of a rectangle, if the argument are ivalid, your funciton must return -1

function area ( height,length ){
    let result = height * length 
    if (!Number.isInteger() ) {
   result = -1
    }
return result
   }

console.log(area( 4,8))
   
//ES6 
const areaTwo = (h,w) => {
    let result = w * h 
    return Number.isInteger(result) ? result : -1
}

console.log(areaTwo(3,2))
//ES6

const areaThree = (h2,w2) => Number.isInteger(h2,w2) ? h2 * w2 : -1
 console.log (areaThree( 3,2))

 // create a function that take a number as an argument, incremennt the number by 1

 function incremennt (number ){
let result = number + 1 
  return result 
 }
 console.log(incremennt(5))
//ES6
 const incremenntNumber = num => num + 1
 console.log(incremenntNumber(3))

 // create a function to concantenate two int arrays
 // concaTwoArray([1,2,3,4],[6,7,8])-> [1,2,3,4,6,7,8]

 function concan ( Arr1 = array ,Arr2 = array) {
    for( let i = 0; i < Arr2.length;i++){
        if(Number.isInteger(Arr2[i])){
            Arr1.push(Arr2[i])
        }
    }
    return Arr1
 }
 console.log(concan([1,2,3,],[4,5,6,7,8]))

 //ES6
 const concat2 = (arr1,arr2) => arr1.concat(arr2)
 console.log(concat2([8,9,0],[5,8,9]))

//ES6
const concat3 = (arr1, arr2) => [...arr1,...arr2]
console.log(concat3([1,6,8],[4,3,2,1]))

//create a function that take an object argument to find the volume of a box (w,L,H)
//return  the volume of the box 
// voloumeOfBox({w:3 , L: 6, H: 2}) -> result 

//ES6
const voloumeOfBox = (obj) => obj.h * obj.w * obj.l  
console.log(voloumeOfBox({w:3,h:2,l:6}))

//ES6
const voloumeOfBox2 = ({w, l, h}) => w * l *h 
console.log(voloumeOfBox2({w:4,h:3,l:1}))

//ES5 from me

function vol ({w,h,l}) {
let result = w*h*l 
return result
}
console.log(vol({w:2,h:3,l:3}))