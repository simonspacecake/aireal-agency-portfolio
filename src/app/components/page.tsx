'use client'

import { Box, Grid, Stack, Text, HStack, Input, Textarea, Button, Code } from "@chakra-ui/react"
import { useState } from "react"
import { HiTerminal, HiCube } from "react-icons/hi"
import Link from "next/link"

export default function ComponentsPage() {
  const [inputValue, setInputValue] = useState("")

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
              <HiCube size={40} color="var(--cli-primary)" />
              <Text fontSize="var(--text-sm)" color="var(--cli-comment)" fontFamily="var(--font-mono)">
                ~/components/library
              </Text>
            </HStack>

            <Text
              as="h1"
              fontSize={{ base: "var(--text-4xl)", md: "var(--text-5xl)" }}
              fontFamily="var(--font-display)"
              fontWeight="var(--font-black)"
              lineHeight="var(--leading-tight)"
            >
              <Text as="span" color="var(--cli-primary)">$</Text> ui{" "}
              <Text as="span" color="var(--cli-secondary)">--components</Text>
              <span className="cli-cursor-line"></span>
            </Text>

            <Text
              fontSize="var(--text-xl)"
              color="var(--cli-fgAlt)"
              fontFamily="var(--font-mono)"
            >
              All UI components. Interactive previews. Copy-paste ready.
            </Text>
          </Stack>
        </Box>
      </Box>

      {/* Terminal Window */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }} background="var(--cli-bgAlt)">
        <Box className="container">
          <Stack gap="var(--space-8)">
            <Box>
              <Text fontSize="var(--text-2xl)" fontFamily="var(--font-display)" fontWeight="var(--font-bold)" mb="var(--space-2)">
                Terminal Window
              </Text>
              <Text color="var(--cli-comment)" fontFamily="var(--font-mono)" fontSize="var(--text-sm)">
                # Terminal UI component with header
              </Text>
            </Box>

            <Box className="terminal-window">
              <Box className="terminal-header">
                <span className="terminal-button close"></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
                <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                  terminal.tsx
                </Text>
              </Box>
              <Box className="terminal-body">
                <Text fontFamily="var(--font-mono)" fontSize="var(--text-sm)">
                  <Text as="span" color="var(--cli-success)">user@localhost</Text>
                  <Text as="span" color="var(--cli-fgAlt)">:</Text>
                  <Text as="span" color="var(--cli-cyan)">~</Text>
                  <Text as="span" color="var(--cli-primary)">$</Text> npm run dev
                </Text>
                <Text fontFamily="var(--font-mono)" fontSize="var(--text-sm)" color="var(--cli-comment)" mt="var(--space-2)">
                  Starting development server...
                </Text>
                <Text fontFamily="var(--font-mono)" fontSize="var(--text-sm)" color="var(--cli-success)" mt="var(--space-1)">
                  ✓ Ready on http://localhost:3000
                </Text>
              </Box>
            </Box>

            <Box className="code-block" background="var(--cli-bgAlt)" borderRadius="var(--border-radius)" p="var(--space-4)">
              <Code fontFamily="var(--font-mono)" fontSize="var(--text-xs)" background="transparent" color="var(--cli-fg)">
{`<Box className="terminal-window">
  <Box className="terminal-header">
    <span className="terminal-button close"></span>
    <span className="terminal-button minimize"></span>
    <span className="terminal-button maximize"></span>
    <Text>filename.tsx</Text>
  </Box>
  <Box className="terminal-body">
    Your content here
  </Box>
</Box>`}
              </Code>
            </Box>
          </Stack>
        </Box>
      </Box>

      {/* Buttons */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }}>
        <Box className="container">
          <Stack gap="var(--space-8)">
            <Box>
              <Text fontSize="var(--text-2xl)" fontFamily="var(--font-display)" fontWeight="var(--font-bold)" mb="var(--space-2)">
                Buttons
              </Text>
              <Text color="var(--cli-comment)" fontFamily="var(--font-mono)" fontSize="var(--text-sm)">
                # CLI-styled button components
              </Text>
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="var(--space-6)">
              <Box className="terminal-window">
                <Box className="terminal-header">
                  <span className="terminal-button close"></span>
                  <span className="terminal-button minimize"></span>
                  <span className="terminal-button maximize"></span>
                  <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">Primary</Text>
                </Box>
                <Box className="terminal-body">
                  <Stack gap="var(--space-4)">
                    <Box className="btn btn-primary">
                      $ primary-button
                    </Box>
                    <Code fontFamily="var(--font-mono)" fontSize="var(--text-xs)" background="var(--cli-bgHighlight)" p="var(--space-2)" borderRadius="var(--border-radius-sm)">
                      className="btn btn-primary"
                    </Code>
                  </Stack>
                </Box>
              </Box>

              <Box className="terminal-window">
                <Box className="terminal-header">
                  <span className="terminal-button close"></span>
                  <span className="terminal-button minimize"></span>
                  <span className="terminal-button maximize"></span>
                  <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">Outline</Text>
                </Box>
                <Box className="terminal-body">
                  <Stack gap="var(--space-4)">
                    <Box className="btn btn-outline">
                      --outline-button
                    </Box>
                    <Code fontFamily="var(--font-mono)" fontSize="var(--text-xs)" background="var(--cli-bgHighlight)" p="var(--space-2)" borderRadius="var(--border-radius-sm)">
                      className="btn btn-outline"
                    </Code>
                  </Stack>
                </Box>
              </Box>

              <Box className="terminal-window">
                <Box className="terminal-header">
                  <span className="terminal-button close"></span>
                  <span className="terminal-button minimize"></span>
                  <span className="terminal-button maximize"></span>
                  <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">Success</Text>
                </Box>
                <Box className="terminal-body">
                  <Stack gap="var(--space-4)">
                    <Box className="btn btn-success">
                      ✓ success-button
                    </Box>
                    <Code fontFamily="var(--font-mono)" fontSize="var(--text-xs)" background="var(--cli-bgHighlight)" p="var(--space-2)" borderRadius="var(--border-radius-sm)">
                      className="btn btn-success"
                    </Code>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Stack>
        </Box>
      </Box>

      {/* Form Elements */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }} background="var(--cli-bgAlt)">
        <Box className="container">
          <Stack gap="var(--space-8)">
            <Box>
              <Text fontSize="var(--text-2xl)" fontFamily="var(--font-display)" fontWeight="var(--font-bold)" mb="var(--space-2)">
                Form Elements
              </Text>
              <Text color="var(--cli-comment)" fontFamily="var(--font-mono)" fontSize="var(--text-sm)">
                # Input fields and textareas
              </Text>
            </Box>

            <Grid templateColumns={{ base: "1fr", lg: "repeat(2, 1fr)" }} gap="var(--space-6)">
              <Box className="terminal-window">
                <Box className="terminal-header">
                  <span className="terminal-button close"></span>
                  <span className="terminal-button minimize"></span>
                  <span className="terminal-button maximize"></span>
                  <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">Input Field</Text>
                </Box>
                <Box className="terminal-body">
                  <Stack gap="var(--space-4)">
                    <Input
                      className="input"
                      placeholder="$ enter command..."
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'var(--text-sm)',
                        padding: 'var(--space-3)',
                        background: 'var(--cli-bgAlt)',
                        border: 'var(--border-width) solid var(--cli-border)',
                        borderRadius: 'var(--border-radius)',
                        color: 'var(--cli-fg)',
                      }}
                    />
                    <Text fontFamily="var(--font-mono)" fontSize="var(--text-xs)" color="var(--cli-comment)">
                      Value: {inputValue || '(empty)'}
                    </Text>
                  </Stack>
                </Box>
              </Box>

              <Box className="terminal-window">
                <Box className="terminal-header">
                  <span className="terminal-button close"></span>
                  <span className="terminal-button minimize"></span>
                  <span className="terminal-button maximize"></span>
                  <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">Textarea</Text>
                </Box>
                <Box className="terminal-body">
                  <Textarea
                    className="textarea"
                    placeholder="# enter multi-line text..."
                    rows={4}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'var(--text-sm)',
                      padding: 'var(--space-3)',
                      background: 'var(--cli-bgAlt)',
                      border: 'var(--border-width) solid var(--cli-border)',
                      borderRadius: 'var(--border-radius)',
                      color: 'var(--cli-fg)',
                    }}
                  />
                </Box>
              </Box>
            </Grid>
          </Stack>
        </Box>
      </Box>

      {/* Code Blocks */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }}>
        <Box className="container">
          <Stack gap="var(--space-8)">
            <Box>
              <Text fontSize="var(--text-2xl)" fontFamily="var(--font-display)" fontWeight="var(--font-bold)" mb="var(--space-2)">
                Code Blocks
              </Text>
              <Text color="var(--cli-comment)" fontFamily="var(--font-mono)" fontSize="var(--text-sm)">
                # Syntax highlighting examples
              </Text>
            </Box>

            <Box className="terminal-window">
              <Box className="terminal-header">
                <span className="terminal-button close"></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
                <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">example.tsx</Text>
              </Box>
              <Box className="terminal-body">
                <Code fontFamily="var(--font-mono)" fontSize="var(--text-sm)" background="transparent" color="var(--cli-fg)" display="block">
                  <pre>
{`import { Box } from "@chakra-ui/react"

export default function Component() {
  return (
    <Box className="terminal-window">
      <Box className="terminal-body">
        <Text color="var(--cli-success)">
          ✓ Component rendered successfully
        </Text>
      </Box>
    </Box>
  )
}`}
                  </pre>
                </Code>
              </Box>
            </Box>
          </Stack>
        </Box>
      </Box>

      {/* Cards */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }} background="var(--cli-bgAlt)">
        <Box className="container">
          <Stack gap="var(--space-8)">
            <Box>
              <Text fontSize="var(--text-2xl)" fontFamily="var(--font-display)" fontWeight="var(--font-bold)" mb="var(--space-2)">
                Cards
              </Text>
              <Text color="var(--cli-comment)" fontFamily="var(--font-mono)" fontSize="var(--text-sm)">
                # Card component variations
              </Text>
            </Box>

            <Grid templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }} gap="var(--space-6)">
              {[
                { title: "Default Card", desc: "Standard card with border", color: "var(--cli-primary)" },
                { title: "Info Card", desc: "Card with status indicator", color: "var(--cli-cyan)" },
                { title: "Success Card", desc: "Card with success state", color: "var(--cli-success)" },
              ].map((card) => (
                <Box
                  key={card.title}
                  className="card"
                  borderLeft="4px solid"
                  borderColor={card.color}
                >
                  <Text fontSize="var(--text-lg)" fontWeight="var(--font-bold)" mb="var(--space-2)" color={card.color}>
                    {card.title}
                  </Text>
                  <Text fontSize="var(--text-sm)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                    {card.desc}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Stack>
        </Box>
      </Box>

      {/* CTA */}
      <Box
        py={{ base: "var(--space-16)", md: "var(--space-20)" }}
        borderTop="var(--border-width-thick) solid var(--cli-border)"
      >
        <Box className="container">
          <Stack gap="var(--space-6)" textAlign="center" maxW="3xl" mx="auto">
            <Text
              fontSize={{ base: "var(--text-2xl)", md: "var(--text-3xl)" }}
              fontWeight="var(--font-bold)"
            >
              Need Custom Components?
            </Text>
            <Text fontSize="var(--text-lg)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
              We build custom UI components tailored to your needs.
            </Text>
            <HStack justify="center" gap="var(--space-4)">
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-primary">
                  $ request --quote
                </Box>
              </Link>
              <Link href="/brand" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-outline">
                  --view-brand
                </Box>
              </Link>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
