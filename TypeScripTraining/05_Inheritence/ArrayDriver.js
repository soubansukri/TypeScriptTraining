"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Shape_1 = require("./Shape");
const Circle_1 = require("./Circle");
const Rectangle_1 = require("./Rectangle");
let myShape = new Shape_1.Shape(12, 2);
let myCircle = new Circle_1.Circle(2, 2, 4);
let myRectangle = new Rectangle_1.Rectangle(1, 2, 3, 4);
// Creating an empty array of type Shape
let shapeArray = [];
// add the shapes to the array
shapeArray.push(myShape);
shapeArray.push(myCircle);
shapeArray.push(myRectangle);
for (let tempShape of shapeArray) {
    console.log(tempShape.getInfo());
}
