import Shape from "./shape.js";

// Main function
(function(){
    const land = d3.select("body")
          .append("svg")
          .attr("id", "land");

    for (let i=0; i<4; i++) {
        const conf = Shape.NewConfig("#land");
        new Shape(conf).Render();
    }
})();
