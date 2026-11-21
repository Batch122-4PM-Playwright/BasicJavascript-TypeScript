var mycar = "Brezza"  //here we are declared Brezza to mycar

console.log(mycar)

mycar = 2023  //we have reassigned

console.log(mycar)

var mycar = 'Red and Black'  //we have redeclared

console.log(mycar)

{
    console.log(mycar)  //we are accessing outside data,  inside of the block
    var myHobbies = 'Walking'
    console.log(myHobbies)  //we are accessing insidedata, inside of the block
}

console.log(myHobbies) //we are accessing inside data, outside of the block