import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";
import { riple } from "../../library/riple";
import { transform } from "../../library/transform";

const boxClip = new HTMLClip({
  html,
  css,
  selector: "#box-root",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    boxColor: "@expression(initParams.boxColor)",
    boxNumber: "@expression(initParams.boxNumber)",
    radius: "@expression(initParams.radius)",
  },
});

boxClip.addIncident(
  riple(5, 5, 2, 2, 0, 200, { transform: { scale: 0.8 } }, ".box"),
  900
);

boxClip.addIncident(riple(5, 5, 5, 5, 0, 500, { opacity: 0 }, ".box"), 1250);
boxClip.addIncident(riple(5, 5, 2, 2, 100, 900, { opacity: 1 }, ".box"), 1900);
boxClip.addIncident(
  transform(
    { transform: { rotate: "45deg" } },
    ".container",
    500,
    "easeInOutQuint"
  ),
  3000
);

boxClip.addIncident(
  transform({ borderRadius: "0%" }, ".box", 500, "easeInOutQuint"),
  3500
);

boxClip.addIncident(
  transform(
    { transform: { rotate: "0deg" } },
    ".container",
    500,
    "easeInOutQuint"
  ),
  4000
);

boxClip.addIncident(
  transform(
    { transform: { scale: 0.5 } },
    ".box",
    "@stagger(100, 500)",
    "easeInOutQuint"
  ),
  4500
);
boxClip.addIncident(
  transform(
    { transform: { scale: 1 } },
    ".box",
    "@stagger(100, 500)",
    "easeInOutQuint"
  ),
  5000
);

boxClip.addIncident(
  riple(5, 5, 10, 10, 0, 200, { transform: { rotateX: "90deg" } }, ".box"),
  5500
);

boxClip.addIncident(
  riple(
    5,
    5,
    10,
    10,
    0,
    200,
    { transform: { rotateX: "0deg", rotateY: "180deg" } },
    ".box"
  ),
  6000
);

boxClip.addIncident(
  riple(5, 5, 10, 10, 0, 200, { transform: { rotate: "45deg" } }, ".box"),
  6500
);

boxClip.addIncident(
  riple(5, 5, 10, 10, 0, 200, { transform: { scale: 0.5 } }, ".box"),
  7000
);

boxClip.addIncident(
  riple(5, 5, 5, 5, 0, 200, { borderRadius: "100%" }, ".box"),
  7500
);

boxClip.addIncident(riple(5, 5, 5, 5, 0, 200, { opacity: 0 }, ".box"), 8000);

export default boxClip;
