interface Address{
    city : string;
    country : string;
    pincode : number;
}

interface User {
    name:string;
    age:number;
    // optional fields 
    address?:Address
}

interface Office{
    address:Address
}

let user:User={
    name : "harsh",
    age: 24,
    address : {
        city : "Varanasi",
        country : "India",
        pincode : 231217,
    },
}

function isLegal(age:number):boolean{
    if(age>18){
        return true;
    }
    return false;
}

const ageTest = isLegal(user.age);

if(ageTest){
    console.log("legal user");
}
else {
    console.log("illegal user");
}