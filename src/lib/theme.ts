import { createSystem, defaultConfig, defineConfig } from "@chakra-ui/react"

const customConfig = defineConfig({
  theme: {
    tokens: {
      colors: {
        brand: {
          50: { value: "#E6F2FF" },
          100: { value: "#BAE0FF" },
          200: { value: "#8DCDFF" },
          300: { value: "#61BBFF" },
          400: { value: "#34A8FF" },
          500: { value: "#0795FF" },
          600: { value: "#0677CC" },
          700: { value: "#045999" },
          800: { value: "#033C66" },
          900: { value: "#011E33" },
        },
        accent: {
          50: { value: "#F3E5FF" },
          100: { value: "#DEBFFF" },
          200: { value: "#C999FF" },
          300: { value: "#B473FF" },
          400: { value: "#9F4DFF" },
          500: { value: "#8A27FF" },
          600: { value: "#6E1FCC" },
          700: { value: "#531799" },
          800: { value: "#371066" },
          900: { value: "#1C0833" },
        },
      },
      fonts: {
        heading: { value: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` },
        body: { value: `'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif` },
      },
    },
    semanticTokens: {
      colors: {
        primary: {
          value: { base: "{colors.brand.500}", _dark: "{colors.brand.400}" },
        },
        secondary: {
          value: { base: "{colors.accent.500}", _dark: "{colors.accent.400}" },
        },
      },
    },
  },
})

export const system = createSystem(defaultConfig, customConfig)
