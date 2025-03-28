function random(resolve){
    // call resolve after 3 seconds => promise would be completed after 3 secs => then would br called 
    setTimeout(resolve, 3000);
}

// instance of the promise class that is pending right now
let p=new Promise(random); // it is supposed to return something eventually, currently it is pending but would give something eventually
console.log(p);

// so when it completes eventually 
// then do something 

// the question is when did this promise eventually complete ? 
// => given as the first argument => whenever this function is called => the promise is completed => call the then().


function callback(){
    // would be logged after 3 secs
    console.log("promise succeded");
}

p.then(callback);