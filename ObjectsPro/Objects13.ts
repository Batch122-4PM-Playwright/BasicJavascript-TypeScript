
interface  kingdata                 
{
    name : string,
    age : number,
    address : string
}

interface  queendata                 
{
    name : string,
    age : number,
    address : string
}

let king : kingdata =
{
    name : "Robert",
    age : 27,
    address : "UK"
}

let queen : queendata =
{
    name  : "Elaine",
    age : 22,
    address : 'USA'
}

let kingqueen = {...king, ...queen}

console.log(kingqueen)
