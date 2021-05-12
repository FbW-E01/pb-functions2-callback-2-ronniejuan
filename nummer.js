// # Callbacks

// #### Number Sqaure
// * Write a function which will return sqaure of given number
// * Write a function which will return sqaure of every number in array

// ```javascript
//     const array = [1, 2, 3, 4, 5, 6]
//     sqaure(array,squareNumber)  // return [1,4,9,16,25]

// ```


function squareNumber(x){
// return  Math.pow(x,2)
return x++

}

function square(y,func){
return y.map(func);


}

const array = [1, 2, 3, 4, 5, 6]
console.log(square(array,squareNumber))


