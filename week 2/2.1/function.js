// synchronous js code : executed in the order it is written : line by line
// function to add 2 numbers 

function sum(a,b){
    return a+b;
}

let ans = sum(20, 30);
console.log(ans);

let ans1 = sum(20, "30");
console.log(ans1);

// function to add first n natural numbers

function sumn(n){
    let sum=0;
    for(let i=0; i<=n; i++){
        sum = sum+i;
    }
    return sum;
}

console.log(sumn(5));