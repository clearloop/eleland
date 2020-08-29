export default class Frame {
    static Center() {
        return d3.select("body")
            .style("background", "black")
            .style("display", "flex")
            .style("align-items", "center")
            .style("justify-content", "center");
    }

    static Block(columns) {
        return d3.select("body")
            .style("background", "black")
            .style("margin", "0 auto")
            .style("padding", window.innerWidth / (columns + 1) / 2);
    }
}
