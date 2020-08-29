import Shape from "../js/shape.js";
import Frame from "../js/frame.js";

// Main function
(function(){
    Frame.Center()
          .append("svg")
          .attr("id", "land");

    new Shape(Shape.NewConfig("#land")).Render();
})();
