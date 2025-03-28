// const fs = require("fs");

// function print(err, data){
//     console.log(data);
// }

// const content1 = fs.readFile("a.txt", "utf-8", print);
// // console.log(content1);

// const content2 = fs.readFile("b.txt", "utf-8", print);
// // console.log(content2);


function timeout(){
    console.log("click the button ");
}

console.log("Hi");

// takes a callback function and the time after which it has to be called 
setTimeout(timeout, 1000);

console.log("welcome to loupe");

let c = 0;
// takes 3-4 secs
for(let i=0; i<100000000; i++){
    c=c+1;
}

console.log("expensive operation done ");