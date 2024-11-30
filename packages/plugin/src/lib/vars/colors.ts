import { Var } from "../vars";
import {
  amber,
  blue,
  cyan,
  emerald,
  fuchsia,
  gray,
  green,
  indigo,
  lime,
  neutral,
  orange,
  pink,
  purple,
  red,
  sky,
  slate,
  stone,
  teal,
  violet,
  yellow,
  zinc,
} from "./color-data";

const createColorScale = (
  space: string,
  map: Record<string, string[]>,
): Var[] => {
  const scale: Var[] = [];
  for (const color in map) {
    scale.push({
      name: `color/${space}/${color}`,
      resolvedType: "COLOR",
      description: `https://tailwindcss.com/docs/customizing-colors\n\nTailwind uses Oklch colors, which Figma's Plugin APIs don't support natively.\n\nThese are the RGB converted colors, you can see the the difference here: https://oklch.com/#${map[color][2]}\n\nOriginal: ${map[color][0]}\nConverted: ${map[color][1]}`,
      scopes: ["ALL_FILLS"],
      value: figma.util.rgb(map[color][1]),
    });
  }

  return scale;
};

const redScale = createColorScale("red", red);
const orangeScale = createColorScale("orange", orange);
const amberScale = createColorScale("amber", amber);
const yellowScale = createColorScale("yellow", yellow);
const limeScale = createColorScale("lime", lime);
const greenScale = createColorScale("green", green);
const emeraldScale = createColorScale("emerald", emerald);
const tealScale = createColorScale("teal", teal);
const cyanScale = createColorScale("cyan", cyan);
const skyScale = createColorScale("sky", sky);
const blueScale = createColorScale("blue", blue);
const indigoScale = createColorScale("indigo", indigo);
const violetScale = createColorScale("violet", violet);
const purpleScale = createColorScale("purple", purple);
const fuchsiaScale = createColorScale("fuchsia", fuchsia);
const pinkScale = createColorScale("pink", pink);
const roseScale = createColorScale("rose", sky);
const slateScale = createColorScale("slate", slate);
const grayScale = createColorScale("gray", gray);
const zincScale = createColorScale("zinc", zinc);
const neutralScale = createColorScale("neutral", neutral);
const stoneScale = createColorScale("stone", stone);

export const colors: Var[] = [
  ...redScale,
  ...orangeScale,
  ...amberScale,
  ...yellowScale,
  ...limeScale,
  ...greenScale,
  ...emeraldScale,
  ...tealScale,
  ...cyanScale,
  ...skyScale,
  ...blueScale,
  ...indigoScale,
  ...violetScale,
  ...purpleScale,
  ...fuchsiaScale,
  ...pinkScale,
  ...roseScale,
  ...slateScale,
  ...grayScale,
  ...zincScale,
  ...neutralScale,
  ...stoneScale,
  {
    name: `color/black`,
    resolvedType: "COLOR",
    description: `https://tailwindcss.com/docs/customizing-colors`,
    scopes: ["ALL_FILLS"],
    value: figma.util.rgb("#000"),
  },
  {
    name: `color/white`,
    resolvedType: "COLOR",
    description: `https://tailwindcss.com/docs/customizing-colors`,
    scopes: ["ALL_FILLS"],
    value: figma.util.rgb("#fff"),
  },
];
