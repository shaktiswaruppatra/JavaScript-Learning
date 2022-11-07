/* 7 Different of Primitive data types.
-> NN BB SS U
    N- Number
    N- Null
    B- Boolean
    B- Bigint
    S- String
    S- Symbol
    U- Undefined

*/

let a = null;               //null
let b = 123;                //number
let c = true;               // boolean, can also be false
let d = BigInt("123") + BigInt("7") //bigint
let e = "shakti"            //string
let f = Symbol("This text is representing the symbol") //symbol
let g                       //undefined
console.log(a, b, c , d, e, f, g)
console.log(typeof b)

const item = {
    "Harry": true,
    "Shubh": false,
    "percentage": 67,
    "Rohan": undefined
  }
  console.log(item)             //prints the whole object
  console.log(item["Harry"])    //prints true (the value of Harry)