import Shape from "../js/shape.js";

// Main function
(function(){
    const land = d3.select("body")
          .append("svg")
          .attr("id", "land");

    const conf = Shape.NewConfig("#land");
    new Shape(conf).Render();
})();
