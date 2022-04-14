import { CSSEffect } from "@donkeyclip/motorcortex";
export const riple = (
  rows,
  columns,
  startRow,
  startCol,
  minDelay,
  maxDelay,
  attrs,
  selector,
  easing = "linear"
) => {
  const maxY =
    (startCol + 1) * 2 <= columns ? columns - 1 - startCol : startCol;
  const maxX = (startRow + 1) * 2 <= rows ? rows - 1 - startRow : startRow;
  const maxDistance = Math.pow(maxX, 2) + Math.pow(maxY, 2);
  return new CSSEffect(
    {
      animatedAttrs: { ...attrs },
    },
    {
      selector,
      duration: 125,
      easing,
      delay: `@expression(${minDelay}+(pow(floor(index/${columns})-${startRow},2)+pow(index % ${columns}-${startCol},2))*${
        maxDelay - minDelay
      }/${maxDistance})`,
    }
  );
};
