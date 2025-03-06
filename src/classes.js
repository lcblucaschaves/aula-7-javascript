class Rectangle {
    #width; //# to private atributes
    #height;

    constructor (width, height) {
        this.#width = width;
        this.#height = height;
    }

    //private method with #
    #calculatePerimeter() {
        return 2 * (this.#width + this.#height);
    }

    //public method
    getPerimeter() {
        return this.#calculatePerimeter();
    }

    //string template
    getDimensions() {
        return `${this.#width} x ${this.#height}`;
    }

    //string
    getShapeName() {
        return "Rectangle";
    }

    //toString overdrive method
    toString() {
        return `${this.getShapeName()}: ${this.getDimensions()}`;
    }

    //getter
    get width() {
        return this.#width;
    }

    get height() {
        return this.#height;
    }

    //setter
    set width(width){
        if (width <= 0) {
            throw new error("Width must be positive");
        }
        this.#width = width;
    }

    set height(height){
        if (height <= 0) {
            throw new error("Height must be positive");
        }
        this.#height = height;
    }

    static createRandom(max = 10) {
        const sideA = Math.floor(Math.random() * max) + 1;
        const sideB = Math.floor(Math.random() * max) + 1;

        return new Rectangle(sideA, sideB);
    }
}

class Square extends Rectangle {
    constructor(side) {
        super(side, side);
    }

    //Overwrite
    getShapeName() {
        return "Square";
    }
}

const rect = new Rectangle (5, 6);

console.log(rect.getPerimeter());
console.log(rect.getDimensions());
console.log(`${rect}`);

rect.width = 10;

console.log(`${rect}`);
console.log(`${Rectangle.createRandom()}`);

const square = new Square(5);
console.log(`${square}`);