import Shape from "./shape.js";

// Main function
(function(){
    for (let i=0; i<4; i++) {
        const conf = Shape.NewConfig("#land");
        new Shape(conf).Render();
    }
})();
