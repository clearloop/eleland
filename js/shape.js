function rand(limit) {
    const r = Math.random();
    if (r === 0) {
        return rand(limit);
    }

    return Math.floor(r * limit);
}

function color(opacity) {
    if (opacity === undefined) {
        opacity = 1;
    }

    return `rgba(${rand(255)}, ${rand(255)}, ${rand(255)}, ${opacity})`;
}

function animate(target, rx, ry) {
    target.append("animate")
        .attr("attributeName", "rx")
        .attr("values", `${rx};${rx / 2};${rx}`)
        .attr("dur", "10s")
        .attr("repeatCount","indefinite");

    target.append("animate")
        .attr("attributeName", "ry")
        .attr("values", `${ry};${ry / 2};${ry}`)
        .attr("dur", "5s")
        .attr("repeatCount","indefinite");
}

function gradient(target) {
    const rotate = rand(100);
    const gradient = rand(2) === 1? "linearGradient": "radialGradient";
    const stops = ["5%", "20%", "45%", "75%", "95%"]

    const lg = target
          .append("defs")
          .append(gradient)
          .attr("gradientTransform", `rotate(${rotate})`)
          .attr("id", "s0");

    for (let i = 1; i<stops.length; i++) {
        lg.append("stop")
            .attr("offset", `${stops[rand(stops.length)]}`)
            .attr("stop-color", color());
     }
}

function render(target, size) {
    const applyGradient = true;
    const applyAnimate = true;
    const cx = size / 2;
    const cy = size /2;
    const rx = 50 + rand(rand(size / 8));
    const ry = 50 + rand(size / 8);

    // Apply grandient
    if (applyGradient) {
        gradient(target);
    }

    // Render shape
    const shape = target
          .append("ellipse")
          .attr("cx", cx)
          .attr("cy", cy)
          .attr("rx", rx)
          .attr("ry", ry)
          .attr("fill", `url(#s0)`);

    // Render Animate
    if (applyAnimate) {
        animate(shape, rx, ry);
    }
}

export default {
    render,
}
