/**
 * Genesis
 *
 * The prototype of eleland citizen
 */
class Genesis {
    constructor() {
        // Citizen border
        this.border = {
            width: "1px",
            color: "transparent",
            style: "solid",
        };

        // Citizen Style
        this.style = {
            color: "white",
            transparent: 1,
        };

        // Citizen Size
        this.size = 1;

        // Animate trace
        this.animate = {
            trace: {
                x: 1,
                y: 1,
                z: 1,
            },
            speed: 1,
        };

        // Citizen Position
        this.position = {
            x: 0,
            y: 0,
            z: 0,
        };
    }

    /**
     * Render element to html element
     *
     * @returns {HTMLElement} element
     */
    render() {}
}

export default Genesis;
