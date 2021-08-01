/*
    Class -> object



    Instance Properties: what they have
    -   name:
    -   age:
    -   address:



    Instance Method: what they do
    -   run()
    -   talk()
    -   jump()

*/

// Khoi tao class 

// class Rectangle {
//     // Setup: Ham khoi tao
//     constructor(_width, _height, _color) {
//         this.width = _width
//         this.height = _height
//         this.color = _color
//     }

//     getArea() {
//         return this.width * this.height
//     }

//     printDesciption() {
//         console.log(`I am Rectangle of ${this.width} x ${this.height} and i am ${this.color}`);
//     }
// }

// let myRectangle1 = new Rectangle(10, 10, "red");
// let myRectangle2 = new Rectangle(10, 5, "blue");
// console.log(myRectangle2);


/////////// getter and Setter in classes

// class Square {
//     constructor(_width) {
//         this.width = _width
//         this.height = _width
//     }

//     // su dung getter
//     get area() {
//         return this.width * this.height;
//     }

//     set area(area) { // dat lai gia tri cho ....
//         this.width = Math.sqrt(area);
//         this.height = this.width
//     }

// }

// // let square1 = new Square(4);// truyen do dai canh
// // console.log(square1.area);

// let square2 = new Square();
// square2.area = 25;
// console.log("chieu rong hinh vuong la:", square2.width); // 5


// Static Method
// class Square {
//     constructor(_width) {
//         this.width = _width
//         this.height = _width
//     }


//     static equals(a, b) { // a,b la 2 hinh vuong khac nhau
//         return a.width * a.height === b.width * b.height
//     }


//     static isValidDimensions(width, height) {
//         // kiem tra xem co phai la hinh vuong hay khong
//         return width === height
//     }
// }

// let square1 = new Square(10)
// let square2 = new Square(10)

// console.log(Square.equals(square1, square2));
// console.log(Square.isValidDimensions(myRectangle1.width, myRectangle1.height));


////////////////////// Inheritance & Extend
// Parent and Child 

// class Person {
//     constructor(_name, _age) {
//         this.name = _name
//         this.age = _age

//     }

//     describe() {
//         console.log(`I am ${this.name} and I am ${this.age} years old`);
//     }
// }

// class Programmer extends Person {
//     constructor(_name, _age, _yearsOfExperience) {
//         super(_name, _age);

//         // custom behavior
//         this.yearsOfExperience = _yearsOfExperience
//     }


//     code() {
//         console.log(`${this.name} is coding`);
//     }
// }

// let person1 = new Person("Dang", 16);
// let programmer1 = new Programmer("Hieu", 24, 2);

// // console.log(person1);
// // console.log(programmer1);

// // programmer1.describe();


// const programmers = [
//     new Programmer("Dang", 16, 0.5),
//     new Programmer("Hieu", 24, 2),
//     new Programmer("Jeff", 29, 7),
//     new Programmer("Bon", 29, 7),
//     new Programmer("Per",35, 15),
// ]


// function developSoftware(programmers){

//     for( let programmer of programmers){
//         programmer.code()
//     }
// }

// developSoftware(programmers);

