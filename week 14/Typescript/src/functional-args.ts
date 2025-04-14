function delayedCall(fn: (a: string) => void) {
    setTimeout(() => fn("harsh"), 1000);
  }
  
function log(a:string){
    console.log("hello "+a);
}

delayedCall(log);