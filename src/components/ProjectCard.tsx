'use client'

import { Box, Card, Heading, Text, Badge, Stack, HStack } from "@chakra-ui/react"
import type { Project } from "@/types"

interface ProjectCardProps {
  project: Project
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card.Root
      overflow="hidden"
      transition="all 0.3s"
      _hover={{
        transform: "translateY(-4px)",
        shadow: "xl",
      }}
    >
      <Card.Body gap={4}>
        <Box>
          <HStack mb={2}>
            <Badge colorPalette="brand" size="sm">
              {project.category}
            </Badge>
          </HStack>
          <Heading size="lg" mb={2}>
            {project.title}
          </Heading>
          <Text color="gray.600" _dark={{ color: "gray.400" }}>
            {project.description}
          </Text>
        </Box>

        {project.results && project.results.length > 0 && (
          <Box>
            <Text fontWeight="semibold" mb={2} fontSize="sm" color="gray.700" _dark={{ color: "gray.300" }}>
              Results:
            </Text>
            <Stack gap={1}>
              {project.results.map((result, index) => (
                <HStack key={index}>
                  <Text fontSize="2xl" fontWeight="bold" color="brand.500">
                    {result.value}
                  </Text>
                  <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
                    {result.metric}
                  </Text>
                </HStack>
              ))}
            </Stack>
          </Box>
        )}

        <Box>
          <Text fontWeight="semibold" mb={2} fontSize="sm" color="gray.700" _dark={{ color: "gray.300" }}>
            Tech Stack:
          </Text>
          <HStack gap={2} flexWrap="wrap">
            {project.technologies.map((tech) => (
              <Badge key={tech} colorPalette="gray" size="sm">
                {tech}
              </Badge>
            ))}
          </HStack>
        </Box>
      </Card.Body>
    </Card.Root>
  )
}
