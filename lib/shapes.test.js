// variable for shapes
const {Circle, Square, Triangle} = require("./shapes")
// jest test for circle
describe("Circle",() =>{
    test("render pink circle",()=>{
        const shape=new Circle()
        const expectedShape=`<circle cx="150" cy="100" r="80" fill="pink"/>` 
        shape.setShapeColor("pink")
        expect(shape.renderShape()).toEqual(expectedShape)
    })
} )
// jest test for square
describe("Square",() =>{
    test("render pink square",()=>{
        const shape=new Square()
        const expectedShape=`<rect x="50" y="50" width="200" height="200" fill="pink"/>` 
        shape.setShapeColor("pink")
        expect(shape.renderShape()).toEqual(expectedShape)
    })
} )
// jest test for triangle
describe("Triangle",() =>{
    test("render pink triangle",()=>{
        const shape=new Triangle()
        const expectedShape=`<polygon points="150,18 244,182 56,182" fill="pink"/>` 
        shape.setShapeColor("pink")
        expect(shape.renderShape()).toEqual(expectedShape)
    })
} )