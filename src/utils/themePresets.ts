export type ThemePresetKey = "blush" | "slate" | "sand" | "sage" | "rose";

export type ThemePreset = {
  base: Record<"50" | "100" | "200" | "300" | "400" | "500" | "600" | "700" | "800" | "900" | "950", string>;
  accent: string;
  fontSans?: string;
  fontDisplay?: string;
};

export const THEME_PRESETS: Record<ThemePresetKey, ThemePreset> = {
  // Current default (matches existing global.css tokens)
  blush: {
    base: {
      "50": "oklch(96.74% 0.001 286.38)",
      "100": "oklch(93.73% 0.001 286.37)",
      "200": "oklch(87.31% 0.004 271.36)",
      "300": "oklch(80.82% 0.006 274.95)",
      "400": "oklch(74.22% 0.009 278.59)",
      "500": "oklch(67.48% 0.012 280.37)",
      "600": "oklch(56.83% 0.015 281.34)",
      "700": "oklch(46.56% 0.011 279.46)",
      "800": "oklch(35.42% 0.009 285.95)",
      "900": "oklch(23.48% 0.004 264.49)",
      "950": "oklch(16.89% 0.002 286.18)",
    },
    accent: "#ec4899",
    fontSans: "Inter, sans-serif",
    fontDisplay: "InterDisplay, sans-serif",
  },
  // Cool neutral
  slate: {
    base: {
      "50": "oklch(98% 0.002 260)",
      "100": "oklch(95% 0.004 260)",
      "200": "oklch(90% 0.006 260)",
      "300": "oklch(83% 0.008 260)",
      "400": "oklch(75% 0.010 260)",
      "500": "oklch(65% 0.012 260)",
      "600": "oklch(52% 0.012 260)",
      "700": "oklch(40% 0.010 260)",
      "800": "oklch(30% 0.008 260)",
      "900": "oklch(22% 0.006 260)",
      "950": "oklch(15% 0.004 260)",
    },
    accent: "#3b82f6",
    fontSans: "Inter, sans-serif",
    fontDisplay: "InterDisplay, sans-serif",
  },
  // Warm paper
  sand: {
    base: {
      "50": "oklch(98% 0.01 90)",
      "100": "oklch(95% 0.02 90)",
      "200": "oklch(90% 0.03 90)",
      "300": "oklch(83% 0.04 90)",
      "400": "oklch(75% 0.05 90)",
      "500": "oklch(65% 0.05 90)",
      "600": "oklch(52% 0.04 90)",
      "700": "oklch(40% 0.03 90)",
      "800": "oklch(30% 0.02 90)",
      "900": "oklch(22% 0.015 90)",
      "950": "oklch(15% 0.01 90)",
    },
    accent: "#b45309",
    fontSans: "Inter, sans-serif",
    fontDisplay: "InterDisplay, sans-serif",
  },
  // Soft green
  sage: {
    base: {
      "50": "oklch(98% 0.01 150)",
      "100": "oklch(95% 0.02 150)",
      "200": "oklch(90% 0.03 150)",
      "300": "oklch(83% 0.04 150)",
      "400": "oklch(75% 0.05 150)",
      "500": "oklch(65% 0.05 150)",
      "600": "oklch(52% 0.04 150)",
      "700": "oklch(40% 0.03 150)",
      "800": "oklch(30% 0.02 150)",
      "900": "oklch(22% 0.015 150)",
      "950": "oklch(15% 0.01 150)",
    },
    accent: "#10b981",
    fontSans: "Inter, sans-serif",
    fontDisplay: "InterDisplay, sans-serif",
  },

  // Screenshot-inspired soft pink UI
  rose: {
    base: {
      "50": "#fff1f4",
      "100": "#ffe4ea",
      "200": "#fbc9d6",
      "300": "#f6a9bf",
      "400": "#e97fa1",
      "500": "#d85b84",
      "600": "#b93d6a",
      "700": "#8f2d52",
      "800": "#5f1e36",
      "900": "#2d0f1d",
      "950": "#160710",
    },
    // Slightly deeper pink so white text on CTA still reads
    accent: "#d85b84",
    fontSans: "Inter, sans-serif",
    fontDisplay: "InterDisplay, sans-serif",
  },
};


