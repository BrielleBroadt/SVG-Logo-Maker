// test for circle shape connected to svg test
jest.mock('./circle.js', () => {
    return jest.fn().mockImplementation(() => {
        return {
            setColor: jest.fn(),
            renderShape: jest.fn(),
        };
    })});