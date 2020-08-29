import Shape from "../js/shape.js";
import Frame from "../js/frame.js";

// Main function
(function(){
    Frame.Center()
          .append("svg")
          .attr("id", "land");

    const conf = Shape.NewConfig("#land");
    new Shape(conf).Render();
})();
