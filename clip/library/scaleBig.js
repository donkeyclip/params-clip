import { CSSEffect, Combo } from "@donkeyclip/motorcortex";
export const scaleBig = (selector, duration, easing = "linear") =>
  new Combo(
    {
      incidents: [
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              transform: {
                scale: 1,
              },
            },
          },
          props: {
            duration: 900,
            easing: "easeInOutQuint",
          },
          position: 0,
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              marginLeft: "20px",
              marginRight: "20px",
            },
          },
          props: {
            duration: 1550,
            selector: ".letter",
          },
          position: 450,

          // easing: "easeInOutQuint",
        },
        {
          incidentClass: CSSEffect,
          attrs: {
            animatedAttrs: {
              transform: {
                scale: 0,
              },
            },
          },
          props: {
            duration: 1,
          },
          position: 1800,
        },
      ],
    },
    {
      selector: ".text",
      delay: "@stagger(0,7200)",
    }
  );
