//implementer for bridge pattern
class Color {
    constructor(color) {
        this.color = color;
    }
}

//concrete implementation 1 for bridge pattern
class RedColor extends Color {
    constructor() {
        super("red");
    }
}

//concrete implementation 2 for bridge pattern
class BlueColor extends Color {
    constructor() {
        super("blue");
    }
}

//abstraction in bridge pattern
class Shape {
    constructor(color) {
        this.color = color;
    }

    draw() {
        console.log("Drawing a shape with " + this.color.color + " color.");
    }
}

//refined abstraction 1 in bridge pattern
class Circle extends Shape {
    constructor(color) {
        super(color);
    }

    draw() {
        console.log("Drawing a circle with " + this.color.color + " color.");
    }
}

//refined abstraction 2 in bridge pattern
class Square extends Shape {
    constructor(color) {
        super(color);
    }

    draw() {
        console.log("Drawing a square with " + this.color.color + " color.");
    }
}
const redCircle = new Circle(new RedColor());
const blueSquare = new Square(new BlueColor());

redCircle.draw();   //Output: Drawing a circle with red color.
blueSquare.draw();  //Output: Drawing a square with blue color.


//the Color class can be considered the Bridge interface.
//It defines the methods that the Shape class can use to delegate the
//implementation details to the concrete color classes (RedColor and BlueColor).
//The Shape class holds a reference to a Color object and delegates the implementation of the color to it.

//the Shape class represents the Abstraction, the Color class represents the Implementation, and the Color subclasses (RedColor and BlueColor) represent the Implementor classes.
//The draw() method in Shape class delegates the implementation details to the Color object, which provides the actual implementation of the color.