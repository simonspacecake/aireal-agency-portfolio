'use client'

import { Box, Grid, Stack, Text, HStack } from "@chakra-ui/react"
import Link from "next/link"
import { HiTerminal, HiLightningBolt, HiChartBar, HiClock, HiShieldCheck, HiArrowRight } from "react-icons/hi"

export default function Home() {
  return (
    <Box minH="100vh" background="var(--cli-bg)" color="var(--cli-fg)">
      {/* Hero Section */}
      <Box
        py={{ base: "var(--space-20)", md: "var(--space-32)" }}
        position="relative"
        overflow="hidden"
        borderBottom="var(--border-width-thick) solid var(--cli-border)"
      >
        {/* Scanline effect background */}
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          opacity={0.02}
          pointerEvents="none"
          background="repeating-linear-gradient(0deg, var(--cli-fg), var(--cli-fg) 1px, transparent 1px, transparent 2px)"
        />

        <Box className="container" position="relative" zIndex={1}>
          <Stack gap="var(--space-6)" maxW="4xl" mx="auto" textAlign="center">
            {/* Terminal prompt */}
            <HStack justify="center" gap="var(--space-2)">
              <HiTerminal size={20} color="var(--cli-primary)" />
              <Text fontFamily="var(--font-mono)" fontSize="var(--text-sm)" color="var(--cli-comment)">
                user@ai-agency:~$
              </Text>
            </HStack>

            {/* Main Headline */}
            <Box>
              <Text
                as="h1"
                fontFamily="var(--font-display)"
                fontSize={{ base: "var(--text-4xl)", md: "var(--text-6xl)" }}
                fontWeight="var(--font-black)"
                lineHeight="var(--leading-tight)"
                color="var(--cli-fg)"
                mb="var(--space-4)"
              >
                <Text as="span" color="var(--cli-primary)">$</Text> ai-dev-agency
                <br />
                <Text as="span" color="var(--cli-secondary)">--build</Text>{" "}
                <Text as="span" color="var(--cli-accent)">--deploy</Text>{" "}
                <Text as="span" color="var(--cli-success)">--ship</Text>
                <span className="cli-cursor-line"></span>
              </Text>
            </Box>

            {/* Subtitle */}
            <Text
              fontSize={{ base: "var(--text-lg)", md: "var(--text-xl)" }}
              color="var(--cli-fgAlt)"
              fontFamily="var(--font-mono)"
              maxW="2xl"
              mx="auto"
              lineHeight="var(--leading-relaxed)"
            >
              Terminal-first AI development agency. Human expertise + AI velocity.
              <br />
              Ship production-ready applications 3x faster.
            </Text>

            {/* CTA Buttons */}
            <HStack justify="center" gap="var(--space-4)" flexWrap="wrap" mt="var(--space-6)">
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-primary">
                  $ init --project
                  <HiArrowRight />
                </Box>
              </Link>
              <Link href="/lookbook" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-outline">
                  --view-work
                </Box>
              </Link>
            </HStack>

            {/* Stats */}
            <HStack
              justify="center"
              gap="var(--space-8)"
              flexWrap="wrap"
              mt="var(--space-8)"
              fontFamily="var(--font-mono)"
              fontSize="var(--text-sm)"
            >
              <Box>
                <Text as="span" color="var(--cli-success)">✓</Text>{" "}
                <Text as="span" color="var(--cli-fg)" fontWeight="var(--font-bold)">3x</Text>{" "}
                <Text as="span" color="var(--cli-fgAlt)">faster</Text>
              </Box>
              <Box>
                <Text as="span" color="var(--cli-success)">✓</Text>{" "}
                <Text as="span" color="var(--cli-fg)" fontWeight="var(--font-bold)">50+</Text>{" "}
                <Text as="span" color="var(--cli-fgAlt)">projects</Text>
              </Box>
              <Box>
                <Text as="span" color="var(--cli-success)">✓</Text>{" "}
                <Text as="span" color="var(--cli-fg)" fontWeight="var(--font-bold)">97%</Text>{" "}
                <Text as="span" color="var(--cli-fgAlt)">on-time</Text>
              </Box>
            </HStack>
          </Stack>
        </Box>
      </Box>

      {/* Featured Projects */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-24)" }} background="var(--cli-bgAlt)">
        <Box className="container">
          <Stack gap="var(--space-12)">
            {/* Section Header */}
            <Box>
              <Text
                fontFamily="var(--font-mono)"
                fontSize="var(--text-sm)"
                color="var(--cli-primary)"
                mb="var(--space-2)"
              >
                $ ls -la ./projects/featured
              </Text>
              <Text
                as="h2"
                fontSize={{ base: "var(--text-3xl)", md: "var(--text-4xl)" }}
                fontWeight="var(--font-bold)"
                mb="var(--space-4)"
              >
                Recent Deployments
              </Text>
              <Text
                fontSize="var(--text-lg)"
                color="var(--cli-fgAlt)"
                fontFamily="var(--font-mono)"
              >
                Production applications built with AI-enhanced workflows
              </Text>
            </Box>

            {/* Project Cards */}
            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap="var(--space-6)"
            >
              {[
                {
                  title: "E-Commerce Platform",
                  metric: "+47% conversion",
                  tech: ["Next.js", "OpenAI", "Stripe"],
                  status: "deployed",
                },
                {
                  title: "AI Content Engine",
                  metric: "85% faster",
                  tech: ["Python", "Claude", "LangChain"],
                  status: "deployed",
                },
                {
                  title: "Analytics Dashboard",
                  metric: "10x processing",
                  tech: ["React", "TensorFlow", "MongoDB"],
                  status: "deployed",
                },
              ].map((project, i) => (
                <Box
                  key={i}
                  className="terminal-window"
                  transition="all var(--transition-base)"
                  cursor="pointer"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "var(--shadow-xl)",
                    borderColor: "var(--cli-primary)",
                  }}
                >
                  <Box className="terminal-header">
                    <span className="terminal-button close"></span>
                    <span className="terminal-button minimize"></span>
                    <span className="terminal-button maximize"></span>
                    <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">
                      {project.title}
                    </Text>
                  </Box>
                  <Box className="terminal-body">
                    <Stack gap="var(--space-3)">
                      <Text fontSize="var(--text-lg)" fontWeight="var(--font-bold)" color="var(--cli-success)">
                        {project.metric}
                      </Text>
                      <HStack gap="var(--space-2)" flexWrap="wrap">
                        {project.tech.map((t) => (
                          <Text
                            key={t}
                            fontSize="var(--text-xs)"
                            px="var(--space-2)"
                            py="var(--space-1)"
                            background="var(--cli-bgHighlight)"
                            borderRadius="var(--border-radius-sm)"
                            color="var(--cli-accent)"
                          >
                            {t}
                          </Text>
                        ))}
                      </HStack>
                      <Text fontSize="var(--text-xs)" color="var(--cli-comment)">
                        status: <Text as="span" color="var(--cli-success)">{project.status}</Text>
                      </Text>
                    </Stack>
                  </Box>
                </Box>
              ))}
            </Grid>

            <Box textAlign="center">
              <Link href="/lookbook" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-outline">
                  $ cd lookbook && ls -la
                </Box>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Box>

      {/* Why Choose Us */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-24)" }}>
        <Box className="container">
          <Stack gap="var(--space-12)">
            <Box textAlign="center">
              <Text
                fontFamily="var(--font-mono)"
                fontSize="var(--text-sm)"
                color="var(--cli-primary)"
                mb="var(--space-2)"
              >
                $ cat features.txt
              </Text>
              <Text
                as="h2"
                fontSize={{ base: "var(--text-3xl)", md: "var(--text-4xl)" }}
                fontWeight="var(--font-bold)"
              >
                Developer-First Approach
              </Text>
            </Box>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
              gap="var(--space-6)"
            >
              {[
                {
                  icon: HiLightningBolt,
                  title: "AI Velocity",
                  desc: "Ship 3x faster with AI-assisted development",
                },
                {
                  icon: HiChartBar,
                  title: "Data Driven",
                  desc: "Metrics & KPIs tracked from day one",
                },
                {
                  icon: HiClock,
                  title: "97% On-Time",
                  desc: "We respect deadlines and budgets",
                },
                {
                  icon: HiShieldCheck,
                  title: "Production Ready",
                  desc: "Tested, secure, documented code",
                },
              ].map((feature, i) => (
                <Box
                  key={i}
                  p="var(--space-6)"
                  background="var(--cli-bgAlt)"
                  border="var(--border-width) solid var(--cli-border)"
                  borderRadius="var(--border-radius-lg)"
                  transition="all var(--transition-base)"
                  _hover={{
                    borderColor: "var(--cli-primary)",
                    transform: "translateY(-2px)",
                  }}
                >
                  <Box
                    as={feature.icon}
                    fontSize="var(--text-4xl)"
                    color="var(--cli-primary)"
                    mb="var(--space-3)"
                  />
                  <Text
                    fontSize="var(--text-lg)"
                    fontWeight="var(--font-bold)"
                    mb="var(--space-2)"
                  >
                    {feature.title}
                  </Text>
                  <Text
                    fontSize="var(--text-sm)"
                    color="var(--cli-fgAlt)"
                    fontFamily="var(--font-mono)"
                  >
                    {feature.desc}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Stack>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box
        py={{ base: "var(--space-16)", md: "var(--space-20)" }}
        background="var(--cli-bgAlt)"
        borderTop="var(--border-width-thick) solid var(--cli-border)"
        borderBottom="var(--border-width-thick) solid var(--cli-border)"
      >
        <Box className="container">
          <Stack gap="var(--space-6)" textAlign="center" maxW="3xl" mx="auto">
            <Text
              as="h2"
              fontSize={{ base: "var(--text-3xl)", md: "var(--text-4xl)" }}
              fontWeight="var(--font-bold)"
              className="neon-glow"
            >
              Ready to Build?
            </Text>
            <Text
              fontSize="var(--text-lg)"
              color="var(--cli-fgAlt)"
              fontFamily="var(--font-mono)"
            >
              Let's turn your idea into production-ready code.
              <br />
              Free consultation. No commitment required.
            </Text>
            <HStack justify="center" gap="var(--space-4)" flexWrap="wrap">
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-primary">
                  $ init --consultation
                </Box>
              </Link>
              <Link href="/ai-workflow" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-outline">
                  --view-process
                </Box>
              </Link>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
