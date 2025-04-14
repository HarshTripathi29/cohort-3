"use strict";
let user = {
    name: "harsh",
    age: 24,
    address: {
        city: "Varanasi",
        country: "India",
        pincode: 231217,
    },
};
function isLegal(age) {
    if (age > 18) {
        return true;
    }
    return false;
}
const ageTest = isLegal(user.age);
if (ageTest) {
    console.log("legal user");
}
else {
    console.log("illegal user");
}
