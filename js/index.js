import Shape from "./shape.js";
import Frame from "./frame.js";

// Main function
(function(){
    const cols = window.innerHeight > window.innerWidth? 5: 9;
    const rows = window.innerHeight > window.innerWidth
          ?window.innerWidth / (window.innerHeight / cols + 1)
          :window.innerHeight / (window.innerWidth / cols + 1) - 1;

    const land = Frame.Block(cols);
    for (let i=0; i< cols * rows; i++) {
        const id = "block-" + i;
        land.append("svg").attr("id", id);
        for (let p = 0; p<3; p++) {
            const conf = Shape.NewConfig(`#${id}`);
            conf.size = window.innerWidth / (cols + 1);
            conf.margin = 25;
            new Shape(conf).Render();
        }
    }
})();
