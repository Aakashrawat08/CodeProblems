// A javascript fn is a Block of code  designed to perform particular task.
// A js fn is executed when invokes it ,call it
// function tocelius(fer){
//     return (5/9)*(fer-32)
// }
// console.log(tocelius(110))
// why functions?

// with fn you can reuse code
// you can write code that can be used many times
// you can use the same code with different argument


// A function may return or not a value

// Types of functions

// 1. function declarations


// square(4)


// function square(x){
//     console.log(x*x)
// }

// 2. function expression

// const square =function(x){
//     console.log(x*x)
// }
// square(2)

// 3.Named function expression
// const square =function sakshimam(x){
//     console.log(x*x)
// }
// square(2)

// named fn expression can be useful for debugging as the function name will apper in the callstack.

// 4.Anonymous function


// document.getElementById("abc ").onclick=
// function(){
// console.log("happy learning")
// }

// 5.IIFE (immediately invoked function expression)
// (function(x){
// console.log(x)
// }(4))

// 6 arrow function expression
//  const square=(x)=>{
//     return x*x
//  }
 
//  7.concise arrow function expression
// const suuare=(x)=>x*x
  
function sumrange(init,final){
    for( var i=init;i<final;i++)
        init=init+i
    
    return init
}
console.log(sumrange(50,100))
