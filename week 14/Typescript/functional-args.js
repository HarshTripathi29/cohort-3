"use strict";
function delayedCall(fn) {
    setTimeout(fn, 1000);
}
function log() {
    console.log("hello harsh");
}
delayedCall(log);
