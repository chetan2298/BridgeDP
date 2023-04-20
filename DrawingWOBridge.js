//Circle class takes a COLOR parameter in their constructor, and has its own draw() method that outputs a message indicating the shape and color being drawn.
class Circle {
    constructor(color) {
        this.color = color;
    }

    draw() {
        console.log("Drawing a circle with " + this.color + " color.");
    }
}
//Square class takes a COLOR parameter in its constructor
class Square {
    constructor(color) {
        this.color = color;
    }
    //Square has its own draw() method that outputs a message indicating the shape and color being drawn.
    draw() {
        console.log("Drawing a square with " + this.color + " color.");
    }
}

//INSTANTIATING CIRCLE AND SQUARE CLASS with their own draw() methods
const myCircle = new Circle("red");
myCircle.draw(); //Output: Drawing a circle with red color.

const mySquare = new Square("blue");
mySquare.draw(); //Output: Drawing a square with blue color.


//as we add more shapes and colors, this code can quickly become complex and difficult to maintain.
//The Bridge pattern can help to address this issue by separating the implementation of color from the abstraction of shape,
//allowing for greater flexibility and adaptability to change.