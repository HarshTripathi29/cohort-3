"use strict";
function delayedCall(fn) {
    setTimeout(() => fn("harsh"), 1000);
}
function log(a) {
    console.log("hello " + a);
}
delayedCall(log);
