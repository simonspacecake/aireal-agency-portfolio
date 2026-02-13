'use client'

import { Box, HStack, Text, Progress } from "@chakra-ui/react"
import type { Skill } from "@/types"

interface SkillBarProps {
  skill: Skill
}

export default function SkillBar({ skill }: SkillBarProps) {
  return (
    <Box mb={4}>
      <HStack justify="space-between" mb={2}>
        <Text fontWeight="semibold" fontSize="md">
          {skill.name}
        </Text>
        <Text fontSize="sm" color="gray.600" _dark={{ color: "gray.400" }}>
          {skill.level}%
        </Text>
      </HStack>
      <Progress.Root value={skill.level} colorPalette="brand" size="md">
        <Progress.Track>
          <Progress.Range />
        </Progress.Track>
      </Progress.Root>
      {skill.description && (
        <Text fontSize="xs" color="gray.500" _dark={{ color: "gray.500" }} mt={1}>
          {skill.description}
        </Text>
      )}
    </Box>
  )
}
