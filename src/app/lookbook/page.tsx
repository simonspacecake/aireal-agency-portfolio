'use client'

import { Box, Container, Heading, Text, Stack, Grid, Badge, HStack } from "@chakra-ui/react"
import Hero from "@/components/Hero"
import ProjectCard from "@/components/ProjectCard"
import CTAButton from "@/components/CTAButton"
import type { Project } from "@/types"

const projects: Project[] = [
  {
    id: "featured-1",
    title: "AI-Powered E-Commerce Revolution",
    category: "E-commerce",
    description: "Complete platform transformation for a mid-sized retailer. Implemented AI-driven product recommendations, dynamic pricing, and intelligent inventory management. Reduced cart abandonment by 47% and increased average order value by 32%.",
    technologies: ["Next.js 14", "TypeScript", "OpenAI API", "PostgreSQL", "Stripe", "Vercel"],
    results: [
      { metric: "conversion rate increase", value: "47%" },
      { metric: "avg order value growth", value: "+32%" },
      { metric: "page load time", value: "< 1.2s" },
    ],
  },
  {
    id: "ai-1",
    title: "Enterprise Content Generation Platform",
    category: "AI/ML",
    description: "Built a sophisticated content generation system for a Fortune 500 company. Leverages Claude 4.5 and GPT-4 for multi-format content creation with brand voice consistency, workflow automation, and real-time collaboration.",
    technologies: ["Python", "LangChain", "Claude API", "GPT-4", "Redis", "React", "AWS"],
    results: [
      { metric: "content production time", value: "-85%" },
      { metric: "quality consistency score", value: "9.4/10" },
      { metric: "cost savings", value: "$180K/year" },
    ],
  },
  {
    id: "saas-1",
    title: "Real-Time Analytics & Insights Dashboard",
    category: "SaaS",
    description: "Enterprise-grade analytics platform with predictive insights, custom reporting, and automated anomaly detection. Processes over 10M events daily with sub-second query response times.",
    technologies: ["Vue.js", "Python", "TensorFlow", "MongoDB", "WebSockets", "Docker"],
    results: [
      { metric: "data processing speed", value: "10x faster" },
      { metric: "user adoption rate", value: "94%" },
      { metric: "customer satisfaction", value: "4.9/5" },
    ],
  },
  {
    id: "web-1",
    title: "Healthcare Patient Portal",
    category: "Web Application",
    description: "HIPAA-compliant patient portal with telemedicine capabilities, appointment scheduling, prescription management, and secure messaging. Serves 50,000+ active users monthly.",
    technologies: ["Next.js", "Node.js", "PostgreSQL", "WebRTC", "Twilio", "AWS"],
    results: [
      { metric: "patient engagement", value: "+156%" },
      { metric: "appointment no-shows", value: "-42%" },
      { metric: "admin workload reduction", value: "65%" },
    ],
  },
  {
    id: "mobile-1",
    title: "Fitness Tracking & AI Coach App",
    category: "Mobile App",
    description: "Cross-platform fitness application with AI-powered personalized workout plans, nutrition tracking, and virtual coaching. Integrates with wearable devices and uses computer vision for form correction.",
    technologies: ["React Native", "Python", "TensorFlow", "Firebase", "OpenAI", "Supabase"],
    results: [
      { metric: "daily active users growth", value: "+240%" },
      { metric: "user retention (90-day)", value: "78%" },
      { metric: "avg session duration", value: "23 mins" },
    ],
  },
  {
    id: "ai-2",
    title: "Customer Support AI Assistant",
    category: "AI/ML",
    description: "Intelligent customer support system that handles 70% of inquiries autonomously. Features sentiment analysis, multi-language support, and seamless human handoff.",
    technologies: ["Python", "Claude API", "LangChain", "PostgreSQL", "Next.js", "WebSockets"],
    results: [
      { metric: "ticket resolution time", value: "-68%" },
      { metric: "customer satisfaction", value: "4.8/5" },
      { metric: "support cost savings", value: "$320K/year" },
    ],
  },
]

const categories = ["All", "AI/ML", "E-commerce", "SaaS", "Web Application", "Mobile App"]

export default function LookbookPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Hero
        title="Our Work"
        subtitle="Explore our portfolio of successful projects. Each one showcases our commitment to quality, innovation, and measurable results."
        primaryCTA={{
          text: "Start Your Project",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "See Our Process",
          href: "/ai-workflow",
        }}
      />

      {/* Filters Section */}
      <Box
        py={8}
        bg="white"
        borderBottom="1px solid"
        borderColor="gray.200"
        position="sticky"
        top="73px"
        zIndex={100}
        _dark={{ bg: "gray.800", borderColor: "gray.700" }}
      >
        <Container maxW="7xl">
          <HStack gap={3} flexWrap="wrap" justify="center">
            {categories.map((category) => (
              <Badge
                key={category}
                size="lg"
                colorPalette={category === "All" ? "brand" : "gray"}
                cursor="pointer"
                transition="all 0.2s"
                _hover={{
                  transform: "scale(1.05)",
                }}
              >
                {category}
              </Badge>
            ))}
          </HStack>
        </Container>
      </Box>

      {/* Featured Project */}
      <Box py={{ base: 16, md: 20 }} bg="gray.50" _dark={{ bg: "gray.900" }}>
        <Container maxW="7xl">
          <Stack gap={8}>
            <Box textAlign="center">
              <Badge colorPalette="accent" size="lg" mb={4}>
                Featured Project
              </Badge>
              <Heading size={{ base: "xl", md: "2xl" }}>
                {projects[0].title}
              </Heading>
            </Box>

            <Box
              bg="white"
              _dark={{ bg: "gray.800" }}
              borderRadius="xl"
              overflow="hidden"
              shadow="xl"
            >
              <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={0}>
                <Box
                  bg="gradient.to-br(brand.100, accent.100)"
                  p={{ base: 8, md: 12 }}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  <Box
                    fontSize="6xl"
                    fontWeight="black"
                    bgGradient="linear(to-r, brand.500, accent.500)"
                    bgClip="text"
                    textAlign="center"
                  >
                    {projects[0].results?.[0].value}
                    <Text fontSize="xl" color="gray.600" _dark={{ color: "gray.400" }} mt={2}>
                      {projects[0].results?.[0].metric}
                    </Text>
                  </Box>
                </Box>

                <Box p={{ base: 8, md: 12 }}>
                  <Stack gap={6}>
                    <Box>
                      <Badge colorPalette="brand" size="sm" mb={3}>
                        {projects[0].category}
                      </Badge>
                      <Text fontSize="lg" color="gray.700" _dark={{ color: "gray.300" }}>
                        {projects[0].description}
                      </Text>
                    </Box>

                    {projects[0].results && (
                      <Stack gap={3}>
                        <Text fontWeight="semibold" fontSize="sm">Key Results:</Text>
                        {projects[0].results.map((result, idx) => (
                          <HStack key={idx}>
                            <Badge colorPalette="green" size="sm">
                              {result.value}
                            </Badge>
                            <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
                              {result.metric}
                            </Text>
                          </HStack>
                        ))}
                      </Stack>
                    )}

                    <Box>
                      <Text fontWeight="semibold" fontSize="sm" mb={2}>Tech Stack:</Text>
                      <HStack gap={2} flexWrap="wrap">
                        {projects[0].technologies.map((tech) => (
                          <Badge key={tech} size="sm" colorPalette="gray">
                            {tech}
                          </Badge>
                        ))}
                      </HStack>
                    </Box>
                  </Stack>
                </Box>
              </Grid>
            </Box>
          </Stack>
        </Container>
      </Box>

      {/* All Projects Grid */}
      <Box py={{ base: 16, md: 24 }} bg="white" _dark={{ bg: "gray.800" }}>
        <Container maxW="7xl">
          <Stack gap={12}>
            <Box textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} mb={4}>
                Case Studies
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                _dark={{ color: "gray.400" }}
                maxW="2xl"
                mx="auto"
              >
                Deep dive into how we've solved complex challenges across different industries
              </Text>
            </Box>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={6}
            >
              {projects.slice(1).map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
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
              Ready to Create Your Success Story?
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} opacity={0.95}>
              Let's discuss how we can help you achieve similar results for your business.
            </Text>
            <HStack justify="center" gap={4} pt={4}>
              <CTAButton href="/contact" variant="secondary" size="lg">
                Get Started
              </CTAButton>
              <CTAButton href="/tech-stack" variant="outline" size="lg">
                Our Technology
              </CTAButton>
            </HStack>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
