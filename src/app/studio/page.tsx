'use client'

import { Box, Grid, Stack, Text, HStack } from "@chakra-ui/react"
import Link from "next/link"
import { HiFolder, HiEye } from "react-icons/hi"

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
    color: "var(--cli-primary)",
  },
  {
    title: "Mobile Banking App",
    category: "User Interface",
    color: "var(--cli-accent)",
  },
  {
    title: "E-Commerce Platform",
    category: "Design System",
    color: "var(--cli-success)",
  },
  {
    title: "Healthcare Portal",
    category: "User Interface",
    color: "var(--cli-secondary)",
  },
  {
    title: "Analytics Suite",
    category: "Data Visualization",
    color: "var(--cli-cyan)",
  },
  {
    title: "SaaS Platform",
    category: "Design System",
    color: "var(--cli-orange)",
  },
]

export default function StudioPage() {
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
                ~/studio/gallery
              </Text>
            </HStack>

            <Text
              as="h1"
              fontSize={{ base: "var(--text-4xl)", md: "var(--text-5xl)" }}
              fontWeight="var(--font-black)"
              lineHeight="var(--leading-tight)"
            >
              <Text as="span" color="var(--cli-primary)">$</Text> cd studio{" "}
              <Text as="span" color="var(--cli-secondary)">&& ls -la</Text>
              <span className="cli-cursor-line"></span>
            </Text>

            <Text
              fontSize="var(--text-lg)"
              color="var(--cli-fgAlt)"
              fontFamily="var(--font-mono)"
              lineHeight="var(--leading-relaxed)"
            >
              Design work. Visual identity. User interfaces. All crafted with precision.
            </Text>
          </Stack>
        </Box>
      </Box>

      {/* Introduction */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }} background="var(--cli-bgAlt)">
        <Box className="container">
          <Stack gap="var(--space-6)" textAlign="center" maxW="3xl" mx="auto">
            <Text
              fontFamily="var(--font-mono)"
              fontSize="var(--text-sm)"
              color="var(--cli-primary)"
            >
              $ cat studio.md
            </Text>
            <Text
              fontSize={{ base: "var(--text-2xl)", md: "var(--text-3xl)" }}
              fontWeight="var(--font-bold)"
            >
              Design Meets Functionality
            </Text>
            <Text fontSize="var(--text-base)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
              # Every pixel is crafted with purpose
              <br />
              # Every interaction designed for delight
              <br />
              # We don't just make things look good—we make them work better
            </Text>
          </Stack>
        </Box>
      </Box>

      {/* Showcase Gallery */}
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
                $ find ./showcase -type f | head -6
              </Text>
              <Text
                fontSize="var(--text-2xl)"
                fontWeight="var(--font-bold)"
                mb="var(--space-2)"
              >
                Visual Showcase
              </Text>
              <Text fontSize="var(--text-base)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                Featured design work across different categories
              </Text>
            </Box>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)", lg: "repeat(3, 1fr)" }}
              gap="var(--space-6)"
            >
              {showcaseProjects.map((project, index) => (
                <Box
                  key={index}
                  position="relative"
                  borderRadius="var(--border-radius-lg)"
                  overflow="hidden"
                  h="300px"
                  background={project.color}
                  opacity={0.15}
                  border="var(--border-width) solid var(--cli-border)"
                  cursor="pointer"
                  transition="all var(--transition-base)"
                  _hover={{
                    transform: "translateY(-4px)",
                    boxShadow: "var(--shadow-xl)",
                    opacity: 0.25,
                  }}
                >
                  <Box
                    position="absolute"
                    bottom={0}
                    left={0}
                    right={0}
                    p="var(--space-6)"
                    background="linear-gradient(to top, var(--cli-bg), transparent)"
                  >
                    <HStack gap="var(--space-2)" mb="var(--space-2)">
                      <HiEye size={16} color="var(--cli-accent)" />
                      <Text fontSize="var(--text-xs)" color="var(--cli-accent)" fontFamily="var(--font-mono)">
                        {project.category}
                      </Text>
                    </HStack>
                    <Text fontSize="var(--text-lg)" fontWeight="var(--font-bold)" color="var(--cli-fg)">
                      {project.title}
                    </Text>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Stack>
        </Box>
      </Box>

      {/* Categories Section */}
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
                $ ls -la ./categories
              </Text>
              <Text
                fontSize="var(--text-2xl)"
                fontWeight="var(--font-bold)"
                mb="var(--space-2)"
              >
                Design Categories
              </Text>
              <Text fontSize="var(--text-base)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                Our expertise spans across multiple design disciplines
              </Text>
            </Box>

            <Grid
              templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }}
              gap="var(--space-8)"
            >
              {galleryCategories.map((category) => (
                <Box
                  key={category.title}
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
                      {category.title}.md
                    </Text>
                  </Box>
                  <Box className="terminal-body">
                    <Stack gap="var(--space-4)">
                      <Box>
                        <Text
                          fontSize="var(--text-xl)"
                          fontWeight="var(--font-bold)"
                          mb="var(--space-2)"
                        >
                          {category.title}
                        </Text>
                        <Text
                          fontSize="var(--text-sm)"
                          color="var(--cli-fgAlt)"
                          mb="var(--space-4)"
                        >
                          {category.description}
                        </Text>
                      </Box>
                      <Stack gap="var(--space-2)">
                        {category.items.map((item, idx) => (
                          <Box
                            key={idx}
                            px="var(--space-3)"
                            py="var(--space-2)"
                            background="var(--cli-bgHighlight)"
                            borderRadius="var(--border-radius)"
                            fontSize="var(--text-sm)"
                            fontFamily="var(--font-mono)"
                          >
                            <Text as="span" color="var(--cli-success)">✓</Text> {item}
                          </Box>
                        ))}
                      </Stack>
                    </Stack>
                  </Box>
                </Box>
              ))}
            </Grid>
          </Stack>
        </Box>
      </Box>

      {/* Process Section */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }}>
        <Box className="container">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="var(--space-12)" alignItems="start">
            <Stack gap="var(--space-6)">
              <Text
                fontFamily="var(--font-mono)"
                fontSize="var(--text-sm)"
                color="var(--cli-accent)"
              >
                # Our Approach
              </Text>
              <Text
                fontSize={{ base: "var(--text-2xl)", md: "var(--text-3xl)" }}
                fontWeight="var(--font-bold)"
              >
                Design Process That Delivers
              </Text>
              <Text fontSize="var(--text-base)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                We follow a proven design process that ensures every project meets your goals
                and exceeds user expectations.
              </Text>
              <Stack gap="var(--space-3)">
                {["Discovery & Research", "Wireframing & Prototyping", "Visual Design", "Testing & Iteration", "Development Handoff"].map((step, idx) => (
                  <HStack key={step} gap="var(--space-3)">
                    <Box
                      w="40px"
                      h="40px"
                      borderRadius="var(--border-radius-full)"
                      background="var(--cli-primary)"
                      color="var(--cli-bg)"
                      display="flex"
                      alignItems="center"
                      justifyContent="center"
                      fontWeight="var(--font-bold)"
                      fontFamily="var(--font-mono)"
                    >
                      {idx + 1}
                    </Box>
                    <Text fontWeight="var(--font-semibold)" fontFamily="var(--font-mono)">{step}</Text>
                  </HStack>
                ))}
              </Stack>
            </Stack>

            <Box className="terminal-window">
              <Box className="terminal-header">
                <span className="terminal-button close"></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
                <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">
                  why-our-designs-work.txt
                </Text>
              </Box>
              <Box className="terminal-body">
                <Stack gap="var(--space-4)">
                  {[
                    { title: "User-Centered", desc: "Every design decision is backed by user research and data" },
                    { title: "Performance-Focused", desc: "Optimized for speed and accessibility" },
                    { title: "Scalable Systems", desc: "Built to grow with your business" },
                    { title: "Brand Aligned", desc: "Consistent with your brand identity and values" },
                  ].map((point) => (
                    <Box key={point.title}>
                      <Text fontWeight="var(--font-semibold)" mb="var(--space-1)" color="var(--cli-primary)">
                        # {point.title}
                      </Text>
                      <Text fontSize="var(--text-sm)" color="var(--cli-fgAlt)">
                        {point.desc}
                      </Text>
                    </Box>
                  ))}
                </Stack>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>

      {/* CTA Section */}
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
              Let's Create Something Beautiful
            </Text>
            <Text fontSize="var(--text-lg)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
              Transform your vision into stunning designs that users love and drive business results.
            </Text>
            <HStack justify="center" gap="var(--space-4)">
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-primary">
                  $ init --design-project
                </Box>
              </Link>
              <Link href="/lookbook" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-outline">
                  --view-portfolio
                </Box>
              </Link>
            </HStack>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
