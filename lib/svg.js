class SVG {
    constructor(){
        this.textel=""
        this.shapeel=""
    }
    renderSVG(){
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">${this.shapeel}${this.textel}</svg>`
    }
    setText(text, color) {
        this.textel=`<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
    }
    setShape(shape){
        this.shapeel=shape.renderShape()
    }
}
module.exports=SVG