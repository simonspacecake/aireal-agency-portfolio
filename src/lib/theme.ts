import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

// CLI-themed Chakra UI configuration
const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        // Dynamic CLI colors (will be updated via CSS variables)
        cli: {
          bg: { value: "var(--cli-bg)" },
          bgAlt: { value: "var(--cli-bgAlt)" },
          bgHighlight: { value: "var(--cli-bgHighlight)" },
          fg: { value: "var(--cli-fg)" },
          fgAlt: { value: "var(--cli-fgAlt)" },
          border: { value: "var(--cli-border)" },
          primary: { value: "var(--cli-primary)" },
          secondary: { value: "var(--cli-secondary)" },
          accent: { value: "var(--cli-accent)" },
          success: { value: "var(--cli-success)" },
          warning: { value: "var(--cli-warning)" },
          error: { value: "var(--cli-error)" },
          info: { value: "var(--cli-info)" },
          comment: { value: "var(--cli-comment)" },
          selection: { value: "var(--cli-selection)" },
          cursor: { value: "var(--cli-cursor)" },
          // Syntax colors
          red: { value: "var(--cli-red)" },
          orange: { value: "var(--cli-orange)" },
          yellow: { value: "var(--cli-yellow)" },
          green: { value: "var(--cli-green)" },
          cyan: { value: "var(--cli-cyan)" },
          blue: { value: "var(--cli-blue)" },
          purple: { value: "var(--cli-purple)" },
          pink: { value: "var(--cli-pink)" },
        },
      },
      fonts: {
        heading: { value: "var(--font-display)" },
        body: { value: "var(--font-mono)" },
        mono: { value: "var(--font-mono)" },
      },
      fontSizes: {
        xs: { value: "0.75rem" },
        sm: { value: "0.875rem" },
        md: { value: "1rem" },
        lg: { value: "1.125rem" },
        xl: { value: "1.25rem" },
        "2xl": { value: "1.5rem" },
        "3xl": { value: "1.875rem" },
        "4xl": { value: "2.25rem" },
        "5xl": { value: "3rem" },
      },
      spacing: {
        px: { value: "1px" },
        0: { value: "0" },
        1: { value: "0.25rem" },
        2: { value: "0.5rem" },
        3: { value: "0.75rem" },
        4: { value: "1rem" },
        5: { value: "1.25rem" },
        6: { value: "1.5rem" },
        8: { value: "2rem" },
        10: { value: "2.5rem" },
        12: { value: "3rem" },
        16: { value: "4rem" },
        20: { value: "5rem" },
        24: { value: "6rem" },
        32: { value: "8rem" },
      },
    },
    semanticTokens: {
      colors: {
        bg: {
          default: { value: "{colors.cli.bg}" },
          subtle: { value: "{colors.cli.bgAlt}" },
          muted: { value: "{colors.cli.bgHighlight}" },
        },
        fg: {
          default: { value: "{colors.cli.fg}" },
          muted: { value: "{colors.cli.fgAlt}" },
          subtle: { value: "{colors.cli.comment}" },
        },
        border: {
          default: { value: "{colors.cli.border}" },
          muted: { value: "{colors.cli.bgHighlight}" },
        },
      },
    },
  },
  globalCss: {
    body: {
      bg: "{colors.cli.bg}",
      color: "{colors.cli.fg}",
      fontFamily: "var(--font-mono)",
    },
    "*, *::before, *::after": {
      borderColor: "{colors.cli.border}",
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
