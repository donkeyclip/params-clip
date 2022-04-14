import { HTMLClip } from "@donkeyclip/motorcortex";
import html from "./clip.html";
import css from "!!raw-loader!./clip.css";
import initParams from "./initParams";
import scene1 from "./scenes/scene-1";
import boxClip from "./scenes/scene-2";

export const clip = new HTMLClip({
  html,
  css,
  host: document.getElementById("clip"),
  initParams: initParams[0].value,
  fonts: [
    {
      type: "google-font",
      src: "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@800&display=swap",
    },
  ],
  containerParams: {
    width: "800px",
    height: "450px",
  },
});

clip.addIncident(scene1, 0);
clip.addIncident(boxClip, 0);
