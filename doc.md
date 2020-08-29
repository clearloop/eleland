## Shape

### Example

```js
import Shape from "shape.js";

const conf = Shape.NewConfig("#land");
new Shape(conf).Render();
```

### Config

```json
{
  "margin": 5,
  "selector": "#land",
  "rotate": 44,
  "size": 256.6666666666667,
  "style": "ellipse",
  "gradient": {
    "enable": true,
    "rotate": 15,
    "style": "radialGradient",
    "stops": [
      {
        "value": "5%",
        "color": "rgba(136, 201, 226, 0.1)"
      },
      {
        "value": "20%",
        "color": "rgba(127, 44, 171, 0.8)"
      },
      {
        "value": "45%",
        "color": "rgba(136, 14, 238, 0.1)"
      },
      {
        "value": "75%",
        "color": "rgba(33, 222, 70, 0.6)"
      },
      {
        "value": "100%",
        "color": "rgba(12, 134, 143, 0.8)"
      }
    ]
  },
  "animate": {
    "enable": true,
    "rx": 5,
    "ry": 10
  },
  "rx": 1,
  "ry": 28
}
```
