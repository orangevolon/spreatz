const LINE_HEIGHT_FACTOR = 1.5;

export const theme = {
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    m: 16,
    l: 32,
    xl: 64,
  },
  radius: {
    crisp: 8,
    round: 16,
    max: Number.MAX_SAFE_INTEGER,
  },
  color: {
    background: "#ddd",
    elevatedBackground: "#eee",
    foreground: "#111",
    foregroundSubdued: "#555",
    selectedWord: "#f5bda2",
    primaryButton: {
      background: "#222",
      foreground: "#eee",
    },
    secondaryButton: {
      background: "#eee",
      foreground: "#222",
    },
  },
  typography: {
    small: {
      fontSize: 12,
      lineHeight: 12 * LINE_HEIGHT_FACTOR,
    },
    medium: {
      fontSize: 16,
      lineHeight: 16 * LINE_HEIGHT_FACTOR,
    },
    large: {
      fontSize: 20,
      lineHeight: 20 * LINE_HEIGHT_FACTOR,
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
      fontWeight: "bold",
    },
  },
} as const;
