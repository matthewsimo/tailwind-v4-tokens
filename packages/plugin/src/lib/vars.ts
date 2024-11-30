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
