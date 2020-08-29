export default class Util {
    static Rand(limit) {
        const r = Math.random();
        if (r === 0) {
            return this.rand(limit);
        }

        return Math.floor(r * limit);
    }

    static Color(opacity) {
        if (opacity === undefined) {
            opacity = 1;
        }

        const [
            r, g, b, a,
        ] = [
            Util.Rand(255),
            Util.Rand(255),
            Util.Rand(255),
            Math.random().toFixed(1)
        ];

        return `rgba(${r}, ${g}, ${b}, ${a})`;
    }
}
