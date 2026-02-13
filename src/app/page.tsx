'use client'

import { Box, Container, Heading, Text, Stack, Grid, HStack, Badge } from "@chakra-ui/react"
import Hero from "@/components/Hero"
import ProjectCard from "@/components/ProjectCard"
import CTAButton from "@/components/CTAButton"
import { HiLightningBolt, HiChartBar, HiClock, HiShieldCheck } from "react-icons/hi"
import type { Project } from "@/types"

const topProjects: Project[] = [
  {
    id: "1",
    title: "E-Commerce Platform Redesign",
    category: "Web Application",
    description: "Complete overhaul of an e-commerce platform with AI-powered product recommendations and real-time inventory management.",
    technologies: ["Next.js", "TypeScript", "OpenAI", "PostgreSQL", "Stripe"],
    results: [
      { metric: "conversion increase", value: "47%" },
      { metric: "page load improvement", value: "2.3s" },
    ],
  },
  {
    id: "2",
    title: "AI Content Generation System",
    category: "AI/ML Application",
    description: "Intelligent content generation platform leveraging GPT-4 and Claude for multi-format content creation with brand voice consistency.",
    technologies: ["Python", "LangChain", "Claude API", "Redis", "React"],
    results: [
      { metric: "time saved per article", value: "85%" },
      { metric: "content quality score", value: "9.2/10" },
    ],
  },
  {
    id: "3",
    title: "Real-Time Analytics Dashboard",
    category: "SaaS Platform",
    description: "Enterprise analytics platform with predictive insights, custom reporting, and automated anomaly detection.",
    technologies: ["Vue.js", "Python", "TensorFlow", "MongoDB", "WebSockets"],
    results: [
      { metric: "data processing speed", value: "10x" },
      { metric: "user engagement", value: "+156%" },
    ],
  },
]

const benefits = [
  {
    icon: HiLightningBolt,
    title: "Rapid Development",
    description: "Leveraging AI-assisted development to deliver projects 3x faster without compromising quality.",
  },
  {
    icon: HiChartBar,
    title: "Measurable Results",
    description: "Data-driven approach with clear metrics and KPIs. Track ROI from day one.",
  },
  {
    icon: HiClock,
    title: "On-Time Delivery",
    description: "97% on-time delivery rate. We respect your timeline and budget constraints.",
  },
  {
    icon: HiShieldCheck,
    title: "Enterprise Quality",
    description: "Production-ready code with comprehensive testing, security audits, and documentation.",
  },
]

export default function Home() {
  return (
    <Box>
      {/* Hero Section */}
      <Hero
        title="AI-Powered Development Agency"
        subtitle="Transform your ideas into production-ready applications with cutting-edge AI technology and expert development. Ship faster, scale smarter."
        primaryCTA={{
          text: "Book Discovery Call",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Our Work",
          href: "/lookbook",
        }}
      />

      {/* Top Performing Projects Section */}
      <Box py={{ base: 16, md: 24 }} bg="white" _dark={{ bg: "gray.800" }}>
        <Container maxW="7xl">
          <Stack gap={12}>
            <Box textAlign="center">
              <Badge colorPalette="brand" size="lg" mb={4}>
                Featured Work
              </Badge>
              <Heading size={{ base: "xl", md: "2xl" }} mb={4}>
                Top Performing Web Apps
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                _dark={{ color: "gray.400" }}
                maxW="2xl"
                mx="auto"
              >
                Real projects, real results. See how we've helped businesses achieve their goals
                with innovative AI-powered solutions.
              </Text>
            </Box>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
              gap={6}
            >
              {topProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </Grid>

            <Box textAlign="center">
              <CTAButton href="/lookbook" variant="outline" size="lg">
                View Full Portfolio
              </CTAButton>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Box py={{ base: 16, md: 24 }} bg="gray.50" _dark={{ bg: "gray.900" }}>
        <Container maxW="7xl">
          <Stack gap={12}>
            <Box textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} mb={4}>
                Why Partner With Us
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                _dark={{ color: "gray.400" }}
                maxW="2xl"
                mx="auto"
              >
                We combine human expertise with AI capabilities to deliver exceptional results
              </Text>
            </Box>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(4, 1fr)" }}
              gap={8}
            >
              {benefits.map((benefit) => (
                <Box
                  key={benefit.title}
                  p={6}
                  bg="white"
                  _dark={{ bg: "gray.800" }}
                  borderRadius="lg"
                  shadow="sm"
                  transition="all 0.3s"
                  _hover={{
                    shadow: "lg",
                    transform: "translateY(-4px)",
                  }}
                >
                  <Box
                    as={benefit.icon}
                    fontSize="3xl"
                    color="brand.500"
                    mb={4}
                  />
                  <Heading size="md" mb={2}>
                    {benefit.title}
                  </Heading>
                  <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
                    {benefit.description}
                  </Text>
                </Box>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Mid-page CTA Section */}
      <Box
        py={{ base: 16, md: 20 }}
        bgGradient="linear(to-r, brand.500, accent.500)"
        position="relative"
        overflow="hidden"
      >
        <Container maxW="4xl" position="relative" zIndex={1}>
          <Stack gap={6} textAlign="center" color="white">
            <Heading size={{ base: "xl", md: "2xl" }}>
              Ready to Build Something Amazing?
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} opacity={0.95}>
              Let's discuss your project and explore how AI can accelerate your development timeline
              while maintaining the highest quality standards.
            </Text>
            <HStack justify="center" gap={4} pt={4} flexWrap="wrap">
              <CTAButton
                href="/contact"
                variant="secondary"
                size="lg"
              >
                Start Your Project
              </CTAButton>
              <CTAButton
                href="/ai-workflow"
                variant="outline"
                size="lg"
              >
                See Our Process
              </CTAButton>
            </HStack>
          </Stack>
        </Container>
      </Box>

      {/* Tech Excellence Section */}
      <Box py={{ base: 16, md: 24 }} bg="white" _dark={{ bg: "gray.800" }}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center">
            <Stack gap={6}>
              <Badge colorPalette="accent" size="lg" width="fit-content">
                Technology Stack
              </Badge>
              <Heading size={{ base: "xl", md: "2xl" }}>
                Built with Modern, Production-Ready Technologies
              </Heading>
              <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.400" }}>
                We use the latest frameworks and AI tools to build scalable, maintainable applications.
                From Next.js and TypeScript to Claude and GPT-4, our stack is optimized for performance
                and developer experience.
              </Text>
              <HStack gap={4} pt={4}>
                <CTAButton href="/tech-stack" size="lg">
                  Explore Our Stack
                </CTAButton>
              </HStack>
            </Stack>

            <Grid templateColumns="repeat(3, 1fr)" gap={4}>
              {[
                "Next.js", "TypeScript", "React", "Python", "Claude AI", "GPT-4",
                "PostgreSQL", "Docker", "AWS", "TensorFlow", "LangChain", "Vercel"
              ].map((tech) => (
                <Box
                  key={tech}
                  p={4}
                  bg="gray.50"
                  _dark={{ bg: "gray.700" }}
                  borderRadius="md"
                  textAlign="center"
                  fontSize="sm"
                  fontWeight="semibold"
                  transition="all 0.2s"
                  _hover={{
                    bg: "brand.50",
                    color: "brand.600",
                    transform: "scale(1.05)",
                  }}
                >
                  {tech}
                </Box>
              ))}
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Final CTA Section */}
      <Box py={{ base: 16, md: 24 }} bg="gray.50" _dark={{ bg: "gray.900" }}>
        <Container maxW="4xl">
          <Stack gap={6} textAlign="center">
            <Heading size={{ base: "xl", md: "2xl" }}>
              Let's Turn Your Vision Into Reality
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} color="gray.600" _dark={{ color: "gray.400" }}>
              Schedule a free discovery call to discuss your project requirements, timeline, and budget.
              We'll provide honest feedback and a clear path forward.
            </Text>
            <HStack justify="center" gap={4} pt={4} flexWrap="wrap">
              <CTAButton href="/contact" size="lg">
                Book Free Consultation
              </CTAButton>
              <CTAButton href="/studio" variant="outline" size="lg">
                Browse Studio
              </CTAButton>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
