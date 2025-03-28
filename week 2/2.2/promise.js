// the promise class gives u a promise that i will return you something in the future.

// A promise in Javascript is an object that represents the eventual completoin (or failure) of an 
// asynchronous operation and its resulting value

function logName(){
    console.log("Harsh");
}

setTimeout(logName, 3000);

// returns an object of the promsie class
function setTimeoutPromisified(ms){
    let p = new Promise(resolve=>setTimeout(resolve, ms));
    return p;
    // object of the promsie class
}


function callback(){
    console.log("3 seconds have passsed ");
}