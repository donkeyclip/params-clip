import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";
import { riple } from "../../library/riple";

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

export default boxClip;
