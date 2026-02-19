'use client'

import { Box, Grid, Stack, Text } from "@chakra-ui/react"
import Link from "next/link"
import { HiCode, HiChip } from "react-icons/hi"
import SkillBar from "@/components/SkillBar"
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
    <Box minH="100vh" background="var(--cli-bg)" color="var(--cli-fg)">
      {/* Hero */}
      <Box
        py={{ base: "var(--space-16)", md: "var(--space-20)" }}
        borderBottom="var(--border-width-thick) solid var(--cli-border)"
      >
        <Box className="container">
          <Stack gap="var(--space-6)" maxW="4xl" mx="auto" textAlign="center">
            <Box display="flex" alignItems="center" justifyContent="center" gap="var(--space-2)">
              <HiChip size={24} color="var(--cli-primary)" />
              <Text fontFamily="var(--font-mono)" fontSize="var(--text-sm)" color="var(--cli-comment)">
                ~/tech-stack/skills.json
              </Text>
            </Box>

            <Text
              as="h1"
              fontSize={{ base: "var(--text-4xl)", md: "var(--text-5xl)" }}
              fontWeight="var(--font-black)"
              lineHeight="var(--leading-tight)"
            >
              <Text as="span" color="var(--cli-primary)">$</Text> npm list{" "}
              <Text as="span" color="var(--cli-secondary)">--depth=all</Text>
              <span className="cli-cursor-line"></span>
            </Text>

            <Text
              fontSize="var(--text-lg)"
              color="var(--cli-fgAlt)"
              fontFamily="var(--font-mono)"
              lineHeight="var(--leading-relaxed)"
            >
              Cutting-edge technologies. Proven results. Production-ready code.
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
              $ cat tech-philosophy.md
            </Text>
            <Text
              fontSize={{ base: "var(--text-2xl)", md: "var(--text-3xl)" }}
              fontWeight="var(--font-bold)"
            >
              Modern Stack, Proven Results
            </Text>
            <Text fontSize="var(--text-base)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
              # Our technology choices are driven by real-world performance
              <br />
              # Developer productivity and long-term maintainability
              <br />
              # We stay at the forefront while ensuring stability and support
            </Text>
          </Stack>
        </Box>
      </Box>

      {/* Skills Section */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }}>
        <Box className="container">
          <Stack gap="var(--space-12)">
            {skillCategories.map((category) => (
              <Box key={category.category}>
                <Text
                  fontFamily="var(--font-mono)"
                  fontSize="var(--text-sm)"
                  color="var(--cli-primary)"
                  mb="var(--space-2)"
                >
                  $ cat ./skills/{category.category.toLowerCase().replace(/ /g, '-')}.json
                </Text>
                <Text
                  fontSize="var(--text-2xl)"
                  fontWeight="var(--font-bold)"
                  mb="var(--space-6)"
                  textAlign="center"
                >
                  {category.category}
                </Text>
                <Box
                  className="terminal-window"
                >
                  <Box className="terminal-header">
                    <span className="terminal-button close"></span>
                    <span className="terminal-button minimize"></span>
                    <span className="terminal-button maximize"></span>
                    <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">
                      {category.category}.txt
                    </Text>
                  </Box>
                  <Box className="terminal-body">
                    <Stack gap="var(--space-6)">
                      {category.skills.map((skill) => (
                        <SkillBar key={skill.name} skill={skill} />
                      ))}
                    </Stack>
                  </Box>
                </Box>
              </Box>
            ))}
          </Stack>
        </Box>
      </Box>

      {/* Philosophy Section */}
      <Box py={{ base: "var(--space-16)", md: "var(--space-20)" }} background="var(--cli-bgAlt)">
        <Box className="container">
          <Grid templateColumns={{ base: "1fr", lg: "1fr 1fr" }} gap="var(--space-12)" alignItems="start">
            <Stack gap="var(--space-6)">
              <Text
                fontFamily="var(--font-mono)"
                fontSize="var(--text-sm)"
                color="var(--cli-accent)"
              >
                # Philosophy
              </Text>
              <Text
                fontSize={{ base: "var(--text-2xl)", md: "var(--text-3xl)" }}
                fontWeight="var(--font-bold)"
              >
                Our Technology Philosophy
              </Text>
              <Text fontSize="var(--text-base)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
                We believe in choosing the right tool for the job, not just the newest or most popular one.
                Our stack is constantly evolving based on production experience and community feedback.
              </Text>
            </Stack>

            <Box className="terminal-window">
              <Box className="terminal-header">
                <span className="terminal-button close"></span>
                <span className="terminal-button minimize"></span>
                <span className="terminal-button maximize"></span>
                <Text ml="var(--space-2)" fontSize="var(--text-xs)" color="var(--cli-fgAlt)">
                  principles.txt
                </Text>
              </Box>
              <Box className="terminal-body">
                <Stack gap="var(--space-6)">
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
                      <Text fontWeight="var(--font-semibold)" fontSize="var(--text-base)" mb="var(--space-2)" color="var(--cli-primary)">
                        # {point.title}
                      </Text>
                      <Text color="var(--cli-fgAlt)" fontSize="var(--text-sm)">
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
        borderTop="var(--border-width-thick) solid var(--cli-border)"
      >
        <Box className="container">
          <Stack gap="var(--space-6)" textAlign="center" maxW="3xl" mx="auto">
            <Text
              fontSize={{ base: "var(--text-2xl)", md: "var(--text-3xl)" }}
              fontWeight="var(--font-bold)"
            >
              Build with the Best Technology
            </Text>
            <Text fontSize="var(--text-lg)" color="var(--cli-fgAlt)" fontFamily="var(--font-mono)">
              Let's discuss which technologies are the best fit for your specific project requirements.
            </Text>
            <Box display="flex" alignItems="center" justifyContent="center" gap="var(--space-4)" flexWrap="wrap">
              <Link href="/contact" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-primary">
                  $ init --consultation
                </Box>
              </Link>
              <Link href="/lookbook" style={{ textDecoration: 'none' }}>
                <Box className="btn btn-outline">
                  --view-results
                </Box>
              </Link>
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  )
}
