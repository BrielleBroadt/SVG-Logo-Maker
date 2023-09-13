// varriables 
const fs = require('fs');
const SVG = require('./lib/svg.js')
const inquirer = require("inquirer")
const {Circle, Square, Triangle} = require("./lib/shapes.js")




function makeShape (){
    inquirer.prompt([
        {
            type: "input",
            name: "logotext",
            message: "Please enter text for logo. (Text should be up to be 3 characters)",
        },
        {
            type: "input",
            name: "textcolor",
            message: "Please enter a text color (Enter keyword or a hexadecimal number):",
        },
        {

            type: "input",
            name: "shapecolor",
            message: "Please enter shape color (Enter keyword (or a hexadecimal number):",
        },
        {
            type: "list",
            name: "shape",
            message: "Please choose which shape you would like?",
            choices: ["Circle", "Square", "Triangle"],
        }, 
    ]).then((response)=>{
        let SVGlogo;
        switch(response.shape){
            case "Circle":
                SVGlogo = new Circle()
                break;
                case "Square":
                    SVGlogo = new Square()
                    break;
                    case "Triangle":
                        SVGlogo = new Triangle()
                        break;
        }
        SVGlogo.setShapeColor(response.shapecolor)
        const newLogo= new SVG()
        newLogo.setShape(SVGlogo)
        newLogo.setText(response.logotext, response.textcolor)
        if (response.logotext.length >3){
            console.log("only 3 characters allowed")
            makeShape()
        }
        makeSVG("mySVG.svg", newLogo.renderSVG())
    })
}
function makeSVG(filename, response){
    fs.writeFile(filename, response, (err) =>{
        err? console.log (err):console.log("look it's an SVG")
    })
}
makeShape()