// class for shape setting color
class Shape {
    constructor() {
        this.color ="";
    }
    setShapeColor(color){
        this.color=color;
    }
}
// class for triangle with render function
class Triangle extends Shape {
  renderShape(){
    return `<polygon points= "50,10, 10,90 90,90" fill="${this.color}"/>`
  }

}
// class for square with render function
class Square extends Shape {
    renderShape(){
        return `<rect x="50" y="50" fill="${this.color}"/>`
      }
}
// class for circle with render function
class Circle extends Shape {
    renderShape(){
        return `<circle cx="150" cy="100" r="80" fill="${this.color}"/>`
      }
}
module.exports={Circle, Square, Triangle}