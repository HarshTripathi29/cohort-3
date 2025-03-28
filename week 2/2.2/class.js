// the key point is that we can create a blueprint of real world unlile just key value pairs.
// define a class having a area and paint function. 

class Rectangle{
    constructor(width, height, color){
        this.width=width;
        this.height=height;
        this.color=color;
        // this provides access to the current object 
        // inside the constructor or inside any method this is equal to any object like rect. 

        // js dont have a destructor concept like c++.
        // it handles the garbage collectoin itself.
        // however we can call a destroy().

    }

    area(){
        // inside the constructor or inside any method this is equal to any object like rect. 
        const area = this.width*this.height;
        return area;
    }

    paint(){
       console.log("color is "+ this.color);
    }

}
// if i dont pass anything then also the code would run using undefined value for the arguments.
// java would give compile time error 
const rect = new Rectangle(2,4,"blue");
const area = rect.area();
rect.paint();
console.log("using the class way "+area);


// other way that is more common in js 
// no need of class 

const rect1 = {
    width : 2,
    height : 3,
    color : "red"
}

function area1(rect){
    return "using the other way "+rect.width*rect.height;
}

function paint1(rect){
    return "color is "+rect.color;
}

console.log(area1(rect1));
console.log(paint1(rect1));