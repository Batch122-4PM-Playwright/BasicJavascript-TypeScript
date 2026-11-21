
interface  kingdata                 
{
    kname : string,
    kage : number,
    kaddress : string
}

interface  queendata                 
{
    qname : string,
    qage : number,
    qaddress : string
}

let king : kingdata =
{
    kname : "Robert",
    kage : 27,
    kaddress : "UK"
}

let queen : queendata =
{
    qname  : "Elaine",
    qage : 22,
    qaddress : 'USA'
}

let kingqueen = {...king, ...queen}

console.log(kingqueen)
