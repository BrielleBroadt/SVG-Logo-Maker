// Import the SVG class
const SVG = require('./svg.js');
const Circle = require('./circle.js');

// Mock the Circle class
jest.mock('./Circle', () => {
    return jest.fn().mockImplementation(() => {
        return {
            setColor: jest.fn(),
            renderShape: jest.fn(),
        };
    });
});

describe('SVG Class Tests', () => {
    let svg;

    beforeEach(() => {
        // Create a new SVG instance before each test
        svg = new SVG();
    });

    test('SVG class should be initialized with empty text and shape elements', () => {
        expect(svg.textel).toBe('');
        expect(svg.shapeel).toBe('');
    });

    test('Setting text should update the text element', () => {
        svg.setText('Hello, SVG!', 'blue');
        expect(svg.textel).toBe('<text x="150" y="125" font-size="60" text-anchor="middle" fill="blue">Hello, SVG!</text>');
    });

    test('Setting a shape should update the shape element', () => {
        // Mock Circle class's renderShape method
        const mockRenderShape = jest.fn().mockReturnValue('<circle cx="50" cy="50" r="20" fill="red" />');
        Circle.prototype.renderShape = mockRenderShape;

        // Create a new Circle instance and set it as the shape
        const circle = new Circle();
        svg.setShape(circle);

        expect(svg.shapeel).toBe('<circle cx="50" cy="50" r="20" fill="red" />')
    })})
