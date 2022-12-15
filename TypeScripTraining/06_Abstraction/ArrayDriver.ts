import { Shape } from "./Shape";
import { Circle } from "./Circle";
import { Rectangle } from "./Rectangle";

let myCircle=new Circle(2,2,4);
let myRectangle=new Rectangle(1,2,3,4);

// Creating an empty array of type Shape

let shapeArray:Shape[]=[];

// add the shapes to the array

shapeArray.push(myCircle);
shapeArray.push(myRectangle);

for(let tempShape of shapeArray){
    console.log(tempShape.getInfo());
    console.log(tempShape.calculateArea());
    console.log();
}