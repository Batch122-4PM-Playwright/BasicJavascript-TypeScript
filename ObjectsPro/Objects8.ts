
interface  empdata                 //rough data
{
    empid : number,
    empname : string,
    empsalary : number,
    empage : number,
    stillWorking : boolean,
    empaddress : 
        {
            ehouseno : number,
            estreetname : string,
            elocation : string,
            estate : string,
            epincode : number
        }
}

let empinfo : empdata =         //created the fair data from rough
{
    empid : 20140,
    empname : 'Raghu',
    empsalary : 96453,
    empage : 35,
    stillWorking : true,
    empaddress :       //subobject
        {
            ehouseno : 34,
            estreetname : "Tilak Road -1",
            elocation : "Miyapur",
            estate : 'Telangana',
            epincode : 507334
        }
}

console.log(Object.values(empinfo))
