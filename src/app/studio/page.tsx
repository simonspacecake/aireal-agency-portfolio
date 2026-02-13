'use client'

import { Box, Container, Heading, Text, Stack, Grid, Badge, SimpleGrid } from "@chakra-ui/react"
import Hero from "@/components/Hero"
import CTAButton from "@/components/CTAButton"

const galleryCategories = [
  {
    title: "Design Systems",
    description: "Comprehensive UI/UX design systems with component libraries and style guides",
    items: [
      "E-commerce Design System",
      "SaaS Platform Components",
      "Mobile App UI Kit",
      "Enterprise Dashboard Library",
    ],
  },
  {
    title: "Brand Identity",
    description: "Logo design, brand guidelines, and visual identity systems",
    items: [
      "AI Startup Branding",
      "Tech Company Rebrand",
      "Healthcare Brand Identity",
      "Fintech Visual System",
    ],
  },
  {
    title: "User Interfaces",
    description: "Modern, intuitive interfaces for web and mobile applications",
    items: [
      "Banking App Interface",
      "Fitness Tracking Dashboard",
      "Project Management Tool",
      "Social Media Platform",
    ],
  },
  {
    title: "Data Visualizations",
    description: "Interactive dashboards and data visualization solutions",
    items: [
      "Analytics Dashboard",
      "Real-time Metrics Board",
      "Business Intelligence Tool",
      "IoT Monitoring System",
    ],
  },
]

const showcaseProjects = [
  {
    title: "AI-Powered Dashboard",
    category: "Data Visualization",
    color: "brand",
  },
  {
    title: "Mobile Banking App",
    category: "User Interface",
    color: "accent",
  },
  {
    title: "E-Commerce Platform",
    category: "Design System",
    color: "green",
  },
  {
    title: "Healthcare Portal",
    category: "User Interface",
    color: "purple",
  },
  {
    title: "Analytics Suite",
    category: "Data Visualization",
    color: "blue",
  },
  {
    title: "SaaS Platform",
    category: "Design System",
    color: "orange",
  },
]

export default function StudioPage() {
  return (
    <Box>
      {/* Hero Section */}
      <Hero
        title="Our Studio"
        subtitle="Explore our design work, from comprehensive design systems to stunning user interfaces and data visualizations."
        primaryCTA={{
          text: "Start a Project",
          href: "/contact",
        }}
        secondaryCTA={{
          text: "View Portfolio",
          href: "/lookbook",
        }}
      />

      {/* Introduction Section */}
      <Box py={{ base: 16, md: 20 }} bg="white" _dark={{ bg: "gray.800" }}>
        <Container maxW="5xl">
          <Stack gap={6} textAlign="center">
            <Heading size={{ base: "xl", md: "2xl" }}>
              Design Meets Functionality
            </Heading>
            <Text
              fontSize={{ base: "md", md: "lg" }}
              color="gray.600"
              _dark={{ color: "gray.400" }}
              maxW="3xl"
              mx="auto"
            >
              Our studio combines aesthetic excellence with user-centered design principles.
              Every pixel is crafted with purpose, every interaction designed for delight.
              We don't just make things look good—we make them work better.
            </Text>
          </Stack>
        </Container>
      </Box>

      {/* Gallery Showcase */}
      <Box py={{ base: 16, md: 24 }} bg="gray.50" _dark={{ bg: "gray.900" }}>
        <Container maxW="7xl">
          <Stack gap={12}>
            <Box textAlign="center">
              <Badge colorPalette="brand" size="lg" mb={4}>
                Featured Work
              </Badge>
              <Heading size={{ base: "xl", md: "2xl" }} mb={4}>
                Visual Showcase
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                _dark={{ color: "gray.400" }}
              >
                A selection of our best design work across different categories
              </Text>
            </Box>

            <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={6}>
              {showcaseProjects.map((project, index) => (
                <Box
                  key={index}
                  position="relative"
                  borderRadius="xl"
                  overflow="hidden"
                  h="300px"
                  bg={`${project.color}.100`}
                  _dark={{ bg: `${project.color}.900` }}
                  cursor="pointer"
                  transition="all 0.3s"
                  _hover={{
                    transform: "scale(1.02)",
                    shadow: "2xl",
                  }}
                >
                  <Box
                    position="absolute"
                    top={0}
                    left={0}
                    right={0}
                    bottom={0}
                    bgGradient={`linear(to-br, ${project.color}.200, ${project.color}.400)`}
                    opacity={0.6}
                    _dark={{
                      bgGradient: `linear(to-br, ${project.color}.600, ${project.color}.800)`,
                    }}
                  />
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    p={6}
                    bgGradient="linear(to-t, blackAlpha.800, transparent)"
                  >
                    <Badge colorPalette={project.color} size="sm" mb={2}>
                      {project.category}
                    </Badge>
                    <Heading size="md" color="white">
                      {project.title}
                    </Heading>
                  </Box>
                </Box>
              ))}
            </SimpleGrid>
          </Stack>
        </Container>
      </Box>

      {/* Categories Section */}
      <Box py={{ base: 16, md: 24 }} bg="white" _dark={{ bg: "gray.800" }}>
        <Container maxW="7xl">
          <Stack gap={12}>
            <Box textAlign="center">
              <Heading size={{ base: "xl", md: "2xl" }} mb={4}>
                Design Categories
              </Heading>
              <Text
                fontSize={{ base: "md", md: "lg" }}
                color="gray.600"
                _dark={{ color: "gray.400" }}
                maxW="2xl"
                mx="auto"
              >
                Our expertise spans across multiple design disciplines
              </Text>
            </Box>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap={8}
            >
              {galleryCategories.map((category) => (
                <Box
                  key={category.title}
                  p={8}
                  bg="gray.50"
                  _dark={{ bg: "gray.900" }}
                  borderRadius="lg"
                  borderWidth="2px"
                  borderColor="transparent"
                  transition="all 0.3s"
                  _hover={{
                    borderColor: "brand.500",
                    shadow: "lg",
                    transform: "translateY(-4px)",
                  }}
                >
                  <Heading size="lg" mb={3}>
                    {category.title}
                  </Heading>
                  <Text color="gray.600" _dark={{ color: "gray.400" }} mb={6}>
                    {category.description}
                  </Text>
                  <Stack gap={2}>
                    {category.items.map((item, idx) => (
                      <Box
                        key={idx}
                        p={3}
                        bg="white"
                        _dark={{ bg: "gray.800" }}
                        borderRadius="md"
                        fontSize="sm"
                        fontWeight="medium"
                      >
                        {item}
                      </Box>
                    ))}
                  </Stack>
                </Box>
              ))}
            </Grid>
          </Stack>
        </Container>
      </Box>

      {/* Process Section */}
      <Box py={{ base: 16, md: 20 }} bg="gray.50" _dark={{ bg: "gray.900" }}>
        <Container maxW="7xl">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap={12} alignItems="center">
            <Stack gap={6}>
              <Badge colorPalette="accent" size="lg" width="fit-content">
                Our Approach
              </Badge>
              <Heading size={{ base: "xl", md: "2xl" }}>
                Design Process That Delivers
              </Heading>
              <Text fontSize="lg" color="gray.600" _dark={{ color: "gray.400" }}>
                We follow a proven design process that ensures every project meets your goals
                and exceeds user expectations.
              </Text>
              <Stack gap={4}>
                {["Discovery & Research", "Wireframing & Prototyping", "Visual Design", "Testing & Iteration", "Development Handoff"].map((step, idx) => (
                  <Box key={step} display="flex" alignItems="center" gap={3}>
                    <Box
                      w="40px"
                      h="40px"
                      borderRadius="full"
                      bg="brand.500"
                      color="white"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="bold"
                    >
                      {idx + 1}
                    </Box>
                    <Text fontWeight="semibold">{step}</Text>
                  </Box>
                ))}
              </Stack>
            </Stack>

            <Box
              bg="white"
              _dark={{ bg: "gray.800" }}
              p={8}
              borderRadius="xl"
              shadow="xl"
            >
              <Stack gap={6}>
                <Heading size="lg">Why Our Designs Work</Heading>
                <Stack gap={4}>
                  {[
                    { title: "User-Centered", desc: "Every design decision is backed by user research and data" },
                    { title: "Performance-Focused", desc: "Optimized for speed and accessibility" },
                    { title: "Scalable Systems", desc: "Built to grow with your business" },
                    { title: "Brand Aligned", desc: "Consistent with your brand identity and values" },
                  ].map((point) => (
                    <Box key={point.title}>
                      <Text fontWeight="semibold" mb={1}>{point.title}</Text>
                      <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
                        {point.desc}
                      </Text>
                    </Box>
                  ))}
                </Stack>
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
              Let's Create Something Beautiful
            </Heading>
            <Text fontSize={{ base: "md", md: "lg" }} opacity={0.95}>
              Transform your vision into stunning designs that users love and that drive business results.
            </Text>
            <Box pt={4}>
              <CTAButton href="/contact" variant="secondary" size="lg">
                Start Your Design Project
              </CTAButton>
            </Box>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
