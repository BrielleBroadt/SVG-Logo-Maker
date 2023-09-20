// // Import the SVG class
const SVG = require('./svg.js');

test("renders 300, 200 SVG", ()=> {
const svg = new SVG()
const expectedSVG = `<svg version="1.1" width="400" height="300" xmlns="http://www.w3.org/2000/svg"></svg>`
expect(svg.renderSVG()).toEqual(expectedSVG)
})
