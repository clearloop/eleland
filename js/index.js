import Shape from "./shape.js";

/// Eleland citizens transforming
/// + per BLOCK: level 0
/// + per EPOCH: level 1
/// + per ERA:   level 2
const BLOCK = 60 * 60 * 1000;
const EPOCH = 24 * BLOCK;
const ERA = 7 * EPOCH;

// Main function
(function(){
    const SIZE = 300;
    const artboard = d3.select("#land");

    Shape.render(artboard, SIZE);
    Shape.render(artboard, SIZE);
    Shape.render(artboard, SIZE);
    Shape.render(artboard, SIZE);
})();
