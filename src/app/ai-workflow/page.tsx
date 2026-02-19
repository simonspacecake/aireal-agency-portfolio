'use client'

import { Box, Grid, Stack, Text, HStack } from "@chakra-ui/react"
import Link from "next/link"
import { HiUser, HiLightningBolt, HiUserGroup, HiCog } from "react-icons/hi"
import type { WorkflowStep } from "@/types"

const workflowSteps: WorkflowStep[] = [
  {
    id: 1,
    title: "Discovery & Requirements",
    description: "We work closely with you to understand your goals, challenges, and vision. This human-led phase ensures we're solving the right problems.",
    type: "human",
  },
  {
    id: 2,
    title: "AI-Assisted Planning",
    description: "Our team collaborates with AI agents to rapidly explore architectural options, identify potential challenges, and create detailed technical specifications.",
    type: "collaborative",
  },
  {
    id: 3,
    title: "AI Code Generation",
    description: "AI tools scaffold the initial codebase, generate boilerplate, and implement standard patterns - dramatically accelerating development.",
    type: "ai",
  },
  {
    id: 4,
    title: "Human Review & Refinement",
    description: "Expert developers review all AI-generated code, refactor for quality, add business logic, and ensure best practices are followed.",
    type: "human",
  },
  {
    id: 5,
    title: "Collaborative Testing",
    description: "AI generates comprehensive test suites while humans design edge cases and integration tests. Automated and manual testing work in tandem.",
    type: "collaborative",
  },
  {
    id: 6,
    title: "AI-Enhanced Optimization",
    description: "AI tools identify performance bottlenecks, suggest optimizations, and auto-fix common issues. Humans make final optimization decisions.",
    type: "collaborative",
  },
  {
    id: 7,
    title: "Human QA & Deployment",
    description: "Final quality assurance, security review, and deployment are overseen by experienced engineers to ensure production readiness.",
    type: "human",
  },
  {
    id: 8,
    title: "Continuous Monitoring",
    description: "AI-powered monitoring detects issues in real-time while humans respond to alerts and make strategic improvements.",
    type: "collaborative",
  },
]

const technologyStack = {
  aiModels: [
    { name: "Claude 4.5", use: "Architecture planning, code review, complex problem solving" },
    { name: "GPT-4", use: "Code generation, documentation, testing" },
    { name: "Gemini", use: "Multi-modal analysis, design feedback" },
  ],
  developmentTools: [
    { name: "Claude Code CLI", use: "AI-assisted development in terminal" },
    { name: "Cursor", use: "AI-powered code editor" },
    { name: "GitHub Copilot", use: "Inline code suggestions" },
  ],
  qualityGates: [
    { name: "Automated Testing", use: "Unit, integration, and E2E tests" },
    { name: "Code Review", use: "Human review of all code changes" },
    { name: "Security Scanning", use: "Automated vulnerability detection" },
  ],
}

const getStepIcon = (type: string) => {
  switch (type) {
    case "human":
      return HiUser
    case "ai":
      return HiLightningBolt
    case "collaborative":
      return HiUserGroup
    default:
      return HiUser
  }
}

const getStepColor = (type: string) => {
  switch (type) {
    case "human":
      return "var(--cli-accent)"
    case "ai":
      return "var(--cli-primary)"
    case "collaborative":
      return "var(--cli-success)"
    default:
      return "var(--cli-fgAlt)"
  }
}

export default function AIWorkflowPage() {
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
              <HiCog size={24} color="var(--cli-primary)" />
              <Text fontFamily="var(--font-mono)" fontSize="var(--text-sm)" color="var(--cli-comment)">
                ~/workflow/human-in-loop.sh
              </Text>
            </HStack>

            <Text
              as="h1"
              fontSize={{ base: "var(--text-4xl)", md: "var(--text-5xl)" }}
              fontWeight="var(--font-black)"
              lineHeight="var(--leading-tight)"
            >
              <Text as="span" color="var(--cli-primary)">$</Text> ./workflow{" "}
              <Text as="span" color="var(--cli-secondary)">--human-in-loop</Text>
              <span className="cli-cursor-line"></span>
            </Text>

            <Text
              fontSize="var(--text-lg)"
              color="var(--cli-fgAlt)"
              fontFamily="var(--font-mono)"
              lineHeight="var(--leading-relaxed)"
            >
              Human expertise + AI velocity. Faster delivery without compromising quality.
            </Text>
          </Stack>
        </Box>
      </Box>

      {/* Introduction */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }} background="var(--cli-bgAlt)">
        <Box className="container">
          <Stack gap="var(--space-8)" textAlign="center" maxW="3xl" mx="auto">
            <Text
              fontFamily="var(--font-mono)"
              fontSize="var(--text-sm)"
              color="var(--cli-primary)"
            >
              $ cat workflow-overview.md
            </Text>
            <Text
              fontSize={{ base: "var(--text-2xl)", md: "var(--text-3xl)" }}
              fontWeight="var(--font-bold)"
            >
              The Best of Both Worlds
            </Text>
            <Text fontSize="var(--text-base)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
              # AI is a powerful tool, not a replacement for human expertise
              <br />
              # Our workflow leverages AI for speed and scale
              <br />
              # While maintaining human oversight for quality and creativity
            </Text>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap="var(--space-6)"
              pt="var(--space-8)"
            >
              {[
                {
                  icon: HiUser,
                  color: "var(--cli-accent)",
                  label: "Human-Led",
                  desc: "Strategy, creativity, and final decisions",
                },
                {
                  icon: HiLightningBolt,
                  color: "var(--cli-primary)",
                  label: "AI-Powered",
                  desc: "Code generation, testing, optimization",
                },
                {
                  icon: HiUserGroup,
                  color: "var(--cli-success)",
                  label: "Collaborative",
                  desc: "Best results from human-AI teamwork",
                },
              ].map((item) => (
                <Box
                  key={item.label}
                  p="var(--space-6)"
                  background="var(--cli-bg)"
                  border="var(--border-width) solid var(--cli-border)"
                  borderRadius="var(--border-radius-lg)"
                >
                  <Box
                    as={item.icon}
                    fontSize="var(--text-4xl)"
                    color={item.color}
                    mb="var(--space-3)"
                    mx="auto"
                    width="fit-content"
                  />
                  <Text fontSize="var(--text-lg)" fontWeight="var(--font-bold)" mb="var(--space-2)">
                    {item.label}
                  </Text>
                  <Text fontSize="var(--text-sm)" color="var(--cli-fgAlt)">
                    {item.desc}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Stack>
        </Box>
      </Box>

      {/* Workflow Steps */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }}>
        <Box className="container">
          <Stack gap="var(--space-10)">
            <Box textAlign="center">
              <Text
                fontFamily="var(--font-mono)"
                fontSize="var(--text-sm)"
                color="var(--cli-primary)"
                mb="var(--space-2)"
              >
                $ cat workflow-steps.json | jq '.steps[]'
              </Text>
              <Text fontSize="var(--text-2xl)" fontWeight="var(--font-bold)" mb="var(--space-2)">
                8-Step Development Workflow
              </Text>
              <Text fontSize="var(--text-base)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                Each project follows this proven workflow, ensuring quality at every stage
              </Text>
            </Box>

            <Stack gap="var(--space-6)">
              {workflowSteps.map((step) => (
                <Box
                  key={step.id}
                  background="var(--cli-bgAlt)"
                  p="var(--space-6)"
                  borderRadius="var(--border-radius-lg)"
                  borderLeft="4px solid"
                  borderColor={getStepColor(step.type)}
                  transition="all var(--transition-base)"
                  _hover={{
                    transform: "translateX(4px)",
                    boxShadow: "var(--shadow-lg)",
                  }}
                >
                  <Grid
                    templateColumns={{ base: "1fr", md: "auto 1fr" }}
                    gap="var(--space-6)"
                    alignItems="center"
                  >
                    <HStack gap="var(--space-4)">
                      <Box
                        w="50px"
                        h="50px"
                        borderRadius="var(--border-radius-full)"
                        background={getStepColor(step.type)}
                        color="var(--cli-bg)"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="var(--font-bold)"
                        fontSize="var(--text-xl)"
                        fontFamily="var(--font-mono)"
                      >
                        {step.id}
                      </Box>
                      <Box
                        as={getStepIcon(step.type)}
                        fontSize="var(--text-2xl)"
                        color={getStepColor(step.type)}
                        display={{ base: "none", md: "block" }}
                      />
                    </HStack>

                    <Box>
                      <HStack mb="var(--space-2)" gap="var(--space-3)" flexWrap="wrap">
                        <Text fontSize="var(--text-lg)" fontWeight="var(--font-bold)">
                          {step.title}
                        </Text>
                        <Text
                          fontSize="var(--text-xs)"
                          px="var(--space-2)"
                          py="var(--space-1)"
                          background={getStepColor(step.type)}
                          color="var(--cli-bg)"
                          borderRadius="var(--border-radius)"
                          fontFamily="var(--font-mono)"
                        >
                          {step.type}
                        </Text>
                      </HStack>
                      <Text color="var(--cli-fgAlt)" fontSize="var(--text-sm)">
                        {step.description}
                      </Text>
                    </Box>
                  </Grid>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Box>
      </Box>

      {/* Technology Stack */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }} background="var(--cli-bgAlt)">
        <Box className="container">
          <Stack gap="var(--space-10)">
            <Box textAlign="center">
              <Text
                fontFamily="var(--font-mono)"
                fontSize="var(--text-sm)"
                color="var(--cli-primary)"
                mb="var(--space-2)"
              >
                $ ls -la ./ai-tools
              </Text>
              <Text fontSize="var(--text-2xl)" fontWeight="var(--font-bold)" mb="var(--space-2)">
                Technology Stack
              </Text>
              <Text fontSize="var(--text-base)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                The AI tools and systems that power our development workflow
              </Text>
            </Box>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap="var(--space-8)"
            >
              <Box className="terminal-window">
                <Box className="terminal-header">
                  <span className="terminal-button close"></span>
                  <span className="terminal-button minimize"></span>
                  <span className="terminal-button maximize"></span>
                  <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">
                    ai-models.txt
                  </Text>
                </Box>
                <Box className="terminal-body">
                  <Text fontSize="var(--text-lg)" fontWeight="var(--font-bold)" mb="var(--space-4)" color="var(--cli-primary)">
                    # AI Models
                  </Text>
                  <Stack gap="var(--space-4)">
                    {technologyStack.aiModels.map((tech) => (
                      <Box key={tech.name}>
                        <Text fontWeight="var(--font-semibold)" mb="var(--space-1)" color="var(--cli-success)">
                          → {tech.name}
                        </Text>
                        <Text fontSize="var(--text-sm)" color="var(--cli-fgAlt)">
                          {tech.use}
                        </Text>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Box>

              <Box className="terminal-window">
                <Box className="terminal-header">
                  <span className="terminal-button close"></span>
                  <span className="terminal-button minimize"></span>
                  <span className="terminal-button maximize"></span>
                  <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">
                    dev-tools.txt
                  </Text>
                </Box>
                <Box className="terminal-body">
                  <Text fontSize="var(--text-lg)" fontWeight="var(--font-bold)" mb="var(--space-4)" color="var(--cli-primary)">
                    # Development Tools
                  </Text>
                  <Stack gap="var(--space-4)">
                    {technologyStack.developmentTools.map((tech) => (
                      <Box key={tech.name}>
                        <Text fontWeight="var(--font-semibold)" mb="var(--space-1)" color="var(--cli-success)">
                          → {tech.name}
                        </Text>
                        <Text fontSize="var(--text-sm)" color="var(--cli-fgAlt)">
                          {tech.use}
                        </Text>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Box>

              <Box className="terminal-window">
                <Box className="terminal-header">
                  <span className="terminal-button close"></span>
                  <span className="terminal-button minimize"></span>
                  <span className="terminal-button maximize"></span>
                  <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">
                    quality-gates.txt
                  </Text>
                </Box>
                <Box className="terminal-body">
                  <Text fontSize="var(--text-lg)" fontWeight="var(--font-bold)" mb="var(--space-4)" color="var(--cli-primary)">
                    # Quality Gates
                  </Text>
                  <Stack gap="var(--space-4)">
                    {technologyStack.qualityGates.map((tech) => (
                      <Box key={tech.name}>
                        <Text fontWeight="var(--font-semibold)" mb="var(--space-1)" color="var(--cli-success)">
                          → {tech.name}
                        </Text>
                        <Text fontSize="var(--text-sm)" color="var(--cli-fgAlt)">
                          {tech.use}
                        </Text>
                      </Box>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Grid>
          </Stack>
        </Box>
      </Box>

      {/* CTA Section */}
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
              Experience the Future of Development
            </Text>
            <Text fontSize="var(--text-lg)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
              See how our AI-enhanced workflow can accelerate your project while maintaining
              the highest quality standards.
            </Text>
            <HStack justify="center" gap="var(--space-4)" flexWrap="wrap">
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-primary">
                  $ init --project
                </Box>
              </Link>
              <Link href="/lookbook" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-outline">
                  --view-results
                </Box>
              </Link>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
