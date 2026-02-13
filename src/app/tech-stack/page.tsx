'use client'

import { Box, Container, Heading, Text, Stack, Grid } from "@chakra-ui/react"
import Hero from "@/components/Hero"
import SkillBar from "@/components/SkillBar"
import CTAButton from "@/components/CTAButton"
import type { SkillCategory } from "@/types"

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend Development",
    skills: [
      { name: "React.js", level: 95, description: "5+ years building scalable React applications" },
      { name: "Next.js", level: 90, description: "Expert in server-side rendering and static generation" },
      { name: "TypeScript", level: 90, description: "Type-safe development across all projects" },
      { name: "Vue.js", level: 85, description: "Complex SPA development with Vue 3" },
      { name: "Svelte", level: 80, description: "Modern reactive framework expertise" },
      { name: "Tailwind CSS", level: 95, description: "Utility-first styling and custom design systems" },
      { name: "Chakra UI", level: 90, description: "Accessible component library implementation" },
    ],
  },
  {
    category: "Backend Development",
    skills: [
      { name: "Node.js", level: 90, description: "Scalable server-side JavaScript applications" },
      { name: "Python", level: 90, description: "Django, Flask, and FastAPI expertise" },
      { name: "Go", level: 85, description: "High-performance microservices" },
      { name: "Rust", level: 75, description: "Systems programming and WebAssembly" },
      { name: "GraphQL", level: 85, description: "API design and implementation" },
      { name: "REST APIs", level: 95, description: "RESTful architecture design and best practices" },
    ],
  },
  {
    category: "AI & Machine Learning",
    skills: [
      { name: "LangChain", level: 90, description: "Complex LLM application development" },
      { name: "OpenAI API", level: 95, description: "GPT-4 integration and prompt engineering" },
      { name: "Claude API", level: 95, description: "Advanced AI agent development" },
      { name: "TensorFlow", level: 80, description: "Deep learning model training and deployment" },
      { name: "PyTorch", level: 80, description: "Neural network development" },
      { name: "Vector Databases", level: 85, description: "Pinecone, Weaviate, and Chroma" },
    ],
  },
  {
    category: "Databases",
    skills: [
      { name: "PostgreSQL", level: 90, description: "Advanced SQL and query optimization" },
      { name: "MongoDB", level: 85, description: "NoSQL database design and scaling" },
      { name: "Redis", level: 85, description: "Caching and real-time data storage" },
      { name: "Supabase", level: 90, description: "Full-stack database and auth solutions" },
    ],
  },
  {
    category: "DevOps & Cloud",
    skills: [
      { name: "Docker", level: 90, description: "Container orchestration and deployment" },
      { name: "AWS", level: 85, description: "EC2, S3, Lambda, and more" },
      { name: "Vercel", level: 95, description: "Next.js deployment and optimization" },
      { name: "GitHub Actions", level: 90, description: "CI/CD pipeline automation" },
      { name: "Kubernetes", level: 75, description: "Container orchestration at scale" },
    ],
  },
]

export default function TechStackPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Hero
        title="Our Technology Expertise"
        subtitle="We leverage cutting-edge technologies to build scalable, performant, and maintainable applications. Our stack is carefully selected for optimal developer experience and production reliability."
        primaryCTA={{
          text: "Discuss Your Project",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "See Our Work",
          href: "/lookbook",
        }}
      />

      {/* Introduction */}
      <Box py={{ base: 16, md: 20 }} bg="white" _dark={{ bg: "gray.800" }}>
        <Container maxW="5xl">
          <Stack gap={6} textAlign="center">
            <Heading size={{ base: "xl", md: "2xl" }}>
              Modern Stack, Proven Results
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              maxW="3xl"
              mx="auto"
            >
              Our technology choices are driven by real-world performance requirements,
              developer productivity, and long-term maintainability. We stay at the forefront
              of technology while ensuring stability and support.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Skills Section */}
      <Box py={{ base: 16, md: 24 }} bg="gray.50" _dark={{ bg: "gray.900" }}>
        <Container maxW="7xl">
          <Stack gap={16}>
            {skillCategories.map((category) => (
              <Box key={category.category}>
                <Heading size="xl" mb={8} textAlign="center">
                  {category.category}
                </Heading>
                <Box
                  bg="white"
                  _dark={{ bg: "gray.800" }}
                  p={8}
                  borderRadius="lg"
                  shadow="md"
                >
                  <Stack gap={6}>
                    {category.skills.map((skill) => (
                      <SkillBar key={skill.name} skill={skill} />
                    ))}
                  </Stack>
                </Box>
              </Box>
            ))}
          </Stack>
        </Container>
      </Box>

      {/* Philosophy Section */}
      <Box py={{ base: 16, md: 20 }} bg="white" _dark={{ bg: "gray.800" }}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center">
            <Stack gap={6}>
              <Heading size={{ base: "xl", md: "2xl" }}>
                Our Technology Philosophy
              </Heading>
              <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.400" }}>
                We believe in choosing the right tool for the job, not just the newest or most popular one.
                Our stack is constantly evolving based on production experience and community feedback.
              </Text>
            </Stack>

            <Box
              bg="gray.50"
              _dark={{ bg: "gray.900" }}
              p={8}
              borderRadius="xl"
            >
              <Stack gap={6}>
                {[
                  {
                    title: "Performance First",
                    desc: "Every technology choice is evaluated for production performance and scalability.",
                  },
                  {
                    title: "Developer Experience",
                    desc: "We prioritize tools that enhance productivity and code quality.",
                  },
                  {
                    title: "Long-term Support",
                    desc: "We choose mature, well-supported technologies with active communities.",
                  },
                  {
                    title: "Type Safety",
                    desc: "TypeScript across the stack for better maintainability and fewer bugs.",
                  },
                ].map((point) => (
                  <Box key={point.title}>
                    <Text fontWeight="semibold" fontSize="lg" mb={2}>
                      {point.title}
                    </Text>
                    <Text color="gray.600" _dark={{ color: "gray.400" }}>
                      {point.desc}
                    </Text>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
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
              Build with the Best Technology
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} opacity={0.95}>
              Let's discuss which technologies are the best fit for your specific project requirements.
            </Text>
            <Box pt={4}>
              <CTAButton href="/contact" variant="secondary" size="lg">
                Start Your Project
              </CTAButton>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
