// CLI Color Schemes inspired by popular terminal themes

export interface CLITheme {
  name: string
  slug: string
  colors: {
    bg: string
    bgAlt: string
    bgHighlight: string
    fg: string
    fgAlt: string
    border: string
    primary: string
    secondary: string
    accent: string
    success: string
    warning: string
    error: string
    info: string
    comment: string
    selection: string
    cursor: string
    // Syntax highlighting
    red: string
    orange: string
    yellow: string
    green: string
    cyan: string
    blue: string
    purple: string
    pink: string
  }
  fonts: {
    mono: string
    display: string
  }
}

export const cliThemes: Record<string, CLITheme> = {
  dracula: {
    name: "Dracula",
    slug: "dracula",
    colors: {
      bg: "#282a36",
      bgAlt: "#1e1f29",
      bgHighlight: "#44475a",
      fg: "#f8f8f2",
      fgAlt: "#6272a4",
      border: "#44475a",
      primary: "#bd93f9",
      secondary: "#ff79c6",
      accent: "#8be9fd",
      success: "#50fa7b",
      warning: "#f1fa8c",
      error: "#ff5555",
      info: "#8be9fd",
      comment: "#6272a4",
      selection: "#44475a",
      cursor: "#f8f8f2",
      // Syntax
      red: "#ff5555",
      orange: "#ffb86c",
      yellow: "#f1fa8c",
      green: "#50fa7b",
      cyan: "#8be9fd",
      blue: "#6272a4",
      purple: "#bd93f9",
      pink: "#ff79c6",
    },
    fonts: {
      mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', 'Consolas', monospace",
      display: "'JetBrains Mono', 'Fira Code', monospace",
    },
  },
  nord: {
    name: "Nord",
    slug: "nord",
    colors: {
      bg: "#2e3440",
      bgAlt: "#242933",
      bgHighlight: "#3b4252",
      fg: "#eceff4",
      fgAlt: "#d8dee9",
      border: "#4c566a",
      primary: "#88c0d0",
      secondary: "#81a1c1",
      accent: "#8fbcbb",
      success: "#a3be8c",
      warning: "#ebcb8b",
      error: "#bf616a",
      info: "#88c0d0",
      comment: "#616e88",
      selection: "#434c5e",
      cursor: "#eceff4",
      // Syntax
      red: "#bf616a",
      orange: "#d08770",
      yellow: "#ebcb8b",
      green: "#a3be8c",
      cyan: "#8fbcbb",
      blue: "#81a1c1",
      purple: "#b48ead",
      pink: "#b48ead",
    },
    fonts: {
      mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
      display: "'JetBrains Mono', 'Fira Code', monospace",
    },
  },
  tokyoNight: {
    name: "Tokyo Night",
    slug: "tokyo-night",
    colors: {
      bg: "#1a1b26",
      bgAlt: "#16161e",
      bgHighlight: "#24283b",
      fg: "#c0caf5",
      fgAlt: "#a9b1d6",
      border: "#292e42",
      primary: "#7aa2f7",
      secondary: "#bb9af7",
      accent: "#7dcfff",
      success: "#9ece6a",
      warning: "#e0af68",
      error: "#f7768e",
      info: "#7dcfff",
      comment: "#565f89",
      selection: "#283457",
      cursor: "#c0caf5",
      // Syntax
      red: "#f7768e",
      orange: "#ff9e64",
      yellow: "#e0af68",
      green: "#9ece6a",
      cyan: "#7dcfff",
      blue: "#7aa2f7",
      purple: "#bb9af7",
      pink: "#ff007c",
    },
    fonts: {
      mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
      display: "'JetBrains Mono', 'Fira Code', monospace",
    },
  },
  catppuccin: {
    name: "Catppuccin Mocha",
    slug: "catppuccin",
    colors: {
      bg: "#1e1e2e",
      bgAlt: "#181825",
      bgHighlight: "#313244",
      fg: "#cdd6f4",
      fgAlt: "#bac2de",
      border: "#45475a",
      primary: "#89b4fa",
      secondary: "#cba6f7",
      accent: "#94e2d5",
      success: "#a6e3a1",
      warning: "#f9e2af",
      error: "#f38ba8",
      info: "#89dceb",
      comment: "#6c7086",
      selection: "#585b70",
      cursor: "#f5e0dc",
      // Syntax
      red: "#f38ba8",
      orange: "#fab387",
      yellow: "#f9e2af",
      green: "#a6e3a1",
      cyan: "#94e2d5",
      blue: "#89b4fa",
      purple: "#cba6f7",
      pink: "#f5c2e7",
    },
    fonts: {
      mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
      display: "'JetBrains Mono', 'Fira Code', monospace",
    },
  },
  monokaiPro: {
    name: "Monokai Pro",
    slug: "monokai-pro",
    colors: {
      bg: "#2d2a2e",
      bgAlt: "#221f22",
      bgHighlight: "#3e3b3f",
      fg: "#fcfcfa",
      fgAlt: "#c1c0c0",
      border: "#5b595c",
      primary: "#78dce8",
      secondary: "#ab9df2",
      accent: "#a9dc76",
      success: "#a9dc76",
      warning: "#ffd866",
      error: "#ff6188",
      info: "#78dce8",
      comment: "#727072",
      selection: "#5b595c",
      cursor: "#fcfcfa",
      // Syntax
      red: "#ff6188",
      orange: "#fc9867",
      yellow: "#ffd866",
      green: "#a9dc76",
      cyan: "#78dce8",
      blue: "#78dce8",
      purple: "#ab9df2",
      pink: "#ff6188",
    },
    fonts: {
      mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
      display: "'JetBrains Mono', 'Fira Code', monospace",
    },
  },
  matrix: {
    name: "Matrix",
    slug: "matrix",
    colors: {
      bg: "#0d0208",
      bgAlt: "#000000",
      bgHighlight: "#1a1a1a",
      fg: "#00ff41",
      fgAlt: "#008f11",
      border: "#003b00",
      primary: "#00ff41",
      secondary: "#39ff14",
      accent: "#00ff41",
      success: "#00ff41",
      warning: "#ffff00",
      error: "#ff0000",
      info: "#00ffff",
      comment: "#006400",
      selection: "#003300",
      cursor: "#00ff41",
      // Syntax
      red: "#ff0000",
      orange: "#ff8800",
      yellow: "#ffff00",
      green: "#00ff41",
      cyan: "#00ffff",
      blue: "#0088ff",
      purple: "#9d00ff",
      pink: "#ff00ff",
    },
    fonts: {
      mono: "'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace",
      display: "'JetBrains Mono', 'Fira Code', monospace",
    },
  },
}

export const defaultTheme = "dracula"
