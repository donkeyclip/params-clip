import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./index.html";
import css from "!!raw-loader!./index.css";
import { scaleBig } from "../../library/scaleBig";

const clip = new HTMLClip({
  html,
  css,
  selector: "#text-root",
  containerParams: {
    width: "800px",
    height: "450px",
  },
  initParams: {
    color: "@initParams.color",
    text: "@initParams.text",
  },
});

clip.addIncident(scaleBig(".container", 2000), 0);
export default clip;
