// varriables 
const fs = require('fs');
const SVG = require('svg.js')

// numer of characters for choice
function isValidText(text) {
    return text.length <= 3;
}

// function for color prompt (user choosing color)
function promptColor() {
    readline.question(prompt, (color) => {
        if (isValidColor(color)) {
            resolve(color);
            readline.close();
        } else {
            console.log('Color is invalid, please selcect a valid color or hexadecimal'); 
            promptColor()
        }
    });
}
promptColor();

// function to get shape input
function getShapeInput() {
    return new Promise((resolve) => {
        const readline = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
        
        function promptShape() {
            console.log('Choose a shape:');
            console.log('1. Circle');
            console.log('2. Triangle');
            console.log('3. Square');
            
            readline.question('Enter the number corresponding to your chosen shape: ', (shapeChoice) => {
                if (['1', '2', '3'].includes(shapeChoice)) {
                    resolve(shapeChoice);
                    readline.close();
                } else {
                    console.log('Invalid shape choice. Please enter a valid number (1, 2, or 3).');
                    promptShape();
                }
            });
        }
        
        promptShape();
    });
}