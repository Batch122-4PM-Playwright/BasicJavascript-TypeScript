
let mycar = 'I20'  //we have declared I20 to mycar

console.log(mycar)

mycar = 'Four Tyres'  //we have reassigned

console.log(mycar)

//let mycar = 10000  //we have redeclared  --> SyntaxError: Identifier 'mycar' has already been declared

{
    console.log(mycar) //we are accessing outside data , inside of the block
    let myCountry = 'India'
    console.log(myCountry)  //we are accessing inside data, inside of the block
}

console.log(myCountry) //we are accessing inside data, outside of the block  --> ReferenceError: myCountry is not defined
