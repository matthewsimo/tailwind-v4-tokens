export type Var = Pick<
  Variable,
  "name" | "description" | "resolvedType" | "scopes"
> & {
  value: VariableValue;
};

export const fontWeights: Var[] = [
  {
    name: "font-weight/thin",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/font-weight",
    scopes: ["FONT_WEIGHT"],
    value: 100,
  },
  {
    name: "font-weight/extralight",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/font-weight",
    scopes: ["FONT_WEIGHT"],
    value: 200,
  },
  {
    name: "font-weight/light",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/font-weight",
    scopes: ["FONT_WEIGHT"],
    value: 300,
  },
  {
    name: "font-weight/normal",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/font-weight",
    scopes: ["FONT_WEIGHT"],
    value: 400,
  },
  {
    name: "font-weight/medium",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/font-weight",
    scopes: ["FONT_WEIGHT"],
    value: 500,
  },
  {
    name: "font-weight/semibold",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/font-weight",
    scopes: ["FONT_WEIGHT"],
    value: 600,
  },
  {
    name: "font-weight/bold",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/font-weight",
    scopes: ["FONT_WEIGHT"],
    value: 700,
  },
  {
    name: "font-weight/extrabold",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/font-weight",
    scopes: ["FONT_WEIGHT"],
    value: 800,
  },
  {
    name: "font-weight/black",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/font-weight",
    scopes: ["FONT_WEIGHT"],
    value: 900,
  },
];

export const breakpoints: Var[] = [
  {
    name: "breakpoint/sm",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/screens",
    scopes: ["WIDTH_HEIGHT"],
    value: 40 * 16, // 40rem * 16px
  },
  {
    name: "breakpoint/md",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/screens",
    scopes: ["WIDTH_HEIGHT"],
    value: 48 * 16, // 48rem * 16px
  },
  {
    name: "breakpoint/lg",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/screens",
    scopes: ["WIDTH_HEIGHT"],
    value: 64 * 16, // 64rem * 16px
  },
  {
    name: "breakpoint/xl",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/screens",
    scopes: ["WIDTH_HEIGHT"],
    value: 80 * 16, // 80rem * 16px
  },
  {
    name: "breakpoint/2xl",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/screens",
    scopes: ["WIDTH_HEIGHT"],
    value: 96 * 16, // 96rem * 16px
  },
];

export const radii: Var[] = [
  {
    name: "radius/none",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/border-radius",
    scopes: ["CORNER_RADIUS"],
    value: 0,
  },
  {
    name: "radius/xs",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/border-radius",
    scopes: ["CORNER_RADIUS"],
    value: 0.125 * 16, // 0.125rem * 16px
  },
  {
    name: "radius/sm",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/border-radius",
    scopes: ["CORNER_RADIUS"],
    value: 0.25 * 16, // 0.25rem * 16px
  },
  {
    name: "radius/md",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/border-radius",
    scopes: ["CORNER_RADIUS"],
    value: 0.375 * 16, // 0.375rem * 16px
  },
  {
    name: "radius/lg",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/border-radius",
    scopes: ["CORNER_RADIUS"],
    value: 0.5 * 16, // 0.5rem * 16px
  },
  {
    name: "radius/xl",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/border-radius",
    scopes: ["CORNER_RADIUS"],
    value: 0.75 * 16, // 0.75rem * 16px
  },
  {
    name: "radius/2xl",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/border-radius",
    scopes: ["CORNER_RADIUS"],
    value: 1 * 16, // 1rem * 16px
  },
  {
    name: "radius/3xl",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/border-radius",
    scopes: ["CORNER_RADIUS"],
    value: 1.5 * 16, // 1.5rem * 16px
  },
  {
    name: "radius/4xl",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/border-radius",
    scopes: ["CORNER_RADIUS"],
    value: 2 * 16, // 2rem * 16px
  },
  {
    name: "radius/full",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/border-radius",
    scopes: ["CORNER_RADIUS"],
    value: 9999,
  },
];

export const trackings: Var[] = [
  {
    name: "tracking/tighter",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/letter-spacing",
    scopes: ["LETTER_SPACING"],
    value: -0.05 * 16, // -0.05em * 16px
  },
  {
    name: "tracking/tight",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/letter-spacing",
    scopes: ["LETTER_SPACING"],
    value: -0.025 * 16, // -0.025em * 16px
  },
  {
    name: "tracking/normal",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/letter-spacing",
    scopes: ["LETTER_SPACING"],
    value: 0 * 16, // 0em * 16px
  },
  {
    name: "tracking/wide",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/letter-spacing",
    scopes: ["LETTER_SPACING"],
    value: 0.025 * 16, // 0.025em * 16px
  },
  {
    name: "tracking/wider",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/letter-spacing",
    scopes: ["LETTER_SPACING"],
    value: 0.05 * 16, // 0.05em * 16px
  },
  {
    name: "tracking/widest",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/letter-spacing",
    scopes: ["LETTER_SPACING"],
    value: 0.1 * 16, // 0.1em * 16px
  },
];

export const leadings: Var[] = [
  {
    name: "leading/3",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/line-height",
    scopes: ["LINE_HEIGHT"],
    value: 0.75 * 16, // .75rem * 16px
  },
  {
    name: "leading/4",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/line-height",
    scopes: ["LINE_HEIGHT"],
    value: 1 * 16, // 1rem * 16px
  },
  {
    name: "leading/5",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/line-height",
    scopes: ["LINE_HEIGHT"],
    value: 1.25 * 16, // 1.25rem * 16px
  },
  {
    name: "leading/6",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/line-height",
    scopes: ["LINE_HEIGHT"],
    value: 1.5 * 16, // 1.5rem * 16px
  },
  {
    name: "leading/7",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/line-height",
    scopes: ["LINE_HEIGHT"],
    value: 1.75 * 16, // 1.75rem * 16px
  },
  {
    name: "leading/8",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/line-height",
    scopes: ["LINE_HEIGHT"],
    value: 2 * 16, // 2rem * 16px
  },
  {
    name: "leading/9",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/line-height",
    scopes: ["LINE_HEIGHT"],
    value: 2.25 * 16, // 2.25rem * 16px
  },
  {
    name: "leading/10",
    resolvedType: "FLOAT",
    description: "https://tailwindcss.com/docs/line-height",
    scopes: ["LINE_HEIGHT"],
    value: 2.5 * 16, // 2.5rem * 16px
  },
  {
    name: "leading/none",
    resolvedType: "FLOAT",
    description:
      "https://tailwindcss.com/docs/line-height\n\nNote: Figma doesn't support relative line-heights",
    scopes: ["LINE_HEIGHT"],
    value: 1 * 16, // 1 * 16px
  },
  {
    name: "leading/tight",
    resolvedType: "FLOAT",
    description:
      "https://tailwindcss.com/docs/line-height\n\nNote: Figma doesn't support relative line-heights",
    scopes: ["LINE_HEIGHT"],
    value: 1.25 * 16, // 1.25 * 16px
  },
  {
    name: "leading/snug",
    resolvedType: "FLOAT",
    description:
      "https://tailwindcss.com/docs/line-height\n\nNote: Figma doesn't support relative line-heights",
    scopes: ["LINE_HEIGHT"],
    value: 1.375 * 16, // 1.375 * 16px
  },
  {
    name: "leading/normal",
    resolvedType: "FLOAT",
    description:
      "https://tailwindcss.com/docs/line-height\n\nNote: Figma doesn't support relative line-heights",
    scopes: ["LINE_HEIGHT"],
    value: 1.5 * 16, // 1.5 * 16px
  },
  {
    name: "leading/relaxed",
    resolvedType: "FLOAT",
    description:
      "https://tailwindcss.com/docs/line-height\n\nNote: Figma doesn't support relative line-heights",
    scopes: ["LINE_HEIGHT"],
    value: 1.625 * 16, // 1.625 * 16px
  },
  {
    name: "leading/loose",
    resolvedType: "FLOAT",
    description:
      "https://tailwindcss.com/docs/line-height\n\nNote: Figma doesn't support relative line-heights",
    scopes: ["LINE_HEIGHT"],
    value: 2 * 16, // 2 * 16px
  },
];

const createColorScale = (
  space: string,
  map: Record<string, string[]>,
): Var[] => {
  const scale: Var[] = [];
  for (const color in map) {
    scale.push({
      name: `color/${space}/${color}`,
      resolvedType: "COLOR",
      description: `https://tailwindcss.com/docs/customizing-colors\n\nTailwind uses Oklch colors, which Figma's Plugin APIs don't support natively. These are the RGB converted colors, you can see the the difference here: https://oklch.com/#${map[color][2]}`,
      scopes: ["ALL_FILLS"],
      value: figma.util.rgb(map[color][1]),
    });
  }

  return scale;
};

export const redScale = createColorScale("red", {
  50: [
    "oklch(0.971 0.013 17.38)",
    "rgb(254, 242, 242)",
    "97.1,0.013,17.38,100",
  ],
  100: [
    "oklch(0.936 0.032 17.717)",
    "rgb(255, 226, 226)",
    "93.60000000000001,0.032,17.717,100",
  ],
  200: [
    "oklch(0.885 0.062 18.334)",
    "rgb(255, 201, 201)",
    "88.5,0.062,18.334,100",
  ],
  300: [
    "oklch(0.808 0.114 19.571)",
    "rgb(255, 162, 162)",
    "80.80000000000001,0.114,19.571,100",
  ],
  400: [
    "oklch(0.704 0.191 22.216)",
    "rgb(255, 100, 103)",
    "70.39999999999999,0.191,22.216,100",
  ],
  500: [
    "oklch(0.637 0.237 25.331)",
    "rgb(251, 44, 54)",
    "63.7,0.237,25.331,100",
  ],
  600: [
    "oklch(0.577 0.245 27.325)",
    "rgb(231, 0, 11)",
    "57.699999999999996,0.245,27.325,100",
  ],
  700: ["oklch(0.505 0.213 27.518)", "rgb(193, 0, 7)", "50.5,0.213,27.518,100"],
  800: [
    "oklch(0.444 0.177 26.899)",
    "rgb(159, 7, 18)",
    "44.4,0.177,26.899,100",
  ],
  900: [
    "oklch(0.396 0.141 25.723)",
    "rgb(130, 24, 26)",
    "39.6,0.141,25.723,100",
  ],
  950: ["oklch(0.258 0.092 26.042)", "rgb(70, 8, 9)", "25.8,0.092,26.042,100"],
});

/**
 *
 *
  --color-orange-50: oklch(0.98 0.016 73.684);
  --color-orange-100: oklch(0.954 0.038 75.164);
  --color-orange-200: oklch(0.901 0.076 70.697);
  --color-orange-300: oklch(0.837 0.128 66.29);
  --color-orange-400: oklch(0.75 0.183 55.934);
  --color-orange-500: oklch(0.705 0.213 47.604);
  --color-orange-600: oklch(0.646 0.222 41.116);
  --color-orange-700: oklch(0.553 0.195 38.402);
  --color-orange-800: oklch(0.47 0.157 37.304);
  --color-orange-900: oklch(0.408 0.123 38.172);
  --color-orange-950: oklch(0.266 0.079 36.259);

  --color-amber-50: oklch(0.987 0.022 95.277);
  --color-amber-100: oklch(0.962 0.059 95.617);
  --color-amber-200: oklch(0.924 0.12 95.746);
  --color-amber-300: oklch(0.879 0.169 91.605);
  --color-amber-400: oklch(0.828 0.189 84.429);
  --color-amber-500: oklch(0.769 0.188 70.08);
  --color-amber-600: oklch(0.666 0.179 58.318);
  --color-amber-700: oklch(0.555 0.163 48.998);
  --color-amber-800: oklch(0.473 0.137 46.201);
  --color-amber-900: oklch(0.414 0.112 45.904);
  --color-amber-950: oklch(0.279 0.077 45.635);

  --color-yellow-50: oklch(0.987 0.026 102.212);
  --color-yellow-100: oklch(0.973 0.071 103.193);
  --color-yellow-200: oklch(0.945 0.129 101.54);
  --color-yellow-300: oklch(0.905 0.182 98.111);
  --color-yellow-400: oklch(0.852 0.199 91.936);
  --color-yellow-500: oklch(0.795 0.184 86.047);
  --color-yellow-600: oklch(0.681 0.162 75.834);
  --color-yellow-700: oklch(0.554 0.135 66.442);
  --color-yellow-800: oklch(0.476 0.114 61.907);
  --color-yellow-900: oklch(0.421 0.095 57.708);
  --color-yellow-950: oklch(0.286 0.066 53.813);

  --color-lime-50: oklch(0.986 0.031 120.757);
  --color-lime-100: oklch(0.967 0.067 122.328);
  --color-lime-200: oklch(0.938 0.127 124.321);
  --color-lime-300: oklch(0.897 0.196 126.665);
  --color-lime-400: oklch(0.841 0.238 128.85);
  --color-lime-500: oklch(0.768 0.233 130.85);
  --color-lime-600: oklch(0.648 0.2 131.684);
  --color-lime-700: oklch(0.532 0.157 131.589);
  --color-lime-800: oklch(0.453 0.124 130.933);
  --color-lime-900: oklch(0.405 0.101 131.063);
  --color-lime-950: oklch(0.274 0.072 132.109);

  --color-green-50: oklch(0.982 0.018 155.826);
  --color-green-100: oklch(0.962 0.044 156.743);
  --color-green-200: oklch(0.925 0.084 155.995);
  --color-green-300: oklch(0.871 0.15 154.449);
  --color-green-400: oklch(0.792 0.209 151.711);
  --color-green-500: oklch(0.723 0.219 149.579);
  --color-green-600: oklch(0.627 0.194 149.214);
  --color-green-700: oklch(0.527 0.154 150.069);
  --color-green-800: oklch(0.448 0.119 151.328);
  --color-green-900: oklch(0.393 0.095 152.535);
  --color-green-950: oklch(0.266 0.065 152.934);

  --color-emerald-50: oklch(0.979 0.021 166.113);
  --color-emerald-100: oklch(0.95 0.052 163.051);
  --color-emerald-200: oklch(0.905 0.093 164.15);
  --color-emerald-300: oklch(0.845 0.143 164.978);
  --color-emerald-400: oklch(0.765 0.177 163.223);
  --color-emerald-500: oklch(0.696 0.17 162.48);
  --color-emerald-600: oklch(0.596 0.145 163.225);
  --color-emerald-700: oklch(0.508 0.118 165.612);
  --color-emerald-800: oklch(0.432 0.095 166.913);
  --color-emerald-900: oklch(0.378 0.077 168.94);
  --color-emerald-950: oklch(0.262 0.051 172.552);

  --color-teal-50: oklch(0.984 0.014 180.72);
  --color-teal-100: oklch(0.953 0.051 180.801);
  --color-teal-200: oklch(0.91 0.096 180.426);
  --color-teal-300: oklch(0.855 0.138 181.071);
  --color-teal-400: oklch(0.777 0.152 181.912);
  --color-teal-500: oklch(0.704 0.14 182.503);
  --color-teal-600: oklch(0.6 0.118 184.704);
  --color-teal-700: oklch(0.511 0.096 186.391);
  --color-teal-800: oklch(0.437 0.078 188.216);
  --color-teal-900: oklch(0.386 0.063 188.416);
  --color-teal-950: oklch(0.277 0.046 192.524);

  --color-cyan-50: oklch(0.984 0.019 200.873);
  --color-cyan-100: oklch(0.956 0.045 203.388);
  --color-cyan-200: oklch(0.917 0.08 205.041);
  --color-cyan-300: oklch(0.865 0.127 207.078);
  --color-cyan-400: oklch(0.789 0.154 211.53);
  --color-cyan-500: oklch(0.715 0.143 215.221);
  --color-cyan-600: oklch(0.609 0.126 221.723);
  --color-cyan-700: oklch(0.52 0.105 223.128);
  --color-cyan-800: oklch(0.45 0.085 224.283);
  --color-cyan-900: oklch(0.398 0.07 227.392);
  --color-cyan-950: oklch(0.302 0.056 229.695);

  --color-sky-50: oklch(0.977 0.013 236.62);
  --color-sky-100: oklch(0.951 0.026 236.824);
  --color-sky-200: oklch(0.901 0.058 230.902);
  --color-sky-300: oklch(0.828 0.111 230.318);
  --color-sky-400: oklch(0.746 0.16 232.661);
  --color-sky-500: oklch(0.685 0.169 237.323);
  --color-sky-600: oklch(0.588 0.158 241.966);
  --color-sky-700: oklch(0.5 0.134 242.749);
  --color-sky-800: oklch(0.443 0.11 240.79);
  --color-sky-900: oklch(0.391 0.09 240.876);
  --color-sky-950: oklch(0.293 0.066 243.157);

  --color-blue-50: oklch(0.97 0.014 254.604);
  --color-blue-100: oklch(0.932 0.032 255.585);
  --color-blue-200: oklch(0.882 0.059 254.128);
  --color-blue-300: oklch(0.809 0.105 251.813);
  --color-blue-400: oklch(0.707 0.165 254.624);
  --color-blue-500: oklch(0.623 0.214 259.815);
  --color-blue-600: oklch(0.546 0.245 262.881);
  --color-blue-700: oklch(0.488 0.243 264.376);
  --color-blue-800: oklch(0.424 0.199 265.638);
  --color-blue-900: oklch(0.379 0.146 265.522);
  --color-blue-950: oklch(0.282 0.091 267.935);

  --color-indigo-50: oklch(0.962 0.018 272.314);
  --color-indigo-100: oklch(0.93 0.034 272.788);
  --color-indigo-200: oklch(0.87 0.065 274.039);
  --color-indigo-300: oklch(0.785 0.115 274.713);
  --color-indigo-400: oklch(0.673 0.182 276.935);
  --color-indigo-500: oklch(0.585 0.233 277.117);
  --color-indigo-600: oklch(0.511 0.262 276.966);
  --color-indigo-700: oklch(0.457 0.24 277.023);
  --color-indigo-800: oklch(0.398 0.195 277.366);
  --color-indigo-900: oklch(0.359 0.144 278.697);
  --color-indigo-950: oklch(0.257 0.09 281.288);

  --color-violet-50: oklch(0.969 0.016 293.756);
  --color-violet-100: oklch(0.943 0.029 294.588);
  --color-violet-200: oklch(0.894 0.057 293.283);
  --color-violet-300: oklch(0.811 0.111 293.571);
  --color-violet-400: oklch(0.702 0.183 293.541);
  --color-violet-500: oklch(0.606 0.25 292.717);
  --color-violet-600: oklch(0.541 0.281 293.009);
  --color-violet-700: oklch(0.491 0.27 292.581);
  --color-violet-800: oklch(0.432 0.232 292.759);
  --color-violet-900: oklch(0.38 0.189 293.745);
  --color-violet-950: oklch(0.283 0.141 291.089);

  --color-purple-50: oklch(0.977 0.014 308.299);
  --color-purple-100: oklch(0.946 0.033 307.174);
  --color-purple-200: oklch(0.902 0.063 306.703);
  --color-purple-300: oklch(0.827 0.119 306.383);
  --color-purple-400: oklch(0.714 0.203 305.504);
  --color-purple-500: oklch(0.627 0.265 303.9);
  --color-purple-600: oklch(0.558 0.288 302.321);
  --color-purple-700: oklch(0.496 0.265 301.924);
  --color-purple-800: oklch(0.438 0.218 303.724);
  --color-purple-900: oklch(0.381 0.176 304.987);
  --color-purple-950: oklch(0.291 0.149 302.717);

  --color-fuchsia-50: oklch(0.977 0.017 320.058);
  --color-fuchsia-100: oklch(0.952 0.037 318.852);
  --color-fuchsia-200: oklch(0.903 0.076 319.62);
  --color-fuchsia-300: oklch(0.833 0.145 321.434);
  --color-fuchsia-400: oklch(0.74 0.238 322.16);
  --color-fuchsia-500: oklch(0.667 0.295 322.15);
  --color-fuchsia-600: oklch(0.591 0.293 322.896);
  --color-fuchsia-700: oklch(0.518 0.253 323.949);
  --color-fuchsia-800: oklch(0.452 0.211 324.591);
  --color-fuchsia-900: oklch(0.401 0.17 325.612);
  --color-fuchsia-950: oklch(0.293 0.136 325.661);

  --color-pink-50: oklch(0.971 0.014 343.198);
  --color-pink-100: oklch(0.948 0.028 342.258);
  --color-pink-200: oklch(0.899 0.061 343.231);
  --color-pink-300: oklch(0.823 0.12 346.018);
  --color-pink-400: oklch(0.718 0.202 349.761);
  --color-pink-500: oklch(0.656 0.241 354.308);
  --color-pink-600: oklch(0.592 0.249 0.584);
  --color-pink-700: oklch(0.525 0.223 3.958);
  --color-pink-800: oklch(0.459 0.187 3.815);
  --color-pink-900: oklch(0.408 0.153 2.432);
  --color-pink-950: oklch(0.284 0.109 3.907);

  --color-rose-50: oklch(0.969 0.015 12.422);
  --color-rose-100: oklch(0.941 0.03 12.58);
  --color-rose-200: oklch(0.892 0.058 10.001);
  --color-rose-300: oklch(0.81 0.117 11.638);
  --color-rose-400: oklch(0.712 0.194 13.428);
  --color-rose-500: oklch(0.645 0.246 16.439);
  --color-rose-600: oklch(0.586 0.253 17.585);
  --color-rose-700: oklch(0.514 0.222 16.935);
  --color-rose-800: oklch(0.455 0.188 13.697);
  --color-rose-900: oklch(0.41 0.159 10.272);
  --color-rose-950: oklch(0.271 0.105 12.094);

  --color-slate-50: oklch(0.984 0.003 247.858);
  --color-slate-100: oklch(0.968 0.007 247.896);
  --color-slate-200: oklch(0.929 0.013 255.508);
  --color-slate-300: oklch(0.869 0.022 252.894);
  --color-slate-400: oklch(0.704 0.04 256.788);
  --color-slate-500: oklch(0.554 0.046 257.417);
  --color-slate-600: oklch(0.446 0.043 257.281);
  --color-slate-700: oklch(0.372 0.044 257.287);
  --color-slate-800: oklch(0.279 0.041 260.031);
  --color-slate-900: oklch(0.208 0.042 265.755);
  --color-slate-950: oklch(0.129 0.042 264.695);

  --color-gray-50: oklch(0.985 0.002 247.839);
  --color-gray-100: oklch(0.967 0.003 264.542);
  --color-gray-200: oklch(0.928 0.006 264.531);
  --color-gray-300: oklch(0.872 0.01 258.338);
  --color-gray-400: oklch(0.707 0.022 261.325);
  --color-gray-500: oklch(0.551 0.027 264.364);
  --color-gray-600: oklch(0.446 0.03 256.802);
  --color-gray-700: oklch(0.373 0.034 259.733);
  --color-gray-800: oklch(0.278 0.033 256.848);
  --color-gray-900: oklch(0.21 0.034 264.665);
  --color-gray-950: oklch(0.13 0.028 261.692);

  --color-zinc-50: oklch(0.985 0 0);
  --color-zinc-100: oklch(0.967 0.001 286.375);
  --color-zinc-200: oklch(0.92 0.004 286.32);
  --color-zinc-300: oklch(0.871 0.006 286.286);
  --color-zinc-400: oklch(0.705 0.015 286.067);
  --color-zinc-500: oklch(0.552 0.016 285.938);
  --color-zinc-600: oklch(0.442 0.017 285.786);
  --color-zinc-700: oklch(0.37 0.013 285.805);
  --color-zinc-800: oklch(0.274 0.006 286.033);
  --color-zinc-900: oklch(0.21 0.006 285.885);
  --color-zinc-950: oklch(0.141 0.005 285.823);

  --color-neutral-50: oklch(0.985 0 0);
  --color-neutral-100: oklch(0.97 0 0);
  --color-neutral-200: oklch(0.922 0 0);
  --color-neutral-300: oklch(0.87 0 0);
  --color-neutral-400: oklch(0.708 0 0);
  --color-neutral-500: oklch(0.556 0 0);
  --color-neutral-600: oklch(0.439 0 0);
  --color-neutral-700: oklch(0.371 0 0);
  --color-neutral-800: oklch(0.269 0 0);
  --color-neutral-900: oklch(0.205 0 0);
  --color-neutral-950: oklch(0.145 0 0);

  --color-stone-50: oklch(0.985 0.001 106.423);
  --color-stone-100: oklch(0.97 0.001 106.424);
  --color-stone-200: oklch(0.923 0.003 48.717);
  --color-stone-300: oklch(0.869 0.005 56.366);
  --color-stone-400: oklch(0.709 0.01 56.259);
  --color-stone-500: oklch(0.553 0.013 58.071);
  --color-stone-600: oklch(0.444 0.011 73.639);
  --color-stone-700: oklch(0.374 0.01 67.558);
  --color-stone-800: oklch(0.268 0.007 34.298);
  --color-stone-900: oklch(0.216 0.006 56.043);
  --color-stone-950: oklch(0.147 0.004 49.25);

  --color-black: #000;
  --color-white: #fff;
 *
 *
 *
 *
 * */
