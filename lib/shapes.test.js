const {Circle, Square, Triangle} = require("./shapes")

describe("Circle",() =>{
    test("render pink circle",()=>{
        const shape=new Circle()
        const expectedShape=`<circle cx="150" cy="100" r="80" fill="pink"/>` 
        shape.setShapeColor("pink")
        expect(shape.renderShape()).toEqual(expectedShape)
    })
} )

describe("Square",() =>{
    test("render pink square",()=>{
        const shape=new Square()
        const expectedShape=`<rect x="50" y="50" fill="pink"/>` 
        shape.setShapeColor("pink")
        expect(shape.renderShape()).toEqual(expectedShape)
    })
} )

describe("Triangle",() =>{
    test("render pink triangle",()=>{
        const shape=new Triangle()
        const expectedShape=`<polygon points= "50,10, 10,90 90,90" fill="pink"/>` 
        shape.setShapeColor("pink")
        expect(shape.renderShape()).toEqual(expectedShape)
    })
} )