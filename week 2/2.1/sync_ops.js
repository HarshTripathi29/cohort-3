const fs = require("fs");

//takes the file name , encoding and the callback function  
const content1 = fs.readFileSync("a.txt", "utf-8");
console.log(content1);

const content2 = fs.readFileSync("b.txt", "utf-8");
console.log(content2);
