const mycar = 100  //we are declared the 100 to mycar

console.log(mycar)

//mycar = 'RT56WQT' //we have reassigned --> TypeError: Assignment to constant variable.

//const mycar = 'RT56WQT' //we have redeclared  --> SyntaxError: Identifier 'mycar' has already been declared

{
    console.log(mycar) //we are accessing outside data, inside of the block
    const season = "Winter"
    console.log(season)  // we are accessing inside data, inside of the block
}

console.log(season) //we are accessing inside data, outside of the block  --> ReferenceError: season is not defined
