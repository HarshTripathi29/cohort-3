function delayedCall(fn:()=>void){
    setTimeout(fn, 1000);
}

function log(){
    console.log("hello harsh");
}

delayedCall(log);