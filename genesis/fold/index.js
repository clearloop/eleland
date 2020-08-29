import Shape from "../../js/shape.js";
import Frame from "../../js/frame.js";

// Main function
(function(){
    Frame.Center()
          .append("svg")
          .attr("id", "land");

    for (let i=0; i<4; i++) {
        new Shape(Shape.NewConfig("#land")).Render();
    }
})();
