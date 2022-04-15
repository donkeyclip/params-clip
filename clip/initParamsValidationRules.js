export default {
  color: {
    label: "Text Color",
    type: "color",
    optional: false,
    default: "white",
  },
  boxNumber: {
    label: "Box Number",
    type: "number",
    default: 25,
    optional: false,
  },
  backgrounColor: {
    label: "Background Color",
    type: "color",
    default: "#18191D",
    optional: false,
  },
  boxColor: {
    label: "Box Color",
    type: "color",
    default: "#18191D",
    optional: false,
  },
  radius: {
    label: "Box Radius",
    type: "measurement",
    units: ["%"],
    optional: false,
    default: "10%",
  },
  text: {
    label: "Text Array",
    type: "array",
    items: "string",
    optional: false,
    default: ["express", "your", "creativity", "with", "code"],
  },
};

