function playerName(pname : string) : void
{
    console.log(pname)  //printing string value
}

playerName("Dravid")

//function name ---> playerName
//parameter is PNAME with datatype as string
//printing parameter PNAME

function playerPlay(game : (name : string) => void ) : void
{
    game("Cricket") //calling anonomous function
}
playerPlay(playerName)
//function name ---> playerPlay
//parameter is NAME with datatype as function
//printing parameter PNAME
