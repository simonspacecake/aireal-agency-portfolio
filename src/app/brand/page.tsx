'use client'

import { Box, Container, Heading, Text, Stack, Grid, HStack, Code } from "@chakra-ui/react"
import { useTheme } from "@/contexts/ThemeContext"
import ThemeSwitcher from "@/components/ThemeSwitcher"
import { HiTerminal, HiCode, HiColorSwatch } from "react-icons/hi"

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
    <Box minH="100vh" bg="cli.bg" color="cli.fg">
      {/* Hero */}
      <Box
        py={20}
        borderBottom="2px solid"
        borderColor="cli.border"
        position="relative"
        overflow="hidden"
      >
        <Container maxW="7xl" position="relative" zIndex={1}>
          <Stack gap={6} maxW="4xl">
            <HStack>
              <HiTerminal size={40} color="var(--cli-primary)" />
              <Text fontSize="sm" color="cli.comment" fontFamily="mono">
                ~/brand/guidelines
              </Text>
            </HStack>

            <Heading
              size="4xl"
              fontFamily="mono"
              fontWeight="black"
              color="cli.fg"
              lineHeight="1.1"
            >
              <Text as="span" color="cli.primary">$</Text> brand{" "}
              <Text as="span" color="cli.secondary">--identity</Text>
            </Heading>

            <Text
              fontSize="xl"
              color="cli.fgAlt"
              fontFamily="mono"
              maxW="2xl"
            >
              CLI-first design system. Terminal aesthetics meet modern web.
              <span className="cli-cursor-line"></span>
            </Text>

            <HStack gap={4} pt={4} fontFamily="mono" fontSize="sm">
              <Text color="cli.success">✓ 6 color schemes</Text>
              <Text color="cli.success">✓ Monospace typography</Text>
              <Text color="cli.success">✓ Terminal components</Text>
            </HStack>
          </Stack>
        </Container>

        {/* Terminal scanlines effect */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.03}
          pointerEvents="none"
          background="repeating-linear-gradient(0deg, var(--cli-fg), var(--cli-fg) 1px, transparent 1px, transparent 2px)"
        />
      </Box>

      {/* Theme Switcher Section */}
      <Box py={16} bg="cli.bgAlt">
        <Container maxW="7xl">
          <Stack gap={12}>
            <Box>
              <HStack mb={4}>
                <HiColorSwatch size={24} color="var(--cli-primary)" />
                <Heading size="2xl" fontFamily="mono">
                  Color Schemes
                </Heading>
              </HStack>
              <Text color="cli.fgAlt" fontFamily="mono">
                Choose from 6 trending CLI themes. Each optimized for long coding sessions.
              </Text>
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "1fr 1fr" }} gap={8}>
              <ThemeSwitcher />

              <Box className="terminal-window" p={6}>
                <Box className="terminal-header">
                  <span className="terminal-button close"></span>
                  <span className="terminal-button minimize"></span>
                  <span className="terminal-button maximize"></span>
                  <Text ml={3} fontSize="xs" color="cli.fgAlt" fontFamily="mono">
                    theme-preview.ts
                  </Text>
                </Box>
                <Box className="terminal-body">
                  <Code
                    fontFamily="mono"
                    fontSize="sm"
                    bg="transparent"
                    color="cli.fg"
                    p={0}
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
        </Container>
      </Box>

      {/* Color Palette */}
      <Box py={16}>
        <Container maxW="7xl">
          <Stack gap={12}>
            <Box>
              <Heading size="2xl" fontFamily="mono" mb={2}>
                Color Palette
              </Heading>
              <Text color="cli.comment" fontFamily="mono" fontSize="sm">
                # {currentTheme.name} theme colors
              </Text>
            </Box>

            <Stack gap={8}>
              {colorGroups.map((group) => (
                <Box key={group.title}>
                  <Heading
                    size="lg"
                    fontFamily="mono"
                    color="cli.primary"
                    mb={4}
                  >
                    {group.title}
                  </Heading>

                  <Grid
                    templateColumns={{
                      base: "repeat(2, 1fr)",
                      md: "repeat(3, 1fr)",
                      lg: "repeat(4, 1fr)",
                    }}
                    gap={4}
                  >
                    {group.colors.map((color) => (
                      <Box
                        key={color.key}
                        border="1px solid"
                        borderColor="cli.border"
                        borderRadius="md"
                        overflow="hidden"
                        transition="all 0.2s"
                        _hover={{
                          borderColor: "cli.primary",
                          transform: "translateY(-2px)",
                        }}
                      >
                        <Box
                          h="80px"
                          bg={currentTheme.colors[color.key as keyof typeof currentTheme.colors] as string}
                        />
                        <Box p={3} bg="cli.bgAlt">
                          <Text
                            fontFamily="mono"
                            fontSize="sm"
                            fontWeight="semibold"
                            mb={1}
                          >
                            {color.name}
                          </Text>
                          <Code
                            fontFamily="mono"
                            fontSize="xs"
                            bg="cli.bgHighlight"
                            px={2}
                            py={1}
                            borderRadius="sm"
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
        </Container>
      </Box>

      {/* Typography */}
      <Box py={16} bg="cli.bgAlt">
        <Container maxW="7xl">
          <Stack gap={12}>
            <Box>
              <HStack mb={4}>
                <HiCode size={24} color="var(--cli-primary)" />
                <Heading size="2xl" fontFamily="mono">
                  Typography
                </Heading>
              </HStack>
              <Text color="cli.fgAlt" fontFamily="mono">
                Monospace-first. Built for readability in terminals and IDEs.
              </Text>
            </Box>

            <Box className="terminal-window" p={8}>
              <Stack gap={6}>
                <Box>
                  <Text fontSize="xs" color="cli.comment" mb={2}>
                    Font Family: {currentTheme.fonts.mono}
                  </Text>
                  <Text fontSize="5xl" fontFamily="mono" fontWeight="black">
                    The quick brown fox
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="xs" color="cli.comment" mb={2}>
                    4XL - Headlines
                  </Text>
                  <Text fontSize="4xl" fontFamily="mono" fontWeight="bold">
                    jumps over the lazy dog
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="xs" color="cli.comment" mb={2}>
                    2XL - Subheadings
                  </Text>
                  <Text fontSize="2xl" fontFamily="mono" fontWeight="semibold">
                    ABCDEFGHIJKLMNOPQRSTUVWXYZ
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="xs" color="cli.comment" mb={2}>
                    MD - Body Text
                  </Text>
                  <Text fontSize="md" fontFamily="mono">
                    abcdefghijklmnopqrstuvwxyz 0123456789
                  </Text>
                </Box>

                <Box>
                  <Text fontSize="xs" color="cli.comment" mb={2}>
                    SM - Code / UI
                  </Text>
                  <Code fontFamily="mono" fontSize="sm" bg="cli.bgHighlight" px={3} py={1}>
                    {'{ } [ ] ( ) < > / \\ | ~ ` ! @ # $ % ^ & * - + = ; : " \' , . ?'}
                  </Code>
                </Box>
              </Stack>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Usage Examples */}
      <Box py={16}>
        <Container maxW="7xl">
          <Stack gap={12}>
            <Heading size="2xl" fontFamily="mono">
              Usage Examples
            </Heading>

            <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={6}>
              <Box className="terminal-window" p={6}>
                <Text fontSize="sm" color="cli.primary" fontFamily="mono" mb={4}>
                  # CSS Variables
                </Text>
                <Code
                  display="block"
                  fontFamily="mono"
                  fontSize="xs"
                  bg="transparent"
                  p={0}
                  whiteSpace="pre"
                >
{`.element {
  background: var(--cli-bg);
  color: var(--cli-primary);
  border: 1px solid var(--cli-border);
  font-family: var(--font-mono);
}`}
                </Code>
              </Box>

              <Box className="terminal-window" p={6}>
                <Text fontSize="sm" color="cli-secondary" fontFamily="mono" mb={4}>
                  # Chakra UI Tokens
                </Text>
                <Code
                  display="block"
                  fontFamily="mono"
                  fontSize="xs"
                  bg="transparent"
                  p={0}
                  whiteSpace="pre"
                >
{`<Box
  bg="cli.bg"
  color="cli.primary"
  borderColor="cli.border"
  fontFamily="mono"
/>`}
                </Code>
              </Box>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Footer CTA */}
      <Box
        py={16}
        borderTop="2px solid"
        borderColor="cli.border"
        bg="cli.bgAlt"
      >
        <Container maxW="4xl">
          <Stack gap={4} textAlign="center">
            <Text fontSize="2xl" fontFamily="mono" color="cli.primary">
              $ npm install @ai-agency/cli-theme
            </Text>
            <Text color="cli.comment" fontFamily="mono" fontSize="sm">
              (Coming soon to npm)
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
