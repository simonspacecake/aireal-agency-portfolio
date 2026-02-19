'use client'

import { Box, Grid, Stack, Text, HStack, Code } from "@chakra-ui/react"
import { useTheme } from "@/contexts/ThemeContext"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import { HiTerminal, HiColorSwatch } from "react-icons/hi"

export default function BrandPage() {
  const { currentTheme } = useTheme()

  const colorGroups = [
    {
      title: "Core Colors",
      colors: [
        { name: "Background", key: "bg", var: "--cli-bg" },
        { name: "Background Alt", key: "bgAlt", var: "--cli-bgAlt" },
        { name: "Background Highlight", key: "bgHighlight", var: "--cli-bgHighlight" },
        { name: "Foreground", key: "fg", var: "--cli-fg" },
        { name: "Foreground Alt", key: "fgAlt", var: "--cli-fgAlt" },
        { name: "Border", key: "border", var: "--cli-border" },
      ],
    },
    {
      title: "Brand Colors",
      colors: [
        { name: "Primary", key: "primary", var: "--cli-primary" },
        { name: "Secondary", key: "secondary", var: "--cli-secondary" },
        { name: "Accent", key: "accent", var: "--cli-accent" },
      ],
    },
    {
      title: "Status Colors",
      colors: [
        { name: "Success", key: "success", var: "--cli-success" },
        { name: "Warning", key: "warning", var: "--cli-warning" },
        { name: "Error", key: "error", var: "--cli-error" },
        { name: "Info", key: "info", var: "--cli-info" },
      ],
    },
    {
      title: "Syntax Colors",
      colors: [
        { name: "Red", key: "red", var: "--cli-red" },
        { name: "Orange", key: "orange", var: "--cli-orange" },
        { name: "Yellow", key: "yellow", var: "--cli-yellow" },
        { name: "Green", key: "green", var: "--cli-green" },
        { name: "Cyan", key: "cyan", var: "--cli-cyan" },
        { name: "Blue", key: "blue", var: "--cli-blue" },
        { name: "Purple", key: "purple", var: "--cli-purple" },
        { name: "Pink", key: "pink", var: "--cli-pink" },
      ],
    },
  ]

  return (
    <Box minH="100vh" background="var(--cli-bg)" color="var(--cli-fg)">
      {/* Hero */}
      <Box
        py={{ base: "var(--space-16)", md: "var(--space-20)" }}
        borderBottom="var(--border-width-thick) solid var(--cli-border)"
      >
        <Box className="container">
          <Stack gap="var(--space-6)" maxW="4xl">
            <HStack gap="var(--space-2)">
              <HiTerminal size={40} color="var(--cli-primary)" />
              <Text fontSize="var(--text-sm)" color="var(--cli-comment)" fontFamily="var(--font-mono)">
                ~/brand/guidelines
              </Text>
            </HStack>

            <Text
              as="h1"
              fontSize={{ base: "var(--text-4xl)", md: "var(--text-5xl)" }}
              fontFamily="var(--font-display)"
              fontWeight="var(--font-black)"
              color="var(--cli-fg)"
              lineHeight="var(--leading-tight)"
            >
              <Text as="span" color="var(--cli-primary)">$</Text> brand{" "}
              <Text as="span" color="var(--cli-secondary)">--identity</Text>
              <span className="cli-cursor-line"></span>
            </Text>

            <Text
              fontSize="var(--text-xl)"
              color="var(--cli-fgAlt)"
              fontFamily="var(--font-mono)"
              maxW="2xl"
            >
              CLI-first design system. Terminal aesthetics meet modern web.
            </Text>

            <HStack gap="var(--space-4)" pt="var(--space-4)" fontFamily="var(--font-mono)" fontSize="var(--text-sm)">
              <Text color="var(--cli-success)">✓ 6 color schemes</Text>
              <Text color="var(--cli-success)">✓ Monospace typography</Text>
              <Text color="var(--cli-success)">✓ Terminal components</Text>
            </HStack>
          </Stack>
        </Box>
      </Box>

      {/* Theme Switcher Section */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }} background="var(--cli-bgAlt)">
        <Box className="container">
          <Stack gap="var(--space-10)">
            <Box>
              <HStack mb="var(--space-4)" gap="var(--space-2)">
                <HiColorSwatch size={24} color="var(--cli-primary)" />
                <Text fontSize="var(--text-2xl)" fontFamily="var(--font-display)" fontWeight="var(--font-bold)">
                  Color Schemes
                </Text>
              </HStack>
              <Text color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                Choose from 6 trending CLI themes. Each optimized for long coding sessions.
              </Text>
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap="var(--space-8)">
              <ThemeSwitcher />

              <Box className="terminal-window">
                <Box className="terminal-header">
                  <span className="terminal-button close"></span>
                  <span className="terminal-button minimize"></span>
                  <span className="terminal-button maximize"></span>
                  <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                    theme-preview.ts
                  </Text>
                </Box>
                <Box className="terminal-body">
                  <Code
                    fontFamily="var(--font-mono)"
                    fontSize="var(--text-sm)"
                    background="transparent"
                    color="var(--cli-fg)"
                    padding={0}
                  >
                    <pre>
{`// Current theme: ${currentTheme.name}
const colors = {
  primary: "${currentTheme.colors.primary}",
  secondary: "${currentTheme.colors.secondary}",
  accent: "${currentTheme.colors.accent}",
  success: "${currentTheme.colors.success}",
};

export default colors;`}
                    </pre>
                  </Code>
                </Box>
              </Box>
            </Grid>
          </Stack>
        </Box>
      </Box>

      {/* Color Palette */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }}>
        <Box className="container">
          <Stack gap="var(--space-10)">
            <Box>
              <Text fontSize="var(--text-2xl)" fontFamily="var(--font-display)" fontWeight="var(--font-bold)" mb="var(--space-2)">
                Color Palette
              </Text>
              <Text color="var(--cli-comment)" fontFamily="var(--font-mono)" fontSize="var(--text-sm)">
                # {currentTheme.name} theme colors
              </Text>
            </Box>

            <Stack gap="var(--space-8)">
              {colorGroups.map((group) => (
                <Box key={group.title}>
                  <Text
                    fontSize="var(--text-lg)"
                    fontFamily="var(--font-display)"
                    fontWeight="var(--font-bold)"
                    color="var(--cli-primary)"
                    mb="var(--space-4)"
                  >
                    {group.title}
                  </Text>

                  <Grid
                    templateColumns={{
                      base: "repeat(2, 1fr)",
                      md: "repeat(3, 1fr)",
                      lg: "repeat(4, 1fr)",
                    }}
                    gap="var(--space-4)"
                  >
                    {group.colors.map((color) => (
                      <Box
                        key={color.key}
                        border="var(--border-width) solid var(--cli-border)"
                        borderRadius="var(--border-radius-md)"
                        overflow="hidden"
                        transition="all var(--transition-base)"
                        _hover={{
                          borderColor: "var(--cli-primary)",
                          transform: "translateY(-2px)",
                        }}
                      >
                        <Box
                          h="80px"
                          background={currentTheme.colors[color.key as keyof typeof currentTheme.colors] as string}
                        />
                        <Box p="var(--space-3)" background="var(--cli-bgAlt)">
                          <Text
                            fontFamily="var(--font-mono)"
                            fontSize="var(--text-sm)"
                            fontWeight="var(--font-semibold)"
                            mb="var(--space-1)"
                          >
                            {color.name}
                          </Text>
                          <Code
                            fontFamily="var(--font-mono)"
                            fontSize="var(--text-xs)"
                            background="var(--cli-bgHighlight)"
                            px="var(--space-2)"
                            py="var(--space-1)"
                            borderRadius="var(--border-radius-sm)"
                            color="var(--cli-accent)"
                          >
                            {currentTheme.colors[color.key as keyof typeof currentTheme.colors]}
                          </Code>
                        </Box>
                      </Box>
                    ))}
                  </Grid>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* Typography Section */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }} background="var(--cli-bgAlt)">
        <Box className="container">
          <Stack gap="var(--space-10)">
            <Box>
              <Text fontSize="var(--text-2xl)" fontFamily="var(--font-display)" fontWeight="var(--font-bold)" mb="var(--space-2)">
                Typography
              </Text>
              <Text color="var(--cli-comment)" fontFamily="var(--font-mono)" fontSize="var(--text-sm)">
                # Monospace font stack
              </Text>
            </Box>

            <Box className="terminal-window">
              <Box className="terminal-header">
                <span className="terminal-button close"></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
                <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                  typography.css
                </Text>
              </Box>
              <Box className="terminal-body">
                <Stack gap="var(--space-4)">
                  <Box>
                    <Text fontSize="var(--text-xs)" color="var(--cli-comment)" fontFamily="var(--font-mono)">
                      // Font Family
                    </Text>
                    <Text fontFamily="var(--font-mono)" color="var(--cli-fg)">
                      --font-mono: 'JetBrains Mono', 'Fira Code', 'Cascadia Code', monospace
                    </Text>
                  </Box>
                  <Box>
                    <Text fontSize="var(--text-xs)" color="var(--cli-comment)" fontFamily="var(--font-mono)">
                      // Font Sizes
                    </Text>
                    <Stack gap="var(--space-1)">
                      <Text fontSize="var(--text-6xl)" fontFamily="var(--font-mono)" color="var(--cli-primary)">Extra Large (3.75rem)</Text>
                      <Text fontSize="var(--text-4xl)" fontFamily="var(--font-mono)" color="var(--cli-secondary)">Heading (2.25rem)</Text>
                      <Text fontSize="var(--text-2xl)" fontFamily="var(--font-mono)" color="var(--cli-accent)">Subheading (1.5rem)</Text>
                      <Text fontSize="var(--text-base)" fontFamily="var(--font-mono)" color="var(--cli-fg)">Body (1rem)</Text>
                      <Text fontSize="var(--text-sm)" fontFamily="var(--font-mono)" color="var(--cli-fgAlt)">Small (0.875rem)</Text>
                    </Stack>
                  </Box>
                </Stack>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>

      {/* CSS Variables Documentation */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }}>
        <Box className="container">
          <Stack gap="var(--space-10)">
            <Box>
              <Text fontSize="var(--text-2xl)" fontFamily="var(--font-display)" fontWeight="var(--font-bold)" mb="var(--space-2)">
                CSS Variables
              </Text>
              <Text color="var(--cli-comment)" fontFamily="var(--font-mono)" fontSize="var(--text-sm)">
                # Complete design system reference
              </Text>
            </Box>

            <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap="var(--space-6)">
              <Box className="terminal-window">
                <Box className="terminal-header">
                  <span className="terminal-button close"></span>
                  <span className="terminal-button minimize"></span>
                  <span className="terminal-button maximize"></span>
                  <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">
                    spacing.css
                  </Text>
                </Box>
                <Box className="terminal-body">
                  <Stack gap="var(--space-2)" fontFamily="var(--font-mono)" fontSize="var(--text-xs)">
                    <Text color="var(--cli-comment)">/* Spacing Scale */</Text>
                    <Text><Text as="span" color="var(--cli-cyan)">--space-1:</Text> 0.25rem (4px)</Text>
                    <Text><Text as="span" color="var(--cli-cyan)">--space-2:</Text> 0.5rem (8px)</Text>
                    <Text><Text as="span" color="var(--cli-cyan)">--space-4:</Text> 1rem (16px)</Text>
                    <Text><Text as="span" color="var(--cli-cyan)">--space-8:</Text> 2rem (32px)</Text>
                    <Text><Text as="span" color="var(--cli-cyan)">--space-12:</Text> 3rem (48px)</Text>
                    <Text><Text as="span" color="var(--cli-cyan)">--space-16:</Text> 4rem (64px)</Text>
                    <Text><Text as="span" color="var(--cli-cyan)">--space-20:</Text> 5rem (80px)</Text>
                  </Stack>
                </Box>
              </Box>

              <Box className="terminal-window">
                <Box className="terminal-header">
                  <span className="terminal-button close"></span>
                  <span className="terminal-button minimize"></span>
                  <span className="terminal-button maximize"></span>
                  <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">
                    borders.css
                  </Text>
                </Box>
                <Box className="terminal-body">
                  <Stack gap="var(--space-2)" fontFamily="var(--font-mono)" fontSize="var(--text-xs)">
                    <Text color="var(--cli-comment)">/* Border Radius */</Text>
                    <Text><Text as="span" color="var(--cli-cyan)">--border-radius-sm:</Text> 0.125rem (2px)</Text>
                    <Text><Text as="span" color="var(--cli-cyan)">--border-radius:</Text> 0.25rem (4px)</Text>
                    <Text><Text as="span" color="var(--cli-cyan)">--border-radius-md:</Text> 0.375rem (6px)</Text>
                    <Text><Text as="span" color="var(--cli-cyan)">--border-radius-lg:</Text> 0.5rem (8px)</Text>
                    <Text color="var(--cli-comment)" mt="var(--space-2)">/* Border Width */</Text>
                    <Text><Text as="span" color="var(--cli-cyan)">--border-width:</Text> 1px</Text>
                    <Text><Text as="span" color="var(--cli-cyan)">--border-width-thick:</Text> 2px</Text>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
