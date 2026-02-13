'use client'

import { Box, Container, Heading, Text, Stack, Grid, HStack, Input, Textarea, Button, Code } from "@chakra-ui/react"
import { useState } from "react"
import { HiTerminal, HiCode, HiCube } from "react-icons/hi"
import { useTheme } from "@/contexts/ThemeContext"

export default function ComponentsPage() {
  const { currentTheme } = useTheme()
  const [inputValue, setInputValue] = useState("")

  return (
    <Box minH="100vh" bg="cli.bg" color="cli.fg">
      {/* Hero */}
      <Box
        py={20}
        borderBottom="2px solid"
        borderColor="cli.border"
      >
        <Container maxW="7xl">
          <Stack gap={6} maxW="4xl">
            <HStack>
              <HiCube size={40} color="var(--cli-primary)" />
              <Text fontSize="sm" color="cli.comment" fontFamily="mono">
                ~/components/library
              </Text>
            </HStack>

            <Heading
              size="4xl"
              fontFamily="mono"
              fontWeight="black"
              lineHeight="1.1"
            >
              <Text as="span" color="cli.primary">$</Text> ui{" "}
              <Text as="span" color="cli.secondary">--components</Text>
            </Heading>

            <Text
              fontSize="xl"
              color="cli.fgAlt"
              fontFamily="mono"
            >
              All UI components. Interactive previews. Copy-paste ready.
              <span className="cli-cursor-line"></span>
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Terminal Window */}
      <Box py={16} bg="cli.bgAlt">
        <Container maxW="7xl">
          <Stack gap={8}>
            <Heading size="2xl" fontFamily="mono">
              Terminal Window
            </Heading>

            <Box className="terminal-window">
              <Box className="terminal-header">
                <span className="terminal-button close"></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
                <Text ml={3} fontSize="xs" color="cli.fgAlt" fontFamily="mono">
                  terminal.tsx
                </Text>
              </Box>
              <Box className="terminal-body">
                <Text fontFamily="mono" fontSize="sm">
                  <Text as="span" color="cli.green">user@localhost</Text>
                  <Text as="span" color="cli.fgAlt">:</Text>
                  <Text as="span" color="cli.blue">~</Text>
                  <Text as="span" color="cli.primary">$</Text> npm run dev
                </Text>
                <Text fontFamily="mono" fontSize="sm" color="cli.comment" mt={2}>
                  Starting development server...
                </Text>
                <Text fontFamily="mono" fontSize="sm" color="cli.success" mt={1}>
                  ✓ Ready on http://localhost:3000
                </Text>
                <Text fontFamily="mono" fontSize="sm" mt={2}>
                  <Text as="span" color="cli.green">user@localhost</Text>
                  <Text as="span" color="cli.fgAlt">:</Text>
                  <Text as="span" color="cli.blue">~</Text>
                  <Text as="span" color="cli.primary">$</Text>
                  <span className="cli-cursor"></span>
                </Text>
              </Box>
            </Box>

            <Box className="code-block">
              <Code
                fontFamily="mono"
                fontSize="sm"
                bg="transparent"
                color="cli.fg"
                display="block"
                whiteSpace="pre"
              >
{`<Box className="terminal-window">
  <Box className="terminal-header">
    <span className="terminal-button close"></span>
    <span className="terminal-button minimize"></span>
    <span className="terminal-button maximize"></span>
  </Box>
  <Box className="terminal-body">
    Terminal content here...
  </Box>
</Box>`}
              </Code>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Input Fields */}
      <Box py={16}>
        <Container maxW="7xl">
          <Stack gap={8}>
            <Heading size="2xl" fontFamily="mono">
              Input Fields
            </Heading>

            <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={8}>
              <Box>
                <Text fontSize="sm" color="cli.comment" fontFamily="mono" mb={3}>
                  # Text Input with cursor
                </Text>
                <Box position="relative">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Enter command..."
                    bg="cli.bgAlt"
                    borderColor="cli.border"
                    color="cli.fg"
                    fontFamily="mono"
                    fontSize="sm"
                    _placeholder={{ color: "cli.comment" }}
                    _focus={{
                      borderColor: "cli.primary",
                      boxShadow: "0 0 0 1px var(--cli-primary)",
                    }}
                  />
                </Box>

                <Text fontSize="xs" color="cli.success" fontFamily="mono" mt={2}>
                  ✓ Value: {inputValue || "(empty)"}
                </Text>
              </Box>

              <Box>
                <Text fontSize="sm" color="cli.comment" fontFamily="mono" mb={3}>
                  # Textarea
                </Text>
                <Textarea
                  placeholder="#!/bin/bash&#10;echo 'Write your code...'"
                  bg="cli.bgAlt"
                  borderColor="cli.border"
                  color="cli.fg"
                  fontFamily="mono"
                  fontSize="sm"
                  rows={5}
                  _placeholder={{ color: "cli.comment" }}
                  _focus={{
                    borderColor: "cli.primary",
                    boxShadow: "0 0 0 1px var(--cli-primary)",
                  }}
                />
              </Box>
            </Grid>

            <Box className="code-block">
              <Code
                fontFamily="mono"
                fontSize="sm"
                bg="transparent"
                color="cli.fg"
                display="block"
                whiteSpace="pre"
              >
{`<Input
  bg="cli.bgAlt"
  borderColor="cli.border"
  color="cli.fg"
  fontFamily="mono"
  _focus={{
    borderColor: "cli.primary",
    boxShadow: "0 0 0 1px var(--cli-primary)"
  }}
/>`}
              </Code>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Buttons */}
      <Box py={16} bg="cli.bgAlt">
        <Container maxW="7xl">
          <Stack gap={8}>
            <Heading size="2xl" fontFamily="mono">
              Buttons
            </Heading>

            <HStack gap={4} flexWrap="wrap">
              <Button
                bg="cli.primary"
                color="cli.bg"
                fontFamily="mono"
                fontSize="sm"
                fontWeight="bold"
                _hover={{
                  bg: "cli.secondary",
                  transform: "translateY(-2px)",
                }}
                transition="all 0.2s"
              >
                $ execute
              </Button>

              <Button
                bg="transparent"
                color="cli.primary"
                borderWidth="2px"
                borderColor="cli.primary"
                fontFamily="mono"
                fontSize="sm"
                fontWeight="bold"
                _hover={{
                  bg: "cli.primary",
                  color: "cli.bg",
                }}
                transition="all 0.2s"
              >
                --secondary
              </Button>

              <Button
                bg="cli.bgHighlight"
                color="cli.fg"
                borderWidth="1px"
                borderColor="cli.border"
                fontFamily="mono"
                fontSize="sm"
                _hover={{
                  borderColor: "cli.primary",
                  color: "cli.primary",
                }}
                transition="all 0.2s"
              >
                [ghost]
              </Button>

              <Button
                bg="cli.success"
                color="cli.bg"
                fontFamily="mono"
                fontSize="sm"
                fontWeight="bold"
                _hover={{
                  transform: "scale(1.05)",
                }}
                transition="all 0.2s"
              >
                ✓ success
              </Button>

              <Button
                bg="cli.error"
                color="cli.bg"
                fontFamily="mono"
                fontSize="sm"
                fontWeight="bold"
                _hover={{
                  transform: "scale(1.05)",
                }}
                transition="all 0.2s"
              >
                ✗ error
              </Button>
            </HStack>

            <Box className="code-block">
              <Code
                fontFamily="mono"
                fontSize="sm"
                bg="transparent"
                color="cli.fg"
                display="block"
                whiteSpace="pre"
              >
{`<Button
  bg="cli.primary"
  color="cli.bg"
  fontFamily="mono"
  _hover={{
    bg: "cli.secondary",
    transform: "translateY(-2px)"
  }}
>
  $ execute
</Button>`}
              </Code>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Code Blocks */}
      <Box py={16}>
        <Container maxW="7xl">
          <Stack gap={8}>
            <Heading size="2xl" fontFamily="mono">
              Code Blocks
            </Heading>

            <Box className="terminal-window" p={6}>
              <Text fontSize="sm" color="cli.comment" fontFamily="mono" mb={4}>
                # example.ts
              </Text>
              <Code
                display="block"
                fontFamily="mono"
                fontSize="sm"
                bg="transparent"
                p={0}
                whiteSpace="pre"
                color="cli.fg"
              >
{`<Text as="span" color="cli.purple">import</Text> <Text as="span" color="cli.pink">{"{"}</Text> <Text as="span" color="cli.cyan">useState</Text> <Text as="span" color="cli.pink">{"}"}</Text> <Text as="span" color="cli.purple">from</Text> <Text as="span" color="cli.yellow">'react'</Text><Text as="span" color="cli.comment">;</Text>

<Text as="span" color="cli.purple">const</Text> <Text as="span" color="cli.green">MyComponent</Text> <Text as="span" color="cli.pink">=</Text> <Text as="span" color="cli.pink">()</Text> <Text as="span" color="cli.pink">=></Text> <Text as="span" color="cli.pink">{"{"}</Text>
  <Text as="span" color="cli.purple">const</Text> <Text as="span" color="cli.pink">[</Text><Text as="span" color="cli.fg">count</Text><Text as="span" color="cli.pink">,</Text> <Text as="span" color="cli.fg">setCount</Text><Text as="span" color="cli.pink">]</Text> <Text as="span" color="cli.pink">=</Text> <Text as="span" color="cli.cyan">useState</Text><Text as="span" color="cli.pink">(</Text><Text as="span" color="cli.orange">0</Text><Text as="span" color="cli.pink">)</Text><Text as="span" color="cli.comment">;</Text>

  <Text as="span" color="cli.purple">return</Text> <Text as="span" color="cli.pink"><</Text><Text as="span" color="cli.green">div</Text><Text as="span" color="cli.pink">></Text><Text as="span" color="cli.fg">Count: </Text><Text as="span" color="cli.pink">{"{"}</Text><Text as="span" color="cli.fg">count</Text><Text as="span" color="cli.pink">{"}"}</Text><Text as="span" color="cli.pink"><</Text><Text as="span" color="cli.pink">/</Text><Text as="span" color="cli.green">div</Text><Text as="span" color="cli.pink">></Text><Text as="span" color="cli.comment">;</Text>
<Text as="span" color="cli.pink">{"}"}</Text><Text as="span" color="cli.comment">;</Text>`}
              </Code>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Status Messages */}
      <Box py={16} bg="cli.bgAlt">
        <Container maxW="7xl">
          <Stack gap={8}>
            <Heading size="2xl" fontFamily="mono">
              Status Messages
            </Heading>

            <Stack gap={4}>
              <Box
                p={4}
                bg="cli.bgHighlight"
                borderLeft="4px solid"
                borderColor="cli.success"
                borderRadius="sm"
              >
                <Text fontFamily="mono" fontSize="sm" color="cli.success">
                  ✓ Build completed successfully
                </Text>
              </Box>

              <Box
                p={4}
                bg="cli.bgHighlight"
                borderLeft="4px solid"
                borderColor="cli.warning"
                borderRadius="sm"
              >
                <Text fontFamily="mono" fontSize="sm" color="cli.warning">
                  ⚠ Warning: Deprecated API usage detected
                </Text>
              </Box>

              <Box
                p={4}
                bg="cli.bgHighlight"
                borderLeft="4px solid"
                borderColor="cli.error"
                borderRadius="sm"
              >
                <Text fontFamily="mono" fontSize="sm" color="cli.error">
                  ✗ Error: Command not found
                </Text>
              </Box>

              <Box
                p={4}
                bg="cli.bgHighlight"
                borderLeft="4px solid"
                borderColor="cli.info"
                borderRadius="sm"
              >
                <Text fontFamily="mono" fontSize="sm" color="cli.info">
                  ℹ Info: Server running on port 3000
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Loading States */}
      <Box py={16}>
        <Container maxW="7xl">
          <Stack gap={8}>
            <Heading size="2xl" fontFamily="mono">
              Loading States
            </Heading>

            <Stack gap={6}>
              <Box>
                <Text fontSize="sm" color="cli.comment" fontFamily="mono" mb={3}>
                  # Progress Bar
                </Text>
                <Box
                  h="4px"
                  bg="cli.bgHighlight"
                  borderRadius="full"
                  overflow="hidden"
                >
                  <Box className="loading-bar" />
                </Box>
              </Box>

              <Box>
                <Text fontSize="sm" color="cli.comment" fontFamily="mono" mb={3}>
                  # Spinner
                </Text>
                <Text fontFamily="mono" fontSize="lg" color="cli.primary">
                  ⣾ Loading<span className="cli-cursor-line"></span>
                </Text>
              </Box>

              <Box>
                <Text fontSize="sm" color="cli.comment" fontFamily="mono" mb={3}>
                  # Dots Animation
                </Text>
                <Text fontFamily="mono" fontSize="sm" color="cli.fgAlt">
                  Processing<span style={{ animation: "blink 1s infinite" }}>...</span>
                </Text>
              </Box>
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* CLI Effects */}
      <Box py={16} bg="cli.bgAlt">
        <Container maxW="7xl">
          <Stack gap={8}>
            <Heading size="2xl" fontFamily="mono">
              CLI Effects
            </Heading>

            <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap={6}>
              <Box className="terminal-window" p={6}>
                <Text fontSize="sm" color="cli.primary" fontFamily="mono" mb={4}>
                  # Cursor Blink
                </Text>
                <Text fontFamily="mono">
                  Type here<span className="cli-cursor"></span>
                </Text>
              </Box>

              <Box className="terminal-window" p={6}>
                <Text fontSize="sm" color="cli.secondary" fontFamily="mono" mb={4}>
                  # Neon Glow
                </Text>
                <Text fontFamily="mono" className="neon-glow" color="cli.primary">
                  Glowing Text Effect
                </Text>
              </Box>

              <Box className="terminal-window scanlines" p={6}>
                <Text fontSize="sm" color="cli.accent" fontFamily="mono" mb={4}>
                  # Scanlines
                </Text>
                <Text fontFamily="mono">
                  CRT monitor effect
                </Text>
              </Box>

              <Box className="terminal-window" p={6}>
                <Text fontSize="sm" color="cli.cyan" fontFamily="mono" mb={4}>
                  # Monospace Grid
                </Text>
                <Grid templateColumns="repeat(3, 1fr)" gap={2} fontFamily="mono" fontSize="xs">
                  {["[██]", "[▓▓]", "[▒▒]", "[░░]", "[--]", "[++]"].map((item, i) => (
                    <Box key={i} p={2} bg="cli.bgHighlight" textAlign="center">
                      {item}
                    </Box>
                  ))}
                </Grid>
              </Box>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Footer */}
      <Box
        py={16}
        borderTop="2px solid"
        borderColor="cli.border"
      >
        <Container maxW="4xl">
          <Stack gap={4} textAlign="center">
            <Text fontSize="xl" fontFamily="mono" color="cli.primary">
              $ git clone https://github.com/ai-agency/components
            </Text>
            <Text color="cli.comment" fontFamily="mono" fontSize="sm">
              All components. Production ready. Copy-paste friendly.
            </Text>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
