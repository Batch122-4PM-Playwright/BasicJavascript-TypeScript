

function userdata(username : string, aadhar ? : number) : void
{
    if(aadhar == undefined)
    {
        console.log("User is Creating a Gmail account with username as : " +username)
    }
    else
    {
        console.log("User is in the Bank and Creating user id as : " +username)
        console.log("The Addhar Number is : " +aadhar)
    }
    
}

userdata("Raghu1234");
console.log("---------------------------------------------")
userdata("Sridhar67LIKE", 546235584346);