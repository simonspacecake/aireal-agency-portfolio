'use client'

import { Box, Grid, Stack, Text, HStack } from "@chakra-ui/react"
import Link from "next/link"
import { HiTerminal, HiFolder } from "react-icons/hi"

const projects = [
  {
    id: "1",
    title: "E-Commerce Platform",
    category: "web-app",
    description: "AI-powered product recommendations, real-time inventory, dynamic pricing optimization.",
    tech: ["Next.js 14", "TypeScript", "OpenAI", "PostgreSQL", "Stripe"],
    results: [
      { metric: "conversion rate", value: "+47%" },
      { metric: "avg order value", value: "+32%" },
      { metric: "page load time", value: "1.2s" },
    ],
  },
  {
    id: "2",
    title: "AI Content Engine",
    category: "ai-ml",
    description: "Multi-format content generation with Claude & GPT-4. Brand voice consistency, workflow automation.",
    tech: ["Python", "LangChain", "Claude API", "GPT-4", "Redis"],
    results: [
      { metric: "production time", value: "-85%" },
      { metric: "quality score", value: "9.4/10" },
      { metric: "cost savings", value: "$180K/yr" },
    ],
  },
  {
    id: "3",
    title: "Analytics Dashboard",
    category: "saas",
    description: "Real-time analytics with predictive insights, custom reporting, anomaly detection.",
    tech: ["Vue.js", "Python", "TensorFlow", "MongoDB", "WebSockets"],
    results: [
      { metric: "processing speed", value: "10x faster" },
      { metric: "user adoption", value: "94%" },
      { metric: "satisfaction", value: "4.9/5" },
    ],
  },
  {
    id: "4",
    title: "Healthcare Portal",
    category: "web-app",
    description: "HIPAA-compliant patient portal with telemedicine, scheduling, secure messaging.",
    tech: ["Next.js", "Node.js", "PostgreSQL", "WebRTC", "AWS"],
    results: [
      { metric: "patient engagement", value: "+156%" },
      { metric: "no-shows reduction", value: "-42%" },
      { metric: "admin workload", value: "-65%" },
    ],
  },
  {
    id: "5",
    title: "Fitness AI Coach",
    category: "mobile",
    description: "Personalized workout plans, nutrition tracking, computer vision form correction.",
    tech: ["React Native", "Python", "TensorFlow", "Firebase"],
    results: [
      { metric: "DAU growth", value: "+240%" },
      { metric: "90-day retention", value: "78%" },
      { metric: "avg session", value: "23 min" },
    ],
  },
  {
    id: "6",
    title: "Support AI Assistant",
    category: "ai-ml",
    description: "Autonomous customer support with sentiment analysis, multi-language, human handoff.",
    tech: ["Python", "Claude API", "LangChain", "PostgreSQL"],
    results: [
      { metric: "resolution time", value: "-68%" },
      { metric: "satisfaction", value: "4.8/5" },
      { metric: "cost savings", value: "$320K/yr" },
    ],
  },
]

const categories = ["all", "ai-ml", "web-app", "saas", "mobile"]

export default function LookbookPage() {
  return (
    <Box minH="100vh" background="var(--cli-bg)" color="var(--cli-fg)">
      {/* Hero */}
      <Box
        py={{ base: "var(--space-16)", md: "var(--space-20)" }}
        borderBottom="var(--border-width-thick) solid var(--cli-border)"
      >
        <Box className="container">
          <Stack gap="var(--space-6)" maxW="4xl" mx="auto" textAlign="center">
            <HStack justify="center" gap="var(--space-2)">
              <HiFolder size={24} color="var(--cli-primary)" />
              <Text fontFamily="var(--font-mono)" fontSize="var(--text-sm)" color="var(--cli-comment)">
                ~/projects/production
              </Text>
            </HStack>

            <Text
              as="h1"
              fontSize={{ base: "var(--text-4xl)", md: "var(--text-5xl)" }}
              fontWeight="var(--font-black)"
              lineHeight="var(--leading-tight)"
            >
              <Text as="span" color="var(--cli-primary)">$</Text> git log{" "}
              <Text as="span" color="var(--cli-secondary)">--projects</Text>
              <span className="cli-cursor-line"></span>
            </Text>

            <Text
              fontSize="var(--text-lg)"
              color="var(--cli-fgAlt)"
              fontFamily="var(--font-mono)"
              lineHeight="var(--leading-relaxed)"
            >
              Production deployments. Real results. AI-enhanced development.
            </Text>
          </Stack>
        </Box>
      </Box>

      {/* Filter Tags */}
      <Box
        py="var(--space-4)"
        background="var(--cli-bgAlt)"
        borderBottom="var(--border-width) solid var(--cli-border)"
        position="sticky"
        top="73px"
        style={{ zIndex: 'var(--z-sticky)' }}
      >
        <Box className="container">
          <HStack gap="var(--space-3)" flexWrap="wrap" justify="center">
            <Text fontFamily="var(--font-mono)" fontSize="var(--text-sm)" color="var(--cli-comment)">
              $ filter:
            </Text>
            {categories.map((cat) => (
              <Box
                key={cat}
                px="var(--space-3)"
                py="var(--space-2)"
                background={cat === "all" ? "var(--cli-primary)" : "var(--cli-bgHighlight)"}
                color={cat === "all" ? "var(--cli-bg)" : "var(--cli-fg)"}
                borderRadius="var(--border-radius)"
                fontSize="var(--text-sm)"
                fontFamily="var(--font-mono)"
                cursor="pointer"
                transition="all var(--transition-base)"
                _hover={{
                  background: cat === "all" ? "var(--cli-secondary)" : "var(--cli-primary)",
                  color: "var(--cli-bg)",
                }}
              >
                {cat}
              </Box>
            ))}
          </HStack>
        </Box>
      </Box>

      {/* Projects Grid */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }}>
        <Box className="container">
          <Stack gap="var(--space-10)">
            <Box>
              <Text
                fontFamily="var(--font-mono)"
                fontSize="var(--text-sm)"
                color="var(--cli-primary)"
                mb="var(--space-2)"
              >
                $ cat projects.json | jq '.deployed'
              </Text>
              <Text
                fontSize="var(--text-2xl)"
                fontWeight="var(--font-bold)"
                mb="var(--space-2)"
              >
                {projects.length} Deployed Projects
              </Text>
              <Text fontSize="var(--text-base)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                Sorted by impact → latest first
              </Text>
            </Box>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap="var(--space-8)"
            >
              {projects.map((project) => (
                <Box
                  key={project.id}
                  className="terminal-window"
                  transition="all var(--transition-base)"
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
                      {project.title}.md
                    </Text>
                  </Box>
                  <Box className="terminal-body">
                    <Stack gap="var(--space-4)">
                      {/* Title & Category */}
                      <Box>
                        <Text
                          fontSize="var(--text-xl)"
                          fontWeight="var(--font-bold)"
                          mb="var(--space-2)"
                        >
                          {project.title}
                        </Text>
                        <Text
                          fontSize="var(--text-xs)"
                          color="var(--cli-accent)"
                          fontFamily="var(--font-mono)"
                        >
                          category: {project.category}
                        </Text>
                      </Box>

                      {/* Description */}
                      <Text
                        fontSize="var(--text-sm)"
                        color="var(--cli-fgAlt)"
                        lineHeight="var(--leading-relaxed)"
                      >
                        {project.description}
                      </Text>

                      {/* Results */}
                      <Box>
                        <Text
                          fontSize="var(--text-xs)"
                          color="var(--cli-comment)"
                          mb="var(--space-2)"
                          fontFamily="var(--font-mono)"
                        >
                          # Results
                        </Text>
                        <Grid templateColumns="repeat(3, 1fr)" gap="var(--space-2)">
                          {project.results.map((result, idx) => (
                            <Box key={idx} textAlign="center">
                              <Text
                                fontSize="var(--text-lg)"
                                fontWeight="var(--font-bold)"
                                color="var(--cli-success)"
                              >
                                {result.value}
                              </Text>
                              <Text fontSize="var(--text-xs)" color="var(--cli-fgAlt)">
                                {result.metric}
                              </Text>
                            </Box>
                          ))}
                        </Grid>
                      </Box>

                      {/* Tech Stack */}
                      <Box>
                        <Text
                          fontSize="var(--text-xs)"
                          color="var(--cli-comment)"
                          mb="var(--space-2)"
                          fontFamily="var(--font-mono)"
                        >
                          # Tech Stack
                        </Text>
                        <HStack gap="var(--space-2)" flexWrap="wrap">
                          {project.tech.map((tech) => (
                            <Text
                              key={tech}
                              fontSize="var(--text-xs)"
                              px="var(--space-2)"
                              py="var(--space-1)"
                              background="var(--cli-bgHighlight)"
                              borderRadius="var(--border-radius-sm)"
                              color="var(--cli-cyan)"
                            >
                              {tech}
                            </Text>
                          ))}
                        </HStack>
                      </Box>
                    </Stack>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Stack>
        </Box>
      </Box>

      {/* CTA */}
      <Box
        py={{ base: "var(--space-16)", md: "var(--space-20)" }}
        background="var(--cli-bgAlt)"
        borderTop="var(--border-width-thick) solid var(--cli-border)"
      >
        <Box className="container">
          <Stack gap="var(--space-6)" textAlign="center" maxW="3xl" mx="auto">
            <Text
              fontSize={{ base: "var(--text-2xl)", md: "var(--text-3xl)" }}
              fontWeight="var(--font-bold)"
            >
              Your Project Could Be Next
            </Text>
            <Text fontSize="var(--text-lg)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
              Ready to build something with similar results?
            </Text>
            <HStack justify="center" gap="var(--space-4)">
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-primary">
                  $ init --project
                </Box>
              </Link>
              <Link href="/tech-stack" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-outline">
                  --tech-stack
                </Box>
              </Link>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
