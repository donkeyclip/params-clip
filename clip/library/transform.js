import { CSSEffect } from "@donkeyclip/motorcortex";
export const transform = (attrs, selector, duration, easing = "linear") => {
  return new CSSEffect(
    {
      animatedAttrs: { ...attrs },
    },
    {
      selector,
      duration,
      easing,
    }
  );
};
