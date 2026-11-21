
function railwayTicket(userid : string, userage : number , discount : string = "50% Concession") : void
{
    if(userage >= 60)
    {
        console.log("User will get " +discount)
    }
    else
    {
        console.log("Please pay FULL FARE")
    }
}

railwayTicket("Rockandroll", 72)
console.log("-%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%")
railwayTicket("RoseisRed", 32);


