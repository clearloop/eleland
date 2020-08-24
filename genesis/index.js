import Shape from "/js/shape.js";

// Main function
(function(){
    const SIZE = 300;
    const artboard = d3.select("#land");

    Shape.render(artboard, SIZE);
})();
