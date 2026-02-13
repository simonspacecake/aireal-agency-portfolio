'use client'

import { Box, Container, Heading, Text, Stack, Grid, Badge, HStack } from "@chakra-ui/react"
import Hero from "@/components/Hero"
import CTAButton from "@/components/CTAButton"
import { HiUser, HiLightningBolt, HiUserGroup } from "react-icons/hi"
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
      return "accent"
    case "ai":
      return "brand"
    case "collaborative":
      return "green"
    default:
      return "gray"
  }
}

export default function AIWorkflowPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Hero
        title="Human-in-the-Loop AI Workflow"
        subtitle="We combine the speed and scalability of AI with the creativity and judgment of expert developers. The result: faster delivery without compromising quality."
        primaryCTA={{
          text: "See How It Works",
          href: "#workflow",
        }}
        secondaryCTA={{
          text: "Start Your Project",
          href: "/contact",
        }}
      />

      {/* Introduction */}
      <Box py={{ base: 16, md: 20 }} bg="white" _dark={{ bg: "gray.800" }}>
        <Container maxW="5xl">
          <Stack gap={8} textAlign="center">
            <Heading size={{ base: "xl", md: "2xl" }}>
              The Best of Both Worlds
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              maxW="3xl"
              mx="auto"
            >
              AI is a powerful tool, but it's not a replacement for human expertise.
              Our workflow leverages AI for speed and scale while maintaining human oversight
              for quality, creativity, and strategic decision-making.
            </Text>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap={8}
              pt={8}
            >
              {[
                {
                  icon: HiUser,
                  color: "accent",
                  label: "Human-Led",
                  desc: "Strategy, creativity, and final decisions",
                },
                {
                  icon: HiLightningBolt,
                  color: "brand",
                  label: "AI-Powered",
                  desc: "Code generation, testing, optimization",
                },
                {
                  icon: HiUserGroup,
                  color: "green",
                  label: "Collaborative",
                  desc: "Best results from human-AI teamwork",
                },
              ].map((item) => (
                <Box
                  key={item.label}
                  p={6}
                  bg="gray.50"
                  _dark={{ bg: "gray.900" }}
                  borderRadius="lg"
                >
                  <Box
                    as={item.icon}
                    fontSize="4xl"
                    color={`${item.color}.500`}
                    mb={3}
                    mx="auto"
                    width="fit-content"
                  />
                  <Heading size="md" mb={2}>
                    {item.label}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
                    {item.desc}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Workflow Steps */}
      <Box id="workflow" py={{ base: 16, md: 24 }} bg="gray.50" _dark={{ bg: "gray.900" }}>
        <Container maxW="7xl">
          <Stack gap={12}>
            <Box textAlign="center">
              <Badge colorPalette="brand" size="lg" mb={4}>
                Our Process
              </Badge>
              <Heading size={{ base: "xl", md: "2xl" }} mb={4}>
                8-Step Development Workflow
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                _dark={{ color: "gray.400" }}
                maxW="2xl"
                mx="auto"
              >
                Each project follows this proven workflow, ensuring quality at every stage
              </Text>
            </Box>

            <Stack gap={6}>
              {workflowSteps.map((step, index) => (
                <Box
                  key={step.id}
                  bg="white"
                  _dark={{ bg: "gray.800" }}
                  p={6}
                  borderRadius="lg"
                  borderLeft="4px solid"
                  borderColor={`${getStepColor(step.type)}.500`}
                  shadow="sm"
                  transition="all 0.3s"
                  _hover={{
                    shadow: "lg",
                    transform: "translateX(4px)",
                  }}
                >
                  <Grid
                    templateColumns={{ base: "1fr", md: "auto 1fr" }}
                    gap={6}
                    alignItems="center"
                  >
                    <HStack gap={4}>
                      <Box
                        w="50px"
                        h="50px"
                        borderRadius="full"
                        bg={`${getStepColor(step.type)}.500`}
                        color="white"
                        display="flex"
                        alignItems="center"
                        justifyContent="center"
                        fontWeight="bold"
                        fontSize="xl"
                      >
                        {step.id}
                      </Box>
                      <Box
                        as={getStepIcon(step.type)}
                        fontSize="2xl"
                        color={`${getStepColor(step.type)}.500`}
                        display={{ base: "none", md: "block" }}
                      />
                    </HStack>

                    <Box>
                      <HStack mb={2}>
                        <Heading size="md">{step.title}</Heading>
                        <Badge
                          colorPalette={getStepColor(step.type)}
                          size="sm"
                        >
                          {step.type}
                        </Badge>
                      </HStack>
                      <Text color="gray.600" _dark={{ color: "gray.400" }}>
                        {step.description}
                      </Text>
                    </Box>
                  </Grid>
                </Box>
              ))}
            </Stack>
          </Stack>
        </Container>
      </Box>

      {/* Technology Stack */}
      <Box py={{ base: 16, md: 24 }} bg="white" _dark={{ bg: "gray.800" }}>
        <Container maxW="7xl">
          <Stack gap={12}>
            <Box textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} mb={4}>
                Technology Stack
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                _dark={{ color: "gray.400" }}
                maxW="2xl"
                mx="auto"
              >
                The AI tools and systems that power our development workflow
              </Text>
            </Box>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(3, 1fr)" }}
              gap={8}
            >
              <Box
                bg="gray.50"
                _dark={{ bg: "gray.900" }}
                p={8}
                borderRadius="lg"
              >
                <Heading size="lg" mb={6}>
                  AI Models
                </Heading>
                <Stack gap={4}>
                  {technologyStack.aiModels.map((tech) => (
                    <Box key={tech.name}>
                      <Text fontWeight="semibold" mb={1}>
                        {tech.name}
                      </Text>
                      <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
                        {tech.use}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Box
                bg="gray.50"
                _dark={{ bg: "gray.900" }}
                p={8}
                borderRadius="lg"
              >
                <Heading size="lg" mb={6}>
                  Development Tools
                </Heading>
                <Stack gap={4}>
                  {technologyStack.developmentTools.map((tech) => (
                    <Box key={tech.name}>
                      <Text fontWeight="semibold" mb={1}>
                        {tech.name}
                      </Text>
                      <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
                        {tech.use}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Box>

              <Box
                bg="gray.50"
                _dark={{ bg: "gray.900" }}
                p={8}
                borderRadius="lg"
              >
                <Heading size="lg" mb={6}>
                  Quality Gates
                </Heading>
                <Stack gap={4}>
                  {technologyStack.qualityGates.map((tech) => (
                    <Box key={tech.name}>
                      <Text fontWeight="semibold" mb={1}>
                        {tech.name}
                      </Text>
                      <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
                        {tech.use}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* CTA Section */}
      <Box
        py={{ base: 16, md: 20 }}
        bgGradient="linear(to-r, brand.500, accent.500)"
      >
        <Container maxW="4xl">
          <Stack gap={6} textAlign="center" color="white">
            <Heading size={{ base: "xl", md: "2xl" }}>
              Experience the Future of Development
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} opacity={0.95}>
              See how our AI-enhanced workflow can accelerate your project while maintaining
              the highest quality standards.
            </Text>
            <HStack justify="center" gap={4} pt={4}>
              <CTAButton href="/contact" variant="secondary" size="lg">
                Start Your Project
              </CTAButton>
              <CTAButton href="/lookbook" variant="outline" size="lg">
                View Results
              </CTAButton>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
