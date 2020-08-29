import Util from "./util.js";

class ShapeConfig {
    constructor(selector) {
        this.selector = selector;
        this.target = null;
        this.rotate = Util.Rand(100);
        this.size = 300;
        this.style = Util.Rand(2) === 1? "rect": "ellipse";
        this.gradient = {
            enable: true,
            rotate: Util.Rand(100),
            style: Util.Rand(2) === 1? "linearGradient": "radialGradient",
            stops: [{
                value: "5%",
                color: Util.Color(),
            }, {
                value: "20%",
                color: Util.Color(),
            },{
                value: "45%",
                color: Util.Color(),
            }, {
                value: "75%",
                color: Util.Color(),
            }, {
                value: "100%",
                color: Util.Color(),
            }],
        };
        this.animate = {
            enable: true,
            rx: 5,
            ry: 10,
        };
        this.rx = 50 + Util.Rand(this.size / 8);
        this.ry = 50 + Util.Rand(this.size / 8);
    }
}

class Shape {
    static NewConfig(target) {
        return new ShapeConfig(target);
    }

    constructor(conf) {
        conf.target = d3
            .select(conf.selector)
            .style("height", conf.size)
            .style("width", conf.size)
            .append("svg");
        this.conf = conf;
    }

    Render() {
        const conf = this.conf;

        // Apply grandient
        if (conf.gradient.enable) {
            this.gradient();
        }

        // Render shape
        conf.target = conf.target
            .append(conf.style)
            .attr("fill", `url(${conf.selector}-gradient)`);

        if (conf.style === "rect") {
            conf.target
                .attr("rx", conf.rx)
                .attr("ry", conf.ry)
                .attr("width", conf.size)
                .attr("height", conf.size);
        } else {
            conf.target
                .attr("cx", conf.size / 2)
                .attr("cy", conf.size / 2)
                .attr("rx", conf.rx)
                .attr("ry", conf.ry);
        }

        // Render Animate
        if (conf.animate.enable) {
            this.animate();
        }
    }

    // Apply gradient
    gradient() {
        const conf = this.conf;
        const lg = conf.target
              .append("defs")
              .append(conf.gradient.style)
              .attr("gradientTransform", `rotate(${conf.rotate})`)
              .attr("id", (`${conf.selector}-gradient`).slice(1));

        const g = conf.gradient;
        for (let i = 1; i<g.stops.length; i++) {
            lg.append("stop")
                .attr("offset", `${g.stops[i].value}`)
                .attr("stop-color", g.stops[i].color);
        }
    }

    // Apply animate
    animate() {
        const conf = this.conf;
        const animate = conf.animate;
        conf.target.append("animate")
            .attr("attributeName", "rx")
            .attr("dur", `${animate.rx}s`)
            .attr("repeatCount","indefinite").attr(
                "values",
                conf.style === "rect"
                    ?`${conf.rx};0;${conf.rx}`
                    :`${conf.rx};${conf.size/2};${conf.rx}`
            );

        conf.target.append("animate")
            .attr("attributeName", "ry")
            .attr("dur", `${animate.ry}s`)
            .attr("repeatCount","indefinite").attr(
                "values",
                conf.style === "rect"
                    ?`${conf.ry};0;${conf.ry}`
                    :`${conf.ry};${conf.size/2};${conf.ry}`
            );
    }
}

export default Shape;
